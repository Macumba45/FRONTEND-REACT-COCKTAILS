import { FormikHelpers } from "formik";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthenticatedToken } from "../../services/storage";
import { Category, Post } from "./type";


const FeedFormLogic = () => {


    const navigate = useNavigate()
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [modal, setModal] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            );
            const data = await response.json();
            setCategories(
                data.drinks.map((category: Category) => category.strCategory)
            );
        }
        fetchData();
    }, []);

    const handleId = useCallback(async () => {
        const token = getAuthenticatedToken();
        async function fetchData() {
            const response = await fetch(
                `http://localhost:8000/user/id/${token}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await response.json();
            return data.id;
        }
        return await fetchData();
    }, []);

    const handleSubmit = async (values: Post, { setSubmitting }: FormikHelpers<Post>) => {
        try {
            const id = await handleId();
            const token = getAuthenticatedToken(); // Obtener el token de localStorage
            const response = await fetch(
                'http://localhost:8000/feed/createPost',
                {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: values.title,
                        category: values.category,
                        image: values.image,
                        comment: values.comment,
                        user_FK: id,
                    }),
                }
            );
            setSubmitting(false);
            setModal(true)
            if (response.ok) {

                // navigate('/feed')
            }
        } catch (error) {
            console.log(error);
        }
    };

    return {

        navigate,
        categories,
        selectedImage,
        handleSubmit,
        setSelectedImage,
        setCategories,
        modal


    }
}

export default FeedFormLogic
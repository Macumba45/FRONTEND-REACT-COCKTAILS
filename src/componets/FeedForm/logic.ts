import { FormikHelpers } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthenticatedToken } from '../../services/storage';
import { callCategoriesType } from '../../services/api/category';
import { Category, Post } from './type';

const FeedFormLogic = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [modal, setModal] = useState<boolean>(false);

    const handleClose = () => {
        navigate('/feed');
    };

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
                `http://localhost:8000/users/id/${token}`,
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

    const handleSubmit = async (
        values: Post,
        { setSubmitting }: FormikHelpers<Post>
    ) => {
        try {
            const categories = await getCategories();
            let category_FK = "";
            categories.forEach(category => {
                if (category.category === values.category) {
                    category_FK = category.id;
                }
            });
            const id = await handleId();
            const token = getAuthenticatedToken(); // Obtener el token de localStorage
            const response = await fetch('http://localhost:8000/feeds/', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: values.title,
                    postCategory: values.category,
                    image: values.image,
                    comment: values.comment,
                    user_FK: id,
                    category_FK
                }),
            });
            setSubmitting(false);
            setModal(true);
            if (response.ok) {
                // navigate('/feed')
            }
        } catch (error) {
            console.log(error);
        }
    };
    const getCategories = useCallback(async () => {
        const categories = await callCategoriesType();
        return categories;
    }, [])

    return {
        navigate,
        categories,
        selectedImage,
        handleSubmit,
        setSelectedImage,
        setCategories,
        modal,
        handleClose,
    };
};

export default FeedFormLogic;

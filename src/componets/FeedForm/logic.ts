import { FormikHelpers } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthenticatedToken } from '../../services/storage';
import { callCategoriesType } from '../../services/api/category';
import { Category, Post } from './type';
import { fetchHandleId, fetchHandleSubmit } from '../../services/api/feedForm';

const FeedFormLogic = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [modal, setModal] = useState<boolean>(false);


    const handleClose = () => {
        navigate('/feed');
    };

    const handleId = useCallback(async () => {
        getAuthenticatedToken();
        async function fetchData() {
            const response = await fetchHandleId()
            const data = await response.json();
            return data.id;
        }
        return await fetchData();
    }, []);

    const handleSubmit = async (values: Post,
        { setSubmitting }: FormikHelpers<Post>
    ) => {
        try {
            await getCategories();
            await fetchHandleSubmit(values);
            setSubmitting(false);
            setModal(true);
        } catch (error) {
            console.log(error);
        }
    };
    const getCategories = useCallback(async () => {
        const categories = await callCategoriesType();
        return categories;
    }, []);

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

    return {
        navigate,
        categories,
        selectedImage,
        handleSubmit,
        setSelectedImage,
        setCategories,
        modal,
        handleClose,
        handleId
    };
};

export default FeedFormLogic;

import { useCallback, useState } from 'react';
import { getAuthenticatedToken } from '../../../services/storage';
import { callCategoriesType } from '../../../services/api/category';
import { Props } from './type';

const useLogic = () => {
    const [subCategories, setSubCategories] = useState<Props[]>([]);

    const fetchSubCategories = async (category?: string) => {
        if (category?.includes('2F')) {
            category = category.replace('2F', '/');
        }
        const categories = await getCategories();
        let categoryId = '';
        categories.forEach((dbCategory) => {
            if (dbCategory.category === category) {
                categoryId = dbCategory.id;
            }
        });

        try {
            const token = getAuthenticatedToken(); // Obtener el token de localStorage
            const url = `http://localhost:8000/cocktails/${categoryId}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
                },
            });
            const data = await response.json();
            setSubCategories(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const printCategoryDrink = useCallback(async () => {
        const category = subCategories.map((category: any) => ({
            idDrink: category.cocktail_id,
            strDrink: category.cocktail_name,
            strDrinkThumb: category.image,
        }));

        return category;
    }, [subCategories]);

    const getCategories = useCallback(async () => {
        const categories = await callCategoriesType();
        return categories;
    }, []);

    return {
        fetchSubCategories,
        subCategories,
        setSubCategories,
        printCategoryDrink,
    };
};

export default useLogic;

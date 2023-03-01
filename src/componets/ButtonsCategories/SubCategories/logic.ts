import { useCallback, useState } from 'react';
import { getAuthenticatedToken } from '../../../services/storage';
import { Props } from './type';

export const SubCategoriesLogic = () => {
    const [subCategories, setSubCategories] = useState<Props[]>([]);

    const fetchSubCategories = async (category?: string) => {
        try {
            const token = getAuthenticatedToken(); // Obtener el token de localStorage
            const url = `https://localhost:8000/sync-subCategory/${category}`;
            console.log(url);
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
                },
            });
            console.log(response);
            const data = await response.json();
            const categoryDrinks = data.drinks;
            setSubCategories(categoryDrinks);
            return categoryDrinks;
        } catch (error) {}
    };

    const printCategoryDrink = useCallback(async () => {
        const category = subCategories.map((category: any) => ({
            idDrink: category.idDrink,
            strDrink: category.strDrink,
            strDrinkThumb: category.strDrinkThumb,
        }));

        return category;
    }, [subCategories]);

    return {
        fetchSubCategories,
        subCategories,
        setSubCategories,
        printCategoryDrink,
    };
};

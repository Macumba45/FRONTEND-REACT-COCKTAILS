import { useCallback, useState } from 'react';
import { getAuthenticatedToken } from '../../../services/storage';
import { Props } from './type';

export const SubCategoriesLogic = () => {
    const [subCategories, setSubCategories] = useState<Props[]>([]);

    const fetchSubCategories = async (category?: string) => {
        try {
            console.log({ category })
            const token = getAuthenticatedToken(); // Obtener el token de localStorage
            const url = `http://localhost:8000/sync-subCategory/${category}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
                },
            });
            const data = await response.json();
            console.log({ data });
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

    return {
        fetchSubCategories,
        subCategories,
        setSubCategories,
        printCategoryDrink,
    };
};

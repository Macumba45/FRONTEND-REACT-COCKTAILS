import { useCallback, useEffect, useState } from 'react';
import { callCategoriesType } from '../../../services/api/category';
import { Props } from './type';
import { Params, useParams } from 'react-router-dom';
import { CallSubCategories } from '../../../services/api/subCategory';

const useLogic = () => {
    const [subCategories, setSubCategories] = useState<Props[]>([]);
    const { category } = useParams<Params>();
    const [isLoading, setIsLoading] = useState(true);

    const getCategories = useCallback(async () => {
        const categories = await callCategoriesType();
        return categories;
    }, []);

    const fetchSubCategories = useCallback(async (category?: string) => {
        if (category?.includes('2F')) {
            category = category.replace('2F', '/');
        }
        const categories = await getCategories();
        let categoryId = '';
        categories.forEach((dbCategory: any) => {
            if (dbCategory.category === category) {
                categoryId = dbCategory.id;
            }
        });

        const subCategories = await CallSubCategories(categoryId);
        setSubCategories(subCategories);
        setIsLoading(false);
        return subCategories; // add this line
    }, [setSubCategories, setIsLoading, getCategories]);


    const printCategoryDrink = useCallback(async () => {
        const category = subCategories.map((category: any) => ({
            idDrink: category.cocktail_id,
            strDrink: category.cocktail_name,
            strDrinkThumb: category.image,

        }));

        return category;
    }, [subCategories]);


    const handleCategories = useCallback(async () => {
        const modifiedCategory = category; // Reemplazar el caracter "/" por "_"
        const categories = await fetchSubCategories(modifiedCategory);

        setTimeout(() => {
            setSubCategories(categories);
            setIsLoading(false);
        }, 1000);
    }, [category, fetchSubCategories, setSubCategories, setIsLoading]);

    // Llamamos a la función handleCategories cuando se monta el componente
    useEffect(() => {
        handleCategories();
    }, [handleCategories]);

    return {
        fetchSubCategories,
        subCategories,
        setSubCategories,
        printCategoryDrink,
        handleCategories,
        isLoading,
        getCategories
    };
};

export default useLogic;

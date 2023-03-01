import { useCallback, useState } from 'react';
import { Props } from './type';

export const SubCategoriesLogic = () => {
    const [subCategories, setSubCategories] = useState<Props[]>([]);

    const fetchSubCategories = async (category: any) => {
        try {
            const encodedCategory = encodeURIComponent(category);
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodedCategory}`;
            const response = await fetch(url);
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

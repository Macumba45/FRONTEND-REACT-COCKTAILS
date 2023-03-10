import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { callCategories, fetchCategories } from '../../services/api/category';

const Images = [
    {
        category: 'Ordinary Drink',
        picture:
            'https://www.tastingtable.com/img/gallery/11-cocktails-to-try-if-you-like-drinking-gin/intro-1659025591.jpg',
    },
    {
        category: 'Cocktail',
        picture:
            'https://thumbs.dreamstime.com/b/set-various-cocktails-black-background-set-various-cocktails-shaker-black-background-188649840.jpg',
    },
    {
        category: 'Shake',
        picture:
            'https://hips.hearstapps.com/del.h-cdn.co/assets/15/24/1434133241-milkshakes.jpg',
    },
    {
        category: 'Other / Unknown',
        picture:
            'https://japanese-clothing.com/wp-content/uploads/2022/06/Sans_titre_-_2020-05-17T154130.995_1.jpg?v=1589722950',
    },
    {
        category: 'Cocoa',
        picture:
            'https://recipe4appetite.com/img/recipe-img/homemade-cocoa-drink.jpg',
    },
    {
        category: 'Shot',
        picture:
            'https://149694725.v2.pressablecdn.com/wp-content/uploads/2018/03/Popular-Shot-Recipes.jpg',
    },
    {
        category: 'Coffee / Tea',
        picture:
            'https://www.getflavor.com/wp-content/uploads/2021/09/Latte-and-Tea-Mojito-1152.jpg',
    },
    {
        category: 'Homemade Liqueur',
        picture:
            'https://images.immediate.co.uk/production/volatile/sites/30/2022/08/200615BBCGOODFOODCOVERVEGXMASCOVER202004592-copy-95936cf.jpg',
    },
    {
        category: 'Punch / Party Drink',
        picture:
            'https://petersfoodadventures.com/wp-content/uploads/2018/12/christmas-punch-1.png',
    },
    {
        category: 'Beer',
        picture:
            'https://cdn2.justwineapp.com/assets/article/2017/01/Bier-Cocktail-Pale-Ale-darkrye-com.jpg',
    },
    {
        category: 'Soft Drink',
        picture:
            'https://dosaandcurry.ca/wp-content/uploads/2021/11/Soft-Drinks.jpg',
    },
];

const useLogic = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Obtener la funci??n navigate

    const getCategories = useCallback(async () => {
        setLoading(true);
        const data = await callCategories();
        setCategories(data);
        setLoading(false);
    }, []);

    const syncCategories = useCallback(async () => {
        setLoading(true);
        await fetchCategories();
        await getCategories();
    }, [getCategories]);

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    const goToDetails = useCallback(
        (category: string) => {
            const trimCategory = category.replace('/', '2F');
            navigate(`/categories/${trimCategory}`); // Navegar a la ruta deseada
        },
        [navigate]
    );


    return {
        categories,
        setCategories,
        fetchCategories,
        Images,
        callCategories,
        syncCategories,
        loading,
        goToDetails,
    };
};

export default useLogic;

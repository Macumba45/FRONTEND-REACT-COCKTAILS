import { useState } from 'react';

export const App = () => {};

export const ButtonCategoriesLogic = () => {
    const [categories, setCategories] = useState<string[]>([]);

    async function fetchCategories(): Promise<string[]> {
        const response = await fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
        );
        const data = await response.json();
        return data.drinks.map(
            (category: { strCategory: string }) => category.strCategory
        );
    }

    const Images = [
        {
            category: 'Ordinary Drink',
            slug: 'ordinary_drink',
            picture:
                'https://www.tastingtable.com/img/gallery/11-cocktails-to-try-if-you-like-drinking-gin/intro-1659025591.jpg',
        },
        {
            category: 'Cocktail',
            slug: 'cocktail',
            picture:
                'https://thumbs.dreamstime.com/b/set-various-cocktails-black-background-set-various-cocktails-shaker-black-background-188649840.jpg',
        },
        {
            category: 'Shake',
            slug: 'shake',
            picture:
                'https://hips.hearstapps.com/del.h-cdn.co/assets/15/24/1434133241-milkshakes.jpg',
        },
        {
            category: 'Other / Unknown',
            slug: 'other_unknown',
            picture:
                'https://japanese-clothing.com/wp-content/uploads/2022/06/Sans_titre_-_2020-05-17T154130.995_1.jpg?v=1589722950',
        },
        {
            category: 'Cocoa',
            slug: 'cocoa',
            picture:
                'https://recipe4appetite.com/img/recipe-img/homemade-cocoa-drink.jpg',
        },
        {
            category: 'Shot',
            slug: 'shot',
            picture:
                'https://149694725.v2.pressablecdn.com/wp-content/uploads/2018/03/Popular-Shot-Recipes.jpg',
        },
        {
            category: 'Coffee / Tea',
            slug: 'coffee_tea',
            picture:
                'https://www.getflavor.com/wp-content/uploads/2021/09/Latte-and-Tea-Mojito-1152.jpg',
        },
        {
            category: 'Homemade Liqueur',
            slug: 'homemade_liqueur',
            picture:
                'https://images.immediate.co.uk/production/volatile/sites/30/2022/08/200615BBCGOODFOODCOVERVEGXMASCOVER202004592-copy-95936cf.jpg',
        },
        {
            category: 'Punch / Party Drink',
            slug: 'punch_party_drink',
            picture:
                'https://petersfoodadventures.com/wp-content/uploads/2018/12/christmas-punch-1.png',
        },
        {
            category: 'Beer',
            slug: 'beer',
            picture:
                'https://cdn2.justwineapp.com/assets/article/2017/01/Bier-Cocktail-Pale-Ale-darkrye-com.jpg',
        },
        {
            category: 'Soft Drink',
            slug: 'soft_drink',
            picture:
                'https://dosaandcurry.ca/wp-content/uploads/2021/11/Soft-Drinks.jpg',
        },
    ];

    return {
        categories,
        setCategories,
        fetchCategories,
        Images,
    };
};

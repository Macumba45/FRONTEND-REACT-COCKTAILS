import { useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

export const useRandomCardLogic = () => {
    const [expanded, setExpanded] = useState(false);

    const randomFetchCard = useCallback(async () => {
        try {
            const response = await fetch(
                'https://www.thecocktaildb.com/api/json/v1/1/random.php'
            );
            const data = await response.json();
            const randomData = data.drinks;
            return randomData;
        } catch (error) {
            console.log(error);
        }
    }, []);

    const printRandomCard = useCallback(async () => {
        const randomCard = await randomFetchCard();
        const randomObjetcard = randomCard.map((random: any) => ({
            title: random.strDrink,
            category: random.strCategory,
            img: random.strDrinkThumb,
            description: random.strInstructions,
            instrucctions: {
                de: random.strInstructionsDE,
                it: random.strInstructionsIT,
            },

            ingredients: {
                one: random.strIngredient1,
                two: random.strIngredient2,
                three: random.strIngredient3,
                four: random.strIngredient4,
            },
        }));

        return randomObjetcard;
    }, [randomFetchCard]);

    const handleExpandClick = useCallback(() => {
        setExpanded((prevExpanded) => !prevExpanded);
    }, []);

    const StyledCard = styled(Card)(({ theme }) => ({
        width: 300,
        [theme.breakpoints.up('md')]: {
            width: 600,
        },
    }));

    return {
        expanded,
        handleExpandClick,
        StyledCard,
        printRandomCard,
    };
};

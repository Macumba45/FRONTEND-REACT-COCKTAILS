import { useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { randomFetchCard } from '../../services/api/random';


export const useRandomCardLogic = () => {
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadingBar, setLoadingBar] = useState(true);
    const [loadingRandom, setLoadingRandom] = useState(false);
    const [randomCardData, setRandomCardData] = useState({
        title: '',
        category: '',
        image: '',
        description: '',
        instrucctions: {
            de: '',
            it: '',
        },
        ingredients: {
            one: '',
            two: '',
            three: '',
            four: '',
        },
    });


    const handlePrintRandomCard = async () => {
        try {
            const randomCard = await randomFetchCard();
            const itemZero = randomCard[0];
            setRandomCardData(itemZero);
            setLoading(false);
            setLoadingBar(false);
        } catch (error) {
            console.log(error);
        }
    };


    const printRandomCard = useCallback(async () => {
        setLoadingRandom(false);
        const randomCard = await randomFetchCard();
        setLoadingRandom(true);

        return randomCard;
    }, []);

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
        randomCardData,
        setRandomCardData,
        randomFetchCard,
        loadingRandom,
        loading,
        handlePrintRandomCard
    };
};

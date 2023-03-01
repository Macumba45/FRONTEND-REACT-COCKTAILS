import { useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { RandomCard } from './type';
import { getAuthenticatedToken } from '../../services/storage';

export const useRandomCardLogic = () => {
    const [expanded, setExpanded] = useState(false);
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

    const randomFetchCard = useCallback(async () => {
        try {
            const token = getAuthenticatedToken(); // Obtener el token de localStorage
            const response = await fetch(
                'http://localhost:8000/cocktails/random',
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
                    },
                }
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }, []);

    const printRandomCard = useCallback(async () => {
        const randomCard = await randomFetchCard();

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
    };
};

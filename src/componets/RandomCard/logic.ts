import { useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

export const useRandomCardLogic = () => {
    const [expanded, setExpanded] = useState(false);

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
    };
};

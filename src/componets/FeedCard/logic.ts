import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

export const useFeedCardLogic = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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

import { useCallback, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

export const useFeedCardLogic = () => {
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleExpandClick = useCallback(() => {
        setExpanded((prevExpanded) => !prevExpanded);
    }, []);

    const StyledCard = styled(Card)(({ theme }) => ({
        width: 300,
        [theme.breakpoints.up('sm')]: {
            width: 600,
        },
    }));

    const handleDeleteClick = useCallback(() => {
        console.log('handleDeleteClick');
    }, []);

    return {
        expanded,
        handleExpandClick,
        StyledCard,
        handleDeleteClick,
        loading,
    };
};

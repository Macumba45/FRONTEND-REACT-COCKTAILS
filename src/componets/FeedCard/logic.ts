import { useCallback, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

export const useFeedCardLogic = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = useCallback(() => {
        setExpanded((prevExpanded) => !prevExpanded);
    }, []);

    const StyledCard = styled(Card)(({ theme }) => ({
        width: 300,
        [theme.breakpoints.up('sm')]: {
            width: 600,
        },
    }));

    return {
        expanded,
        handleExpandClick,
        StyledCard,
    };
};

import { useCallback, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { getAllFeeds } from '../../services/api/feed';

export const useFeedCardLogic = () => {
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);


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


    const getAllPosts = useCallback(async () => {
        setLoading(true);
        const posts = await getAllFeeds()
        setTimeout(() => {

            setPosts(posts)
            setLoading(false);

        }, 2000);


    }, [])


    return {
        expanded,
        handleExpandClick,
        StyledCard,
        handleDeleteClick,
        getAllPosts,
        loading,
        posts
    };
};

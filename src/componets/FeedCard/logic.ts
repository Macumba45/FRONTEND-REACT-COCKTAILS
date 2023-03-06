import { useCallback, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { getAllFeeds } from '../../services/api/feed';

export const useLogic = () => {
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(true);
    const [updateClicked, setUpdateClicked] = useState(false);
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
        const posts = await getAllFeeds();
        setTimeout(() => {
            // Ordenar los posts por fecha de creación, de más reciente a más antiguo
            const sortedPosts = posts.sort((a: any, b: any) => {
                return (
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                );
            });

            setPosts(sortedPosts);
            setLoading(false);
            setUpdateClicked(true);
        }, 2000);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setUpdateClicked(false); // Reiniciar la variable de estado después de 5 segundos
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleButtonUpdatePost = () => {
        setLoading(true);
        setUpdateClicked(true); // Cambiar updateClicked a true después de esperar otros 3 segundos
        setLoading(false);
        getAllPosts();
    };

    return {
        expanded,
        handleExpandClick,
        StyledCard,
        handleDeleteClick,
        getAllPosts,
        loading,
        posts,
        handleButtonUpdatePost,
        updateClicked,
    };
};

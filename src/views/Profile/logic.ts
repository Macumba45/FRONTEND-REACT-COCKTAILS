import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthenticatedToken } from '../../services/storage';
import { UserPost } from './type';

export const ProfileLogic = () => {
    const [userData, setUserData] = useState<{
        id: string;
        email: string;
        name: string;
    } | null>(null);

    const [userPost, setUserPost] = useState<UserPost[]>([]);
    const [expanded, setExpanded] = useState(false);
    const [showUserPosts, setShowUserPosts] = useState(false);

    const navigate = useNavigate();

    const userInfo = useCallback(async () => {
        const token = getAuthenticatedToken(); // Obtener el token de localStorage
        const response = await fetch('http://localhost:8000/users/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
            },
        });
        const data = await response.json();
        setUserData(data);
    }, []);

    const handleId = useCallback(async () => {
        const token = getAuthenticatedToken();
        async function fetchData() {
            const response = await fetch(
                `http://localhost:8000/users/id/${token}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await response.json();
            return data.id;
        }
        return await fetchData();
    }, []);



    const userPostProfile = useCallback(async () => {
        const id = await handleId();
        const token = getAuthenticatedToken();
        const response = await fetch(
            `http://localhost:8000/feeds/posts/${id}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        const data = await response.json();
        setUserPost(data);
    }, [handleId]);

    const handleExpandClick = useCallback((id: string) => {
        setExpanded((prevExpanded) => !prevExpanded);
    }, []);

    const onDelete = async (cocktailId: string) => {
        try {
            const token = getAuthenticatedToken();
            await fetch(`http://localhost:8000/cocktails/${cocktailId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    // Agrega cualquier token de autenticación necesario aquí
                },
            });
            // Actualiza la lista de publicaciones del usuario después de la eliminación
            await userPostProfile();
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const goToUpdate = async (cocktailId: string) => {
        navigate(`/posts/${cocktailId}`);
    };

    const handleShowUserPosts = () => {
        setShowUserPosts(!showUserPosts);
        if (!showUserPosts) {
            userPostProfile();
        }
    };

    return {
        userData,
        userPost,
        userInfo,
        userPostProfile,
        handleExpandClick,
        expanded,
        onDelete,
        goToUpdate,
        handleShowUserPosts,
        showUserPosts,
    };
};

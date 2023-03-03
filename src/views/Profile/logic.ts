import { useCallback, useState } from 'react';
import { getAuthenticatedToken } from '../../services/storage';
import { UserPost } from './type';

export const ProfileLogic = () => {
    const [userData, setUserData] = useState<{
        id: string;
        email: string;
        name: string;
    } | null>(null);

    const [userPost, setUserPost] = useState<UserPost[]>([])
    const [expanded, setExpanded] = useState(false);


    const userInfo = useCallback(async () => {
        const token = getAuthenticatedToken(); // Obtener el token de localStorage
        const response = await fetch('http://localhost:8000/user/profile', {
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
            const response = await fetch(`http://localhost:8000/user/id/${token}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Agregar el token al header 'Authorization'
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            return data.id;
        }
        return await fetchData();
    }, []);

    handleId()

    const userPostProfile = useCallback(async () => {
        const id = await handleId();
        const token = getAuthenticatedToken();
        const response = await fetch(`http://localhost:8000/feed/posts/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setUserPost(data);
    }, [handleId]);

    const handleExpandClick = useCallback(() => {
        setExpanded((prevExpanded) => !prevExpanded);
    }, []);

    const onDelete = async (cocktailId: string) => {

        try {
            const token = getAuthenticatedToken();
            await fetch(`http://localhost:8000/cocktails/delete/${cocktailId}`, {
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

    return {
        userData,
        userPost,
        setUserData,
        userInfo,
        userPostProfile,
        handleExpandClick,
        expanded,
        onDelete

    };
};

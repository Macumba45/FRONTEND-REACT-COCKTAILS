import { useCallback, useState } from 'react';
import { getAuthenticatedToken } from '../../services/storage';
import { UserPost } from './type';

export const ProfileLogic = () => {
    const [userData, setUserData] = useState<{
        id: string;
        email: string;
        name: string;
    } | null>(null);

    const [userPost, setUserPost] = useState<UserPost[]>([]);
    const [showPost, setShowPost] = useState(false);

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
            const response = await fetch(
                `http://localhost:8000/user/id/${token}`,
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

    handleId();

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

    return {
        userData,
        userPost,
        setUserData,
        userInfo,
        userPostProfile,
    };
};

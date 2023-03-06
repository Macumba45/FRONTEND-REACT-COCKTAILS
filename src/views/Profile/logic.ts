import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchandleId, fetchOnDelete, fetchUserInfo, fetchuserPostProfile } from '../../services/api/profile';
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
        getAuthenticatedToken(); // Obtener el token de localStorage
        const response = await fetchUserInfo()
        const data = await response.json();
        setUserData(data);
    }, []);

    const handleId = useCallback(async () => {
        getAuthenticatedToken();
        async function fetchData() {
            const response = await fetchandleId()
            const data = response
            return data
        }
        return await fetchData();
    }, []);


    const userPostProfile = useCallback(async () => {
        await handleId();
        getAuthenticatedToken();
        const response = await fetchuserPostProfile()
        const data = await response.json();
        setUserPost(data);
    }, [handleId]);

    const handleExpandClick = useCallback((id: string) => {
        setExpanded((prevExpanded) => !prevExpanded);
    }, []);

    const onDelete = async (cocktailId: string) => {
        try {
            fetchOnDelete(cocktailId)
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

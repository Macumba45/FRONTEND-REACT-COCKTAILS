import { memo, useCallback, useEffect, useState } from 'react';
import { getAuthenticatedToken } from '../../services/storage';

export const ProfileLogic = () => {
    const [userData, setUserData] = useState<{
        id: string;
        email: string;
        name: string;
    } | null>(null);

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
        console.log(data);
        setUserData(data);
    }, []);

    return {
        userData,
        setUserData,
        userInfo,
    };
};


import { memo, useCallback, useEffect, useState } from 'react';
import { getAuthenticatedToken } from '../../services/storage';



export const porfileLogic = () => {

    const [userData, setUserData] = useState<{ id: string, email: string, name: string } | null>(null);
    console.log(userData);

    const userInfo = useCallback(async () => {

        const token = getAuthenticatedToken(); // Obtener el token de localStorage
        const response = await fetch('http://localhost:8000/users/profile', {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
            },
        })

        console.log(response);

        const data = await response.json();
        setUserData(data)

    }, []);

    useEffect(() => {
        const fetchData = async () => {
            await userInfo();

        };
        fetchData();
    }, [userInfo]);



    return {


    }
}



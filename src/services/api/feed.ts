import { getAuthenticatedToken } from '../storage';

const BASE_URL = 'http://localhost:8000/feeds';

export const getFeedById = async (id: string) => {
    try {
        const token = getAuthenticatedToken();
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                // Agrega cualquier token de autenticación necesario aquí
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateFeed = async (id: string, values: any) => {
    try {
        const token = getAuthenticatedToken();
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                // Agrega cualquier token de autenticación necesario aquí
            },
            body: JSON.stringify(values),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

import { getAuthenticatedToken } from '../storage';

const BASE_URL = 'http://localhost:8000/cocktails/';



export const CallSubCategories = async (categoryId?: string,) => {

    try {
        const token = getAuthenticatedToken(); // Obtener el token de localStorage
        const url = `${BASE_URL}/${categoryId}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

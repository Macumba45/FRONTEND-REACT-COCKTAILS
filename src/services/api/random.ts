import { getAuthenticatedToken } from "../storage";

const BASE_URL = 'http://localhost:8000/cocktails'


export const randomFetchCard = async () => {
    try {
        const token = getAuthenticatedToken(); // Obtener el token de localStorage
        const response = await fetch(`${BASE_URL}/random`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
            },
        }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

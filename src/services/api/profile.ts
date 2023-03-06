import { getAuthenticatedToken } from "../storage";


export const fetchUserInfo = async (): Promise<Response> => {
    const token = getAuthenticatedToken(); // Obtener el token de localStorage
    const response: Response = await fetch('http://localhost:8000/users/profile', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
            'Content-Type': 'application/json',
        },
    });
    return response;
}

export const fetchandleId = async (): Promise<Response> => {
    const token = getAuthenticatedToken();
    async function fetchData() {
        const response: Response = await fetch(
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
}



export const fetchuserPostProfile = async (): Promise<Response> => {
    const id = await fetchandleId();
    const token = getAuthenticatedToken();
    const response: Response = await fetch(
        `http://localhost:8000/feeds/posts/${id}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
    );
    return response

}


export const fetchOnDelete = async (cocktailId: string) => {
    try {
        const token = getAuthenticatedToken();
        await fetch(`http://localhost:8000/feeds/${cocktailId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                // Agrega cualquier token de autenticación necesario aquí
            },
        });
    } catch (error) {
        console.error('Error deleting post:', error);
    }
};
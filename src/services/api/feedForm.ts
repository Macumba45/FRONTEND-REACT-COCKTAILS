import { Post } from '../../componets/FeedForm/type';
import { getAuthenticatedToken } from '../storage';

const BASE_URL = 'http://localhost:8000/categories/';


export const fetchHandleId = async () => {
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
}

export const fetchHandleSubmit = async (values: Post) => {

    try {
        const id = await fetchHandleId();
        const token = getAuthenticatedToken();
        const response = await fetch('http://localhost:8000/feeds/', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: values.title,
                postCategory: values.category,
                image: values.image,
                comment: values.comment,
                user_FK: id

            }),
        });
        return response;

    } catch (error) {
        console.log(error);

    }



};

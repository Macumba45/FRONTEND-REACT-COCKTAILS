import { getAuthenticatedToken } from "../storage";

const BASE_URL = 'http://localhost:8000/categories'

export async function callCategories(): Promise<string[]> {
    const token = getAuthenticatedToken(); // Obtener el token de localStorage
    const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data.map((category: { category: string }) => category.category);
}

export async function callCategoriesType(): Promise<{id: string, category: string}[]> {
    const token = getAuthenticatedToken(); // Obtener el token de localStorage
    const response = await fetch(`${BASE_URL}/type`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}

export async function callCategoriesId(): Promise<string[]> {
    const token = getAuthenticatedToken(); // Obtener el token de localStorage
    const response = await fetch(`${BASE_URL}/id`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}

export async function fetchCategories(): Promise<void> {
    const token = getAuthenticatedToken(); // Obtener el token de localStorage
    await fetch(`${BASE_URL}/sync`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
            'Content-Type': 'application/json',
        },
    });


}
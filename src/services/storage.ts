export const getAuthenticatedToken = () => {
    try {
        const token = window.localStorage.getItem('token');
        return token ? JSON.parse(token) : null;
    } catch (error) {
        console.log(error);
    }
};

export const setAuthenticatedToken = (token: string) => {
    window.localStorage.setItem('token', JSON.stringify(token));
};

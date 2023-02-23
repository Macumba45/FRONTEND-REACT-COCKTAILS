import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const useNavBarLogic = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isNavBarLogin =
        location.pathname === '/login' ||
        location.pathname === '/signup' ||
        location.pathname === '/';

    const isLogoutFeed = location.pathname === '/feed';

    const handleLogout = () => {
        // aquí iría la lógica para cerrar sesión del usuario
        navigate('/');
    };

    const handleBackPage = () => {
        window.history.back();
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return {
        isNavBarLogin,
        isLogoutFeed,
        handleLogout,
        handleBackPage,
        anchorEl,
        handleMenuOpen,
        handleMenuClose,
    };
};
import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';

export const useNavBarLogic = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isNavBarLogin =
        location.pathname === '/login' ||
        location.pathname === '/signup' ||
        location.pathname === '/';

    const isLogoutFeed = location.pathname === '/feed';

    const handleLogout = useCallback(() => {
        // aquí iría la lógica para cerrar sesión del usuario
        window.localStorage.clear();
        navigate('/');
    }, [navigate]);

    const handleBackPage = useCallback(() => {
        if (location.pathname.startsWith('/categories/')) {
            navigate('/categories');
        } else {
            navigate('/feed');
        }
    }, []);

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleMenuOpen = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        },
        []
    );

    const handleMenuClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

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

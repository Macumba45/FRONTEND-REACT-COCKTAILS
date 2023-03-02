import { useLocation, useNavigate } from 'react-router-dom';
import { getAuthenticatedToken } from '../services/storage';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const token = getAuthenticatedToken();
    const location = useLocation();
    const navigate = useNavigate();

    if (!token || token === null) {
        return navigate('/', { replace: true, state: { from: location } });
    }

    return children;
};

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
    const token = getAuthenticatedToken();
    const location = useLocation();
    const navigate = useNavigate();

    if (token) {
        if (
            location.pathname === '/login' ||
            location.pathname === '/signup' ||
            location.pathname === '/'
        ) {
            return navigate('/feed', {
                replace: true,
                state: { from: location },
            });
        }
        return children;
    }

    return children;
};

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FC, memo, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../views/auth/Login';
import Random from '../views/Random';
import SignUp from '../views/auth/SignUp';
import Categories from '../views/Categories';
import Feed from '../views/Feed';
import Profile from '../views/Profile';
import FeedFormPost from '../views/FeedFormPost';
import SubCategories from '../views/Categories/SubCategories';
import { getAuthenticatedToken } from '../services/storage';

const Router: FC = () => {
    const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
        const token = getAuthenticatedToken();
        const location = useLocation();

        if (!token || token === null) {
            return <Navigate to="/login" replace state={{ from: location }} />;
        }

        return children;
    };

    const PublicRoute = ({ children }: { children: JSX.Element }) => {
        const token = getAuthenticatedToken();
        const location = useLocation();

        if (token) {
            if (
                location.pathname === '/login' ||
                location.pathname === '/signup' ||
                location.pathname === '/'
            ) {
                return (
                    <Navigate to="/feed" replace state={{ from: location }} />
                );
            }
            return children;
        }

        return children;
    };

    const NotFound = () => {
        const navigate = useNavigate();
        const token = getAuthenticatedToken();

        useEffect(() => {
            if (token) {
                navigate('/feed', { replace: true });
            } else {
                navigate('/login', { replace: true });
            }
        }, [navigate, token]);

        return (
            <div>
                <h1>404 Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            </div>
        );
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <PublicRoute>
                            <SignUp />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/feed"
                    element={
                        <ProtectedRoutes>
                            <Feed />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/random"
                    element={
                        <ProtectedRoutes>
                            <Random />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/categories"
                    element={
                        <ProtectedRoutes>
                            <Categories />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoutes>
                            <Profile />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/new-feed"
                    element={
                        <ProtectedRoutes>
                            <FeedFormPost />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/categories/:category"
                    element={
                        <ProtectedRoutes>
                            <SubCategories />
                        </ProtectedRoutes>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default memo(Router);

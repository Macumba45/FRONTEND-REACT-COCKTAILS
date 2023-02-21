import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuthenticatedToken } from './storage';

// const PublicRoute = ({ children }: { children: JSX.Element }) => {
//     const token = getAuthenticatedToken();
//     const location = useLocation();

//     if (token) {
//         if (location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/") {
//             return <Navigate to="/welcome" replace state = {{ from: location }
//         } />;
//     }
//     return children;
// }

// return children;
// };

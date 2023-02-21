import { Navigate, useLocation } from 'react-router-dom';
import { getAuthenticatedToken } from './storage';

// const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {

//     const token = getAuthenticatedToken();
//     const location = useLocation();

//     if (!token || token === null) {
//         return <Navigate to="/" replace state = {{ from: location }
//     } />;
// }

// return children;
// };

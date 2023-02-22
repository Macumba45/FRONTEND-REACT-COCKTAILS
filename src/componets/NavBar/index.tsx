import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Props } from './type';
import {
    Nav,
    IconContainerLogin,
    IconContainerSignUp,
    NavbarLinkNotLogged,
    NavbarLinkLogged,
    NavContainerLogged,
    LogoutButton,
    NavContainerNotLogged,
    IconContainerProfile,
    IconContainerLogOut,
    CompanyName,
    NavLogged,
} from './styles';

const NavBar: FC<Props> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isNotLoged =
        location.pathname === '/login' ||
        location.pathname === '/signup' ||
        location.pathname === '/';

    const handleLogout = () => {
        // aquí iría la lógica para cerrar sesión del usuario
        navigate('/');
    };

    return (
        <>
            {isNotLoged ? (
                <Nav>
                    <NavContainerNotLogged>
                        <IconContainerLogin />
                        <NavbarLinkNotLogged to="/login">
                            Login
                        </NavbarLinkNotLogged>
                        <IconContainerSignUp />
                        <NavbarLinkNotLogged to="/signup">
                            Register
                        </NavbarLinkNotLogged>
                    </NavContainerNotLogged>
                </Nav>
            ) : (
                <NavLogged>
                    <>
                        <NavContainerLogged>
                            <LogoutButton onClick={handleLogout}>
                                <IconContainerLogOut />
                            </LogoutButton>
                            <CompanyName>Cokctails API</CompanyName>
                            <NavbarLinkLogged to="/profile">
                                <IconContainerProfile />
                            </NavbarLinkLogged>
                        </NavContainerLogged>
                    </>
                </NavLogged>
            )}
        </>
    );
};

export default NavBar;

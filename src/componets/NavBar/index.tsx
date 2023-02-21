import { FC } from 'react';
import { Props } from './type';
import {
    Nav,
    NavbarLink,
    IconContainerLogin,
    IconContainerSignUp,
} from './styles';
import { Outlet } from 'react-router-dom';

const NavBar: FC<Props> = () => {
    return (
        <>
            <Nav>
                <IconContainerLogin></IconContainerLogin>
                <NavbarLink to="/login">Login</NavbarLink>
                <IconContainerSignUp></IconContainerSignUp>
                <NavbarLink to="/signUp">Register</NavbarLink>
            </Nav>
            <Outlet />
        </>
    );
};

export default NavBar;

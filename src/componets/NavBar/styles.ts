import styled from 'styled-components';
import { Link } from 'react-router-dom';
import iconLogin from './assets/icons8-login-rounded-90.png';
import iconSignUp from './assets/icons8-male-user-96.png';

export const Nav = styled.nav`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    height: ${({ theme }) => theme.height.mediumSmall};
    justify-content: flex-end;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
`;

export const NavbarLink = styled(Link)`
    color: ${({ theme }) => theme.colors.light};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.smallest};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    margin-right: ${({ theme }) => theme.spacing.smallest};
    text-decoration: none;

    &:hover {
        font-weight: ${({ theme }) => theme.fontWeights.mediumSemiBold};
    }
`;

export const IconContainerLogin = styled.div`
    width: 17px;
    height: 17px;
    background-size: cover;
    margin-right: 5px;
    background-repeat: no-repeat;

    background-image: url(${iconLogin});
`;

export const IconContainerSignUp = styled.div`
    width: 17px;
    height: 17px;
    background-size: cover;
    margin-right: 5px;
    background-repeat: no-repeat;

    background-image: url(${iconSignUp});
`;

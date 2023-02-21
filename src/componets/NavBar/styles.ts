import styled from 'styled-components';
import { Link } from 'react-router-dom';
import iconLogin from './assets/icons8-login-rounded-90.png';
import iconSignUp from './assets/icons8-male-user-96.png';

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.colors.secondary};
    height: ${({ theme }) => theme.height.medium};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
   
`;

export const NavLogged = styled.nav`
    background-color: ${({ theme }) => theme.colors.secondary};
    height: ${({ theme }) => theme.height.medium};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
 
`;

export const NavContainerNotLogged = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const NavbarLinkNotLogged = styled(Link)`
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

export const NavContainerLogged = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${({ theme }) => theme.height.medium};


`;

export const NavbarLinkLogged = styled(Link)`
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

export const CompanyName = styled.h1`

color: ${({ theme }) => theme.colors.light};
font-family: ${({ theme }) => theme.fonts.primary};
font-weight: ${({ theme }) => theme.fontWeights.bold};
font-size: 1.3rem;


`

export const IconContainerProfile = styled.div`
    width: 1.5rem;
    height: 1.5rem;   
    margin-right: 1.5rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${iconSignUp});
    &:hover {
        width: 1.7rem;
        height: 1.7rem;
    }
`;

export const IconContainerLogOut = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1.5rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${iconLogin});
    &:hover {
        width: 1.7rem;
        height: 1.7rem;
    }
`;

export const LogoutButton = styled.button`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.smallest};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    background-color: black;
    border: none;
    color: ${({ theme }) => theme.colors.light};
    cursor: pointer;
`;



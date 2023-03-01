import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import iconLogin from './assets/icons8-login-rounded-90.png';
import iconSignUp from './assets/icons8-male-user-96.png';
import Logo from './assets/logo.png';

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.colors.secondary};
    height: ${({ theme }) => theme.height.medium};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const NavLogged = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary};
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
    color: white;
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
    color: white;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.smallest};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    margin-right: ${({ theme }) => theme.spacing.smallest};
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
        font-weight: ${({ theme }) => theme.fontWeights.mediumSemiBold};
    }
`;

export const CompanyLogo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: white;
    width: 80px;
    height: 30px;
    border-radius: 10px;
`;

export const IconContainerProfile = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0rem;
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
    /* margin-left: 0.5rem; */
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
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    color: ${({ theme }) => theme.colors.light};
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
        font-size: 1rem;
    }

    ${() => {
        const location = useLocation();
        const isActive = location.pathname === '/feed';
        return (
            isActive &&
            `
      font-weight: 600;
      
    `
        );
    }}
`;

export const ConditionalContainer = styled.div``;

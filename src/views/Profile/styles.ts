import styled from 'styled-components';

export const BackGroundProfile = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.dark};
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const ContainerProfile = styled.div`
    min-width: 300px;
    height: 400px;
    background-color: ${({ theme }) => theme.colors.dark};
    border-radius: 20px;
    margin-top: 6rem;
`;

export const AvatarContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
`;

export const DescriptionContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

export const ProfileDetailsName = styled.h3`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: white;
    margin-bottom: 1.5rem;
`;

export const ProfileDetailsEmail = styled.h3`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: white;
    margin-top: 2rem;
`;

export const ButtonsContainer = styled.div`
    margin-top: 8.1rem;
    display: flex;
    justify-content: center;
`;

export const HrElement = styled.hr`
    min-width: 5rem;
    rotate: 180deg;
    border: 0.5px solid ${({ theme }) => theme.colors.primary};
`;

export const MainContainerPost = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-right: 2rem;
    margin-left: 2rem;
    font-family: ${({ theme }) => theme.fonts.primary};
`;

export const PostDetails = styled.div`
    width: 10rem;
    height: 20rem;
    margin-top: 2rem;
    margin: 0 2rem;
    background-color: ${({ theme }) => theme.colors.dark};
    text-align: center;
    color: white;
    border-radius: 20px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const PostTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin-top: 1rem;
`;

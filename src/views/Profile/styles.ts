import styled from 'styled-components';

export const BackGroundProfile = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.dark};
    position: fixed;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const ContainerProfile = styled.div`
    min-width: 300px;
    height: 400px;
    background-color: white;
    border-radius: 20px;
    margin-top: 10rem;
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
    font-weight: ${({ theme }) => theme.fontWeights.light};
    margin-bottom: 2rem;
`;

export const ProfileDetailsEmail = styled.h3`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    margin-top: 2rem;
`;

export const ButtonsContainer = styled.div`
    margin-top: 7.8rem;
    display: flex;
    justify-content: center;
`;

export const HrElement = styled.hr`
    min-width: 5rem;
    rotate: 180deg;
    border: 0.5px solid ${({ theme }) => theme.colors.primary};
`;

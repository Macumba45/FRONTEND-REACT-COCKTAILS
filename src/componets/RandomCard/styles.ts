import styled from 'styled-components';

export const BackGroundRandomRandomCard = styled.div`
    width: 100vw;
    height: 150vh;
    padding-top: 30px;
    background-color: ${({ theme }) => theme.colors.light};
    margin-bottom: 0rem;
    /* margin-top: -5rem; */
`;
export const BackGroundRandom = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 30px;
    background-color: ${({ theme }) => theme.colors.light};
    margin-bottom: 0rem;
    /* margin-top: -5rem; */
`;

export const MainContainerLoading = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 0rem;
`;

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 10rem;
`;

export const MainContainerBar = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 0rem;
    margin-top: 4rem;
`;

export const H1Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

export const H1Random = styled.h1`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: white;
`;

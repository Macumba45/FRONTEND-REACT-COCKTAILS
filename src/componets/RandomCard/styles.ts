import styled from 'styled-components';

export const MainContainerLoading = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0rem;
`;

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5.5rem;
    margin-bottom: 0rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
    margin-top: 0rem;
`;

export const H1Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top:5.5rem;
    
`;

export const H1Random = styled.h1`
font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

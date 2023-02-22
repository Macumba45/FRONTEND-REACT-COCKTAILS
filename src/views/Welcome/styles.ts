import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 7rem;
`;

export const ContainerText = styled.div``;

export const WelcomeText = styled.h1`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-align: center;
`;

export const WelcomeDescription = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin: 2rem 1rem 0 1rem;
    text-align: center;
`;

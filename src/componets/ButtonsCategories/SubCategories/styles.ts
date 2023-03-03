import styled from 'styled-components';
import claymore from './assets/9e582977-9171-4dda-9d9b-68b24755ccf2.png';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 3rem 6rem 3rem;
`;

export const MainContainerLoader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

export const MainContainerClaymore = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
`;

export const Claymore = styled.img`
    height: 10rem;
    width: 10rem;
`;

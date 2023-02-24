import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

export const BlackBackGround = styled.div`
    @media screen and (min-width: 600px) {
        /* reglas para aplicar en pantallas con ancho mínimo de 600px */
        div {
            background-color: black;
            width: 100vw;
            height: 100vh;
        }
    }
`;

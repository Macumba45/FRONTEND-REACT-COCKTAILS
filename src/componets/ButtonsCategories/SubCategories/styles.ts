import styled from 'styled-components';

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



export const BackGroundSubCategories = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 30px;
    background-color: ${({ theme }) => theme.colors.light};
    display: flex;
    flex-direction: column;
    /* margin-top: -5rem; */
`;


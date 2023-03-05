import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 4rem;
    margin-top: 5rem;
`;

export const MainContainerLoading = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0rem;
`;

export const MainContainerBar = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    margin-bottom: 0rem;
`;


export const BackGroundFeed = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 30px;
    background-color: ${({ theme }) => theme.colors.light};
    display: flex;
    flex-direction: column;
    /* margin-top: -5rem; */
`;

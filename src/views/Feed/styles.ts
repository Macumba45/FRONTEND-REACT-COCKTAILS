import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* margin-top: 7rem; */
`;

export const BackGroundFeed = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.light};
    /* margin-top: -5rem; */
`;

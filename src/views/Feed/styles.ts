import styled from 'styled-components';

export const BackGroundFeed = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 30px;
    background-color: ${({ theme }) => theme.colors.light};
    display: flex;
    flex-direction: column;
    /* margin-top: -5rem; */
`;

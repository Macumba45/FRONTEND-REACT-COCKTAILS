import styled from 'styled-components';

export const BackGroundFeed = styled.div`
    width: 100vw;
    height: auto;
    padding-top: 30px;
    background-color: ${({ theme }) => theme.colors.light};
    display: flex;
    flex-direction: column;
    /* margin-top: -5rem; */
`;

export const BackGroundFeedLoaded = styled.div`
    width: 100vw;
    height: 100%;
    padding-top: 30px;
    background-color: ${({ theme }) => theme.colors.light};
    display: flex;
    flex-direction: column;
    /* margin-top: -5rem; */
`;


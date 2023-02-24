import { FC, memo } from 'react';
import NavBar from '../../componets/NavBar';
import BottomAppBar from '../../componets/NavBarBottom';
import RandomCard from '../../componets/RandomCard';
import ButtonRandom from '../../componets/ButtonRandom';
import { MainContainer } from './styles';
import FeedCard from '../../componets/FeedCard';

const Feed: FC = () => {
    return (
        <>
            <NavBar />

            <MainContainer>
                <FeedCard />
                <FeedCard />
                <FeedCard />
            </MainContainer>
            <BottomAppBar />
        </>
    );
};

export default memo(Feed);

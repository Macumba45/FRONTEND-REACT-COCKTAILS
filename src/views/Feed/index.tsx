import { FC, memo } from 'react';
import NavBar from '../../componets/NavBar';
import BottomAppBar from '../../componets/NavBarBottom';
import { BackGroundFeed, MainContainer } from './styles';
import FeedCard from '../../componets/FeedCard';

const Feed: FC = () => {
    return (
        <>
            <BackGroundFeed>
                <NavBar />
                <MainContainer>
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                </MainContainer>
                <BottomAppBar />
            </BackGroundFeed>
        </>
    );
};

export default memo(Feed);

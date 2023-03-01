import { FC, memo } from 'react';
import NavBar from '../../componets/NavBar';
import BottomAppBar from '../../componets/NavBarBottom';
import { BackGroundFeed } from './styles';
import FeedCard from '../../componets/FeedCard';

const Feed: FC = () => {
    return (
        <BackGroundFeed>
            <NavBar />
            <FeedCard />
            <BottomAppBar />
        </BackGroundFeed>
    );
};

export default memo(Feed);

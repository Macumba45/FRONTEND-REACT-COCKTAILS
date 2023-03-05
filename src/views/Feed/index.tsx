import { FC, memo, useState } from 'react';
import NavBar from '../../componets/NavBar';
import BottomAppBar from '../../componets/NavBarBottom';
import { BackGroundFeed } from './styles';
import FeedCard from '../../componets/FeedCard';
import { useFeedCardLogic } from '../../componets/FeedCard/logic';

const Feed: FC = () => {


    return (
        <>
            <NavBar />
            <BackGroundFeed>
                <FeedCard />
            </BackGroundFeed>
            <BottomAppBar />
        </>

    )
};

export default memo(Feed);

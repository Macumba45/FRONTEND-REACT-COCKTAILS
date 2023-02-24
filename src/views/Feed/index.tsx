import { FC, memo } from 'react';
import NavBar from '../../componets/NavBar';
import BottomAppBar from '../../componets/NavBarBottom';
import RandomCard from '../../componets/RandomCard';
import ButtonRandom from '../../componets/Button';
import { MainContainer, WelcomeDescription, WelcomeText } from './styles';
import FeedCard from '../../componets/FeedCard';
import { BlackBackGround } from '../../componets/FeedCard/styles';

const Feed: FC = () => {
    return (
        <>
            <NavBar />

            <MainContainer>
                <FeedCard />
                <BlackBackGround>
                    {/* <WelcomeText>Welcome to {<br />} COCKTAILS</WelcomeText>
                <WelcomeDescription>
                    In this web you can do the following things
                </WelcomeDescription> */}
                </BlackBackGround>
            </MainContainer>

            <BottomAppBar />
        </>
    );
};

export default memo(Feed);

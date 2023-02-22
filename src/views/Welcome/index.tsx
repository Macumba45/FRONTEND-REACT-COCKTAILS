import { FC, memo } from 'react';
import NavBar from '../../componets/NavBar';
import BottomAppBar from '../../componets/NavBarBottom';
import { MainContainer, WelcomeDescription, WelcomeText } from './styles';

const Welcome: FC = () => {
    return (
        <>
            <NavBar />
            <MainContainer>
                <WelcomeText>Welcome to {<br />} COCKTAILS</WelcomeText>
                <WelcomeDescription>
                    In this web you can do the following things
                </WelcomeDescription>
            </MainContainer>
            <BottomAppBar />
        </>
    );
};

export default memo(Welcome);

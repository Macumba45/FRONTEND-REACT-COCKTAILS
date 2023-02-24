import { FC, memo } from 'react';
import CardRandom from '../../componets/RandomCard';
import NavBar from '../../componets/NavBar';
import NavBarBottom from '../../componets/NavBarBottom';
import ButtonRandom from '../../componets/ButtonRandom';

const Random: FC = () => {
    return (
        <>
            <NavBar />
            <CardRandom />
            <ButtonRandom />
            <NavBarBottom />
        </>
    );
};

export default memo(Random);

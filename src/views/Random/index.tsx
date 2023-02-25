import { FC, memo } from 'react';
import CardRandom from '../../componets/RandomCard';
import NavBar from '../../componets/NavBar';
import NavBarBottom from '../../componets/NavBarBottom';
import ButtonRandom from '../../componets/ButtonRandom';
import { BackGroundRandom } from './styles';

const Random: FC = () => {
    return (
        <>
            <BackGroundRandom>
                <NavBar />
                <CardRandom />
                {/* <ButtonRandom /> */}
                <NavBarBottom />
            </BackGroundRandom>
        </>
    );
};

export default memo(Random);

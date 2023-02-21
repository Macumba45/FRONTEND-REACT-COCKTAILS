import { FC, memo } from 'react';
import NavBar from '../../componets/NavBar';
import NavBarBottom from '../../componets/NavBarBottom';

const Welcome: FC = () => {

    return (
        <>
            <NavBar />

            <NavBarBottom />

        </>
    )
};

export default memo(Welcome);

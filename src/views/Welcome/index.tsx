import { FC, memo } from 'react';
import NavBar from '../../componets/NavBar';
import BottomAppBar from '../../componets/NavBarBottom'

const Welcome: FC = () => {

    return (
        <>
            <NavBar />

            <BottomAppBar />

        </>
    )
};

export default memo(Welcome);

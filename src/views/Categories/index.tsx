import { FC, memo } from 'react';
import ButtonsCategories from '../../componets/ButtonsCategories';
import NavBar from '../../componets/NavBar';
import BottomAppBar from '../../componets/NavBarBottom';

const Categories: FC = () => {
    return (
        <>
            <NavBar />
            <ButtonsCategories />
            <BottomAppBar />
        </>
    );
};

export default memo(Categories);

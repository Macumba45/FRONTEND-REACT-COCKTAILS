import { FC, memo } from 'react';
import NavBar from '../../../componets/NavBar';
import BottomAppBar from '../../../componets/NavBarBottom';
import ButtonsSubCategories from '../../../componets/ButtonsCategories/SubCategories';

const SubCategories: FC = () => {
    return (
        <>
            <NavBar />
            <ButtonsSubCategories />
            <BottomAppBar />
        </>
    );
};

export default memo(SubCategories);

import { FC, memo } from 'react';
import NavBar from '../../../componets/NavBar';
import BottomAppBar from '../../../componets/NavBarBottom';
import ButtonsSubCategories from '../../../componets/ButtonsCategories/SubCategories';
import { BackGroundSubCategories } from './styles';

const SubCategories: FC = () => {
    return (
        <BackGroundSubCategories>
            <NavBar />
            <ButtonsSubCategories />
            <BottomAppBar />
        </BackGroundSubCategories>
    );
};

export default memo(SubCategories);

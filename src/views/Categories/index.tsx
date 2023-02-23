import { FC, memo } from 'react';
import ButtonsCategories from '../../componets/ButtonsCategories';
import NavBar from '../../componets/NavBar';

const Categories: FC = () => {
    return (
        <>
            <NavBar />
            <ButtonsCategories />
        </>
    );
};

export default memo(Categories);

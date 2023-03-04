import { FC, memo } from 'react';
import NavBar from '../../componets/NavBar';
import FormEdit from '../../componets/EditForm';

const FeedFormEdit: FC = () => {
    return (
        <>
            <NavBar />
            <FormEdit />
        </>
    );
};

export default memo(FeedFormEdit);

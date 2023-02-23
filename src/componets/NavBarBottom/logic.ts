import { useNavigate } from 'react-router-dom';

export const useNavBarBottomLogic = () => {
    const navigate = useNavigate();

    const goToFeedPage = () => {
        navigate('/feed');
    };

    const goToRandomPage = (e: any) => {
        navigate('/random');
    };

    const goToCategoryPage = (e: any) => {
        navigate('/categories');
    };

    return {
        navigate,
        goToFeedPage,
        goToRandomPage,
        goToCategoryPage,
    };
};

import { useLocation, useNavigate } from 'react-router-dom';

export const useNavBarBottomLogic = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isFeedPage = location.pathname === '/feed';

    const goToFeedPage = () => {
        navigate('/feed');
    };

    const goToRandomPage = (e: any) => {
        navigate('/random');
    };

    const goToCategoryPage = (e: any) => {
        navigate('/categories');
    };

    const postNewFeed = (e: any) => {
        navigate('/new-feed');
    };

    return {
        navigate,
        location,
        isFeedPage,
        goToFeedPage,
        goToRandomPage,
        goToCategoryPage,
        postNewFeed,
    };
};

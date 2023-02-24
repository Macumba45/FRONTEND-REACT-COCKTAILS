import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useNavBarBottomLogic = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isFeedPage = location.pathname === '/feed';

    const goToFeedPage = useCallback(() => {
        navigate('/feed');
    }, [navigate]);

    const goToRandomPage = useCallback(
        (e: any) => {
            navigate('/random');
        },
        [navigate]
    );

    const goToCategoryPage = useCallback(
        (e: any) => {
            navigate('/categories');
        },
        [navigate]
    );

    const postNewFeed = useCallback(
        (e: any) => {
            navigate('/new-feed');
        },
        [navigate]
    );

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

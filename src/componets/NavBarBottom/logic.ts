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
        (e: React.MouseEvent<HTMLButtonElement>) => {
            navigate('/random');
        },
        [navigate]
    );

    const goToCategoryPage = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            navigate('/categories');
        },
        [navigate]
    );

    const postNewFeed = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
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

import { FC, memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../views/auth/Login';
import Random from '../views/Random';
import SignUp from '../views/auth/SignUp';
import Categories from '../views/Categories';
import Feed from '../views/Feed';
import Profile from '../views/Profile';
import FeedFormPost from '../views/FeedFormPost';
import SubCategories from '../views/Categories/SubCategories';

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/random" element={<Random />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/new-feed" element={<FeedFormPost />} />
                <Route
                    path="/categories/:category"
                    element={<SubCategories />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default memo(Router);

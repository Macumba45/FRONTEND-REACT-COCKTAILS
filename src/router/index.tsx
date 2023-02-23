import { FC, memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../views/auth/Login';
import Random from '../views/Random';
import SignUp from '../views/auth/SignUp';
import Welcome from '../views/Welcome';
import Categories from '../views/Categories';

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/feed" element={<Welcome />} />
                <Route path="/random" element={<Random />} />
                <Route path="/categories" element={<Categories />} />
            </Routes>
        </BrowserRouter>
    );
};

export default memo(Router);

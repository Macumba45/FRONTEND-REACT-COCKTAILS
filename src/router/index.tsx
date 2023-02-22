import { FC, memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../views/auth/Login';
import Random from '../views/Random';
import SignUp from '../views/SignUp';
import Welcome from '../views/Welcome';

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/feed" element={<Welcome />} />
                <Route path="/random" element={<Random />} />
            </Routes>
        </BrowserRouter>
    );
};

export default memo(Router);

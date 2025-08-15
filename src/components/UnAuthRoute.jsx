import { Navigate, Outlet } from 'react-router-dom';

const UnAuthRoute = () => {
    const token = localStorage.getItem('token');
    return token ? <Navigate to="/" /> : <Outlet />;
};

export default UnAuthRoute;
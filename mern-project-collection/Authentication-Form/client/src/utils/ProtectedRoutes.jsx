import { Outlet, Navigate } from "react-router-dom";

const getToken = () => {
    return localStorage.getItem('token');
  };


const ProtectedRoutes = () => {
    const user = getToken();
    return user ? <Outlet/> : <Navigate to='/login' />
}

export default ProtectedRoutes;
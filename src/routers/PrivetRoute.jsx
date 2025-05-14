import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader/Loader'

const PrivetRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader />
    }

    if (!user) {
        // 👉 Pass current location as state
        return <Navigate to="/auth/login" state={location.pathname} replace />;
    }
    return children;
};

export default PrivetRoute;
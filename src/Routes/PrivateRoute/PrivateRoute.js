import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
/**
 * only allows the authenticated user to visit the route
 * 
 */

const PrivateRoute = ({ children }) => {
    let location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='text-center'><Spinner animation="border" /></div>

    }
    if (user && user.uid) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
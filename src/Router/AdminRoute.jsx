import React from 'react';
import useRole from '../Hooks/useRole';
import { Navigate } from 'react-router';

const AdminRoute = ({ children }) => {
    const { role } = useRole()
    
    if (role == "admin") {
        return children
    }


     
    return <Navigate to={"/"}></Navigate>
};

export default AdminRoute;
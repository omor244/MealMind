import React from 'react';
import useRole from '../Hooks/useRole';
import { Navigate } from 'react-router';
import Loading from '../Components/Loading/Loading';

const AdminRoute = ({ children }) => {
    const { role, isLoading } = useRole()

    if(isLoading) return <Loading></Loading>
    
    if (role == "admin") {
        return children
    }


     
    return <Navigate to={"/"}></Navigate>
};

export default AdminRoute;
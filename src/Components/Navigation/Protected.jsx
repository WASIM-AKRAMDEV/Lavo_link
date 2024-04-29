import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';

const Protected = () => {

    let loggedIn = localStorage.getItem("loggedIn");

    return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
};

export default Protected;

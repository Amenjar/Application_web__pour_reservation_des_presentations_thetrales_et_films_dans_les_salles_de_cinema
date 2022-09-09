import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const token = localStorage.getItem("token");
    const auth = useSelector(state => state.AuthReducer.auth);
    return (
        <div>
            {token || auth ? children: <Navigate to="/signIn"></Navigate>}
        </div>
    )
}

export default PrivateRoute;
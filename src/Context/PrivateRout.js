import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRout = ({children}) => {
    const {user, loader}=useContext(AuthContext);
    const location=useLocation();

if(!loader){
    return <p className='text-4xl text-lime-700 my-8 text-center'>Loading.....</p>
}
    if(user){
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRout;
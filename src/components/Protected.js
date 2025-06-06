import React from 'react'
import { useAuth } from '../context/AuthContext.js'
import { Navigate } from 'react-router-dom';
const Protected = ({children}) => {
    const { user } = useAuth();
    if(!user){
        return <Navigate to="/signIn" />;
    }
  return children;
}

export default Protected
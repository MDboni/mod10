import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

   if (loading) {
  return (
        <div className="flex justify-center items-center h-screen">
            <span className="loading loading-ring loading-xl"></span>
        </div>
     );
    }

   if(user){
     return children
   }

return <Navigate to="/signIn" state={{ from: location.pathname }} replace />;}

export default Private
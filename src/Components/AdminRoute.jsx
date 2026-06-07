// COMPLETE AdminRoute.jsx file
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useMockAuth = () => {
  const userData = localStorage.getItem('user');
  
  if (!userData) {
    return { isAdmin: false, isLoading: false };
  }
  
  const user = JSON.parse(userData);
  const isAdmin = (user.role === 'admin');
  
  return { isAdmin, isLoading: false };
};
// const useMockAuth=()=>{
//     const userData=localStorage.setItem('user')
//     if(!userData){
//         return {isAdmin:false,loading:false};
//     }
//     const user=JSON.parse(userData)
//     const isAdmin=(user.role==='admin')
//     return{isAdmin,isLoading:false}
// }
const AdminRoute = () => {
  const { isAdmin, isLoading } = useMockAuth();
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }
  
  if (isAdmin) {
    return <Outlet />;
  }
  
  return <Navigate to="/login" replace />;
};

export default AdminRoute;
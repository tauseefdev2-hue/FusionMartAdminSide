
import React from 'react'
import Sidebar from './Components/Sidebar'
import AdminLayout from './Components/AdminLayout'
import { Navigate, Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import DashBoard from './Components/Subcomponent/Stats/DashBoard'
import Products from './Components/Subcomponent/Products'
import Login from './Components/Login'
import AdminRoute from './Components/AdminRoute'
import OrderC from './Components/Subcomponent/Orders/OrderC'
import ReturnsTable from './Components/Subcomponent/Return/ReturnTable'
import UsersTables from './Components/Subcomponent/Tables/UsersTables'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>      <ToastContainer />

    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route element={<AdminRoute/>}>
        <Route element={<AdminLayout/>}>
<Route path='/admin/dashboard' element={<DashBoard/>}/>
<Route path='/admin/products' element={<Products/>}/>
<Route path='/admin/orders' element={<OrderC/>}/>
<Route path='/admin/users' element={<UsersTables/>}/>
<Route path='/admin/returns' element={<ReturnsTable/>}/>
</Route>
</Route>       
 <Route path="/admin/*" element={<Navigate to="/admin/dashboard" replace />} />

      </Routes>
    </Router>
      {/* <AdminLayout/> */}
    </>
  )
}

export default App


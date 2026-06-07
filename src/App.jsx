
// import React from 'react'
// import Sidebar from './Components/Sidebar'
// import AdminLayout from './Components/AdminLayout'
// import { Navigate, Route,BrowserRouter as Router, Routes } from 'react-router-dom'
// import DashBoard from './Components/DashBoard'
// import Products from './Components/Products'
// import Login from './Components/Login'
// import AdminRoute from './Components/AdminRoute'

// const App = () => {
//   return (
//     <>
//     <Router>
//       <Routes>
//         <Route path='/' element={<Login/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route element={<AdminRoute/>}>
//         <Route element={<AdminLayout/>}>
// <Route path='/admin/dashboard' element={<DashBoard/>}/>
// <Route path='/admin/products' element={<Products/>}/>
// </Route>
// </Route>       
//  <Route path="/admin/*" element={<Navigate to="/admin/dashboard" replace />} />

//       </Routes>
//     </Router>
//       {/* <AdminLayout/> */}
//     </>
//   )
// }

// export default App

import React from 'react'
import Products from './Components/Subcomponent/Products'
import PrcticeData from './Components/Subcomponent/PrcticeData'

const App = () => {
  return (
    <>
<Products/>      
    </>
  )
}

export default App

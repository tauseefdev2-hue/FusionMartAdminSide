import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        if(email==='admin@shopcore.com'&& password==='admin123'){
            localStorage.setItem('user',JSON.stringify({role:'admin',email}))
            navigate('/admin/dashboard')
        }else{
            alert('Invalid credential try email : admin@shopcore.com and password:admin123')
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-96">
        <h1 className="font-bold text-3xl text-center mb-6 text-gray-800">
          Login page
        </h1>
        
        <form className="space-y-4 mb-6 " onSubmit={handleLogin}>
          <input value={email}
          onChange={(e)=>setEmail(e.target.value)}
            type="text" 
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input  
            type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer font-semibold">
          Login
        </button>
        </form>
        
        
      </div>
    </div>
  )
}

export default Login
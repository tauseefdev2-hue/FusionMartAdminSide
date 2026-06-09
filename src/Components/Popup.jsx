import React, { useState } from 'react'

const Popup = () => {
    const [show,setShow]=useState(false)
    const handletoogle=()=>{
        setShow(!show)
    }
  return (
    <>
    <button className='p-4 bg-green-300' onClick={handletoogle}>Popup</button>
{show&&(
 <div className="div fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center">
              <div className="bg-white p-6 rounded-xl shadow-xl w-[400px]">

        <h1>Details page</h1>
        <h1>Order</h1>
        <h1>Order</h1>
        <h1>Order</h1>
        <h1>Order</h1>
        <h1>Order</h1>
        <h1>Order</h1>
         <button onClick={()=>setShow(false)} className='bg-black text-5xl text-white'>close</button>
      </div></div>
)}
     
    </>
  )
}

export default Popup

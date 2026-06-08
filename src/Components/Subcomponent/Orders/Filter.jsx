import React, { useState } from 'react'

const Filter = ({setFilter}) => {
    
  return (
    <>
     <h1 className="text-2xl font-bold mb-4 text-gray-800">Filter Orders</h1> 
     
     <div className="flex flex-wrap gap-2">
       <button 
         onClick={()=>setFilter('All')}
         className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
       >
         All
       </button>
       <button 
         onClick={()=>setFilter('pending')}
         className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200"
       >
         pending
       </button>
       <button 
         onClick={()=>setFilter('confirmed')}
         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
       >
         confirmed
       </button>
       <button 
         onClick={()=>setFilter('processing')}
         className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200"
       >
         processing
       </button>
       <button 
         onClick={()=>setFilter('shipped')}
         className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200"
       >
         shipped
       </button>
       <button 
         onClick={()=>setFilter('out for delivery')}
         className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
       >
         Out For Delivery
       </button>
       <button 
         onClick={()=>setFilter('delivered')}
         className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
       >
         delivered
       </button>
       <button 
         onClick={()=>setFilter('cancelled')}
         className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
       >
         cancelled
       </button>
     </div>
    </>
  )
}

export default Filter
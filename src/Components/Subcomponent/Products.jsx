import React, { useState } from 'react'
import { productdata } from './Data'
import StatusBadge from './StatusBadge'

const Products = () => {
  const [selected, setSelected] = useState([])
  const [expandedrow, setExpandedrow] = useState(null)
const [hoveredrow,setHoveredrow]=useState(null)
const handlesingledelete=(id,name)=>{
  if(window.confirm(`delete ${name}`)){
    alert(`deleted item ${id}`)
  }
    console.log(`deleted item ${id}`)
}
 const handleview=(id)=>{
   console.log(`view ${id}`)
 }
 const handleedit=(id)=>{
   console.log(`edit ${id}`)
 }
  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    )
  }

  const allselected = selected.length === productdata.length

  const handledelete = () => {
    if (window.confirm(`Delete ${selected.length} item(s)?`)) {
      console.log('Deleted items:', selected)
      setSelected([])
    }
  }

  const handleBulkStatusChange = (newStatus) => {
    if (window.confirm(`Change ${selected.length} item(s) to ${newStatus}?`)) {
      console.log(`Changing ${selected.length} items to ${newStatus}`)
      setSelected([])
    }
  }
  
  const [search, setSearch] = useState('')
  const filtereddata = productdata.filter((item) => (
    item.name.toLowerCase().includes(search.toLowerCase())
  ))
  
  const [currentpage, setCurrentpage] = useState(1)
  const itemsperpage = 5
  let lastindex = currentpage * itemsperpage
  let firstindex = lastindex - itemsperpage
  const currentitems = filtereddata.slice(firstindex, lastindex)
  const totalpages = Math.ceil(filtereddata.length / itemsperpage)
  
  const increment = () => { if (currentpage < totalpages) { setCurrentpage(currentpage + 1) } }
  const decrement = () => { if (currentpage > 1) { setCurrentpage(currentpage - 1) } }
  
  // Function to generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = window.innerWidth < 640 ? 3 : 5
    
    if (totalpages <= maxVisible) {
      for (let i = 1; i <= totalpages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      
      let start = Math.max(2, currentpage - 1)
      let end = Math.min(totalpages - 1, currentpage + 1)
      
      if (window.innerWidth < 640) {
        start = currentpage
        end = currentpage
      }
      
      if (start > 2) {
        pages.push('...')
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      
      if (end < totalpages - 1) {
        pages.push('...')
      }
      
      pages.push(totalpages)
    }
    
    return pages
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-6">
        <input 
          type="text" 
          className="w-full max-w-md px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200" 
          placeholder="🔍 Search products by name..." 
          onChange={(e) => {
            setSearch(e.target.value)
            setCurrentpage(1)
          }} 
          value={search} 
        />
      </div>

      {/* Pagination Controls */}
      {filtereddata.length > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 bg-gray-100 px-4 py-3 rounded-lg">
          <div className="text-sm text-gray-600">
            Showing {firstindex + 1} to {Math.min(lastindex, filtereddata.length)} of {filtereddata.length} products
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <button 
              onClick={decrement} 
              disabled={currentpage === 1}
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                currentpage === 1 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              ← Prev
            </button>
            
            <div className="flex gap-1 sm:gap-2">
              {getPageNumbers().map((page, idx) => (
                <button
                  key={idx}
                  onClick={() => typeof page === 'number' && setCurrentpage(page)}
                  className={`min-w-[35px] sm:min-w-[40px] px-2 sm:px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                    currentpage === page
                      ? 'bg-blue-600 text-white'
                      : page === '...' 
                      ? 'bg-transparent text-gray-500 cursor-default' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  disabled={page === '...'}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button 
              onClick={increment} 
              disabled={currentpage === totalpages || totalpages === 0}
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                currentpage === totalpages || totalpages === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Bulk Action Bar */}
      {selected.length > 0 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-4">
            <span className="font-medium">
              {selected.length} item{selected.length !== 1 ? 's' : ''} selected
            </span>
            <div className="h-6 w-px bg-indigo-400"></div>
            <button
              onClick={handledelete}
              className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-sm font-medium"
            >
              Delete All
            </button>
            <select
              onChange={(e) => handleBulkStatusChange(e.target.value)}
              defaultValue=""
              className="px-3 py-1 bg-indigo-500 hover:bg-indigo-700 rounded text-sm font-medium text-white border-none cursor-pointer"
            >
              <option value="" disabled>Change Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
            <button
              onClick={() => setSelected([])}
              className="px-3 py-1 bg-gray-500 hover:bg-gray-600 rounded text-sm font-medium"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700">
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelected(productdata.map((item) => item.id))
                    } else {
                      setSelected([])
                    }
                  }}
                  checked={allselected}
                  type="checkbox"
                />
              </th>
              <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700">ID</th>
              <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700">Product</th>
              <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 hidden md:table-cell">Images</th>
              <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 hidden md:table-cell">Price</th>
              <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 hidden md:table-cell">Status</th>
              <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 hidden md:table-cell">Sizes</th>
              <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtereddata.length > 0 ? (
              currentitems.map((item, index) => (
                <React.Fragment key={index}>
                  <tr className="hover:bg-gray-50 transition-colors duration-200 border-b" onMouseEnter={()=>setHoveredrow(index)} onMouseLeave={()=>setHoveredrow(null)}>
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selected.includes(item.id)}
                        onChange={() => toggleSelect(item.id)}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-medium text-gray-800">{item.id}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-medium text-gray-800">{item.name}</span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <div className="grid grid-cols-3 gap-1 min-w-[150px]">
                        <img src={item.Allimages.firstImg} className="w-12 h-12 object-cover rounded" alt="" />
                        <img src={item.Allimages.secondImg} className="w-12 h-12 object-cover rounded" alt="" />
                        <img src={item.Allimages.thirdImg} className="w-12 h-12 object-cover rounded" alt="" />
                        <img src={item.Allimages.fourthImg} className="w-12 h-12 object-cover rounded" alt="" />
                        <img src={item.Allimages.fifthImg} className="w-12 h-12 object-cover rounded col-span-2" alt="" />
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <div>
                        <span className="font-bold text-green-600">${item.price}</span>
                        <br />
                        <span className="text-sm text-gray-400 line-through">${item.oldPrice}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <StatusBadge variant={item.status}>{item.status}</StatusBadge>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {item.sizes.map((size, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs border rounded hover:bg-gray-100 cursor-pointer">
                            {size}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setExpandedrow(expandedrow === index ? null : index)}
                        className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                      >
                        {expandedrow === index ? "Hide Details" : "Show Details"}
                      </button>
                      <div className={`hidden md:flex items-center gap-2 transition-opacity duration-200 ${
                        hoveredrow===index?'opacity-100':'opacity-0'
                      }`}>
                        <button onClick={()=>handleview(item.id) }       className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
>      👁️
</button>
  <button onClick={()=>handleedit(item.id) }       className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
>      ✏️
</button>
  <button onClick={()=>handlesingledelete(item.id,item.name) }    // ❌ Wrong hover color for delete button

className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
>            🗑️
</button>
                      
                      </div>
                      <div className="flex md:hidden items-center gap-2">
                           <button
      onClick={() => handleview(item.id)}
      className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
      title="View"
    >
      👁️
    </button>
    <button
      onClick={() => handleedit(item.id)}
      className="p-2 text-green-600 hover:bg-green-50 rounded-full"
      title="Edit"
    >
      ✏️
    </button>
    <button
      onClick={() => handlesingledelete(item.id, item.name)}
      className="p-2 text-red-600 hover:bg-red-50 rounded-full"
      title="Delete"
    >
      🗑️
    </button>
                      </div>
                    </td>
                  </tr>
                  
                  {expandedrow === index && (
                    <tr>
                      <td colSpan="8" className="p-4 bg-gray-100">
                        <div className="md:hidden space-y-3 mb-5">
                          <p><strong>Price:</strong> ${item.price}</p>
                          <p><strong>Status:</strong> {item.status}</p>
                          <div>
                            <strong>Sizes:</strong>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {item.sizes.map((size, idx) => (
                                <span key={idx} className="px-2 py-1 border rounded text-xs">{size}</span>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {Object.values(item.Allimages).map((img, idx) => (
                              <img key={idx} src={img} alt="" className="w-full h-20 object-cover rounded" />
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Description</h4>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Features</h4>
                            <ul className="list-disc list-inside text-gray-600">
                              {item.features.map((feat, idx) => (
                                <li key={idx}>{feat}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Care Instructions</h4>
                            <ul className="list-disc list-inside text-gray-600">
                              {item.fabric.map((care, idx) => (
                                <li key={idx}>{care}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-8 text-gray-500">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products
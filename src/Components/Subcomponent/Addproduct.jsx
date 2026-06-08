import React, { useState } from 'react'

const Addproduct = () => {
  const [name, setName] = useState("")
  const [status, setStatus] = useState("active")
  const [price, setPrice] = useState("")
  const [oldPrice, setOldPrice] = useState("")
  
  // Description state
  const [description, setDescription] = useState("")
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')
  const [img3, setImg3] = useState('')
  const [img4, setImg4] = useState('')
  const [img5, setImg5] = useState('')

  const [sizes, setSizes] = useState([])
  const [sizeInput, setSizeInput] = useState('')
  
  const [features, setFeatures] = useState([])
  const [featureInput, setFeatureInput] = useState('') // Fixed: was featuresinp
  
  const [fabric, setFabric] = useState([])
  const [fabricInput, setFabricInput] = useState("")
  
  // Size functions
  const addSize = () => {
    if (sizeInput.trim() !== "") {
      setSizes([...sizes, sizeInput.toUpperCase()])
      setSizeInput("")
    }
  }

  const removeSize = (indexToRemove) => {
    setSizes(sizes.filter((_, index) => index !== indexToRemove))
  }

  // Feature functions
  const addFeature = () => {
    if (featureInput.trim() !== "") {  // Fixed: was featureInput
      setFeatures([...features, featureInput])
      setFeatureInput("")  // Fixed: was setFeatureInput
    }
  }

  const removeFeature = (indexToRemove) => {
    setFeatures(features.filter((_, index) => index !== indexToRemove))
  }

  // Fabric functions
  const addFabric = () => {
    if (fabricInput.trim() !== "") {
      setFabric([...fabric, fabricInput])
      setFabricInput("")
    }
  }

  const removeFabric = (indexToRemove) => {
    setFabric(fabric.filter((_, index) => index !== indexToRemove))
  }

  const handleSubmit = (e) => {
    e.preventDefault()  // Fixed: was preventDeafult

    const newProduct = {
      id: Date.now().toString(),
      name: name,
      status: status,
      price: price,
      oldPrice: oldPrice,
      Allimages: {
        firstImg: img1,
        secondImg: img2,
        thirdImg: img3,
        fourthImg: img4,
        fifthImg: img5,
      },
      sizes: sizes,
      description: description,
      features: features,
      fabric: fabric,
    }
    
    console.log("New Product:", newProduct)
    alert("Product added successfully!")
    resetForm()
  }
  
  const resetForm = () => {
    setName("")
    setStatus("active")
    setPrice("")
    setOldPrice("")
    setImg1("")
    setImg2("")
    setImg3("")
    setImg4("")
    setImg5("")
    setSizes([])
    setDescription("")
    setFeatures([])
    setFabric([])
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">Add Product</h1>
          
          {/* Name Field */}
          <div className="mb-4">
            <h1 className="text-lg font-semibold text-gray-700 mb-2">Name</h1>
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              type="text" 
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            />
          </div>
          
          {/* Status Field */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Status</h2>
            <select 
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="active">Active</option>
              <option value="inactive">InActive</option>
              <option value="out-of-stock">Out of stock</option>
            </select>
          </div>
          
          {/* Price Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="ptie">
              <h1 className="text-lg font-semibold text-gray-700 mb-2">Price</h1>
              <input 
                type="number" 
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>     
            <div className="oldprice">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Old Price</h2>
              <input 
                type="number" 
                step="0.01"
                value={oldPrice}
                onChange={(e) => setOldPrice(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          {/* Images Section */}
          <div className="imgs mb-4 p-4 bg-gray-50 rounded-lg">
            <h1 className="text-xl font-semibold text-gray-800 mb-3">Product Images</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <h1 className="text-sm font-medium text-gray-600 mb-1">img1</h1>
                <input 
                  type="text" 
                  value={img1} 
                  onChange={(e) => setImg1(e.target.value)} 
                  placeholder='imgurl' 
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <h1 className="text-sm font-medium text-gray-600 mb-1">img2</h1>
                <input 
                  type="text" 
                  value={img2}
                  onChange={(e) => setImg2(e.target.value)}
                  placeholder='imgurl' 
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <h1 className="text-sm font-medium text-gray-600 mb-1">img3</h1>
                <input 
                  type="text" 
                  value={img3}
                  onChange={(e) => setImg3(e.target.value)}
                  placeholder='imgurl' 
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <h1 className="text-sm font-medium text-gray-600 mb-1">img4</h1>
                <input 
                  type="text" 
                  value={img4}
                  onChange={(e) => setImg4(e.target.value)}
                  placeholder='imgurl' 
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <h1 className="text-sm font-medium text-gray-600 mb-1">img5</h1>
                <input 
                  type="text" 
                  value={img5}
                  onChange={(e) => setImg5(e.target.value)}
                  placeholder='imgurl' 
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>
          </div>
          
          {/* Sizes Section */}
          <div className="sizes mb-4">
            <h1 className="text-lg font-semibold text-gray-700 mb-2">Sizes</h1>
            <div className="flex gap-2 mb-2">
              <input 
                type="text" 
                value={sizeInput}
                onChange={(e) => setSizeInput(e.target.value)}
                placeholder="Enter size (S, M, L, XL)"
                className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <button 
                type="button"
                onClick={addSize}
                className="bg-blue-500 text-white px-6 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Add Size
              </button>
            </div>
            {/* Display sizes */}
            <div className="flex flex-wrap gap-2 mt-2">
              {sizes.map((size, index) => (
                <span key={index} className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-2">
                  {size}
                  <button
                    type="button"
                    onClick={() => removeSize(index)}
                    className="text-red-500 hover:text-red-700 font-bold"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
          
          {/* Description Field */}
          <div className="description mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Description</h2>
            <textarea 
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product description"
            ></textarea>
          </div>
          
          {/* Features Section */}
          <div className="features mb-4">
            <h1 className="text-lg font-semibold text-gray-700 mb-2">Features</h1>
            <div className="flex gap-2 mb-2">
              <input 
                value={featureInput} 
                onChange={(e) => setFeatureInput(e.target.value)} 
                type="text" 
                placeholder="Enter a feature"
                className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <button 
                type="button"
                onClick={addFeature} 
                className="bg-blue-500 text-white px-6 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Add Feature
              </button>
            </div>
            <div className="space-y-2 mt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                  <span>{feature}</span>
                  <button 
                    type='button' 
                    onClick={() => removeFeature(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Fabric Section */}
          <div className="fabric mb-6">
            <h1 className="text-lg font-semibold text-gray-700 mb-2">Fabric</h1>
            <div className="flex gap-2 mb-2">
              <input 
                type="text" 
                value={fabricInput}
                onChange={(e) => setFabricInput(e.target.value)}
                placeholder="Enter fabric or care instruction"
                className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <button 
                type="button"
                onClick={addFabric}
                className="bg-blue-500 text-white px-6 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Add Fabric
              </button>
            </div>
            {/* Display fabric items */}
            <div className="space-y-2 mt-2">
              {fabric.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                  <span>{item}</span>
                  <button 
                    type='button'
                    onClick={() => removeFabric(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Add Product
          </button>
        </div>
      </div>
    </form>
  )
}

export default Addproduct

// ✅ Fix - Add fallback
export const getStatusColor=(status)=>{
    const colors={
    delivered: "bg-green-100 text-green-800",
    shipped: "bg-blue-100 text-blue-800",
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-purple-100 text-purple-800",
    cancelled: "bg-red-100 text-red-800"
    }
return colors[status] || "bg-gray-100 text-gray-800"  // ← fallback
}
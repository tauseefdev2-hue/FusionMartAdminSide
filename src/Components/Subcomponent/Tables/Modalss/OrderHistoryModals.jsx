function OrderHistoryModal({ user, onClose }) {
  // Mock orders for this user
  const mockOrders = [
    { id: "ORD-001", date: "2025-01-15", total: 12999, status: "delivered" },
    { id: "ORD-002", date: "2025-01-20", total: 285000, status: "shipped" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
        <h3 className="text-xl font-bold mb-4"> Order History - {user.name}</h3>
        
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Order ID</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Total</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map(order => (
              <tr key={order.id} className="border-b">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.date}</td>
                     <td className="p-2">₹{order.total}</td>
                <td className="p-2">
                       <span className={`px-2 py-1 rounded text-xs ${
                    order.status === 'delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                       }`}>
                    {order.status}
                      </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="mt-4 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryModal;
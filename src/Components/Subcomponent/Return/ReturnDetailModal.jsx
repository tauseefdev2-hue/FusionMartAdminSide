function ReturnDetailModal({ returnItem, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-xl">
        <h3 className="text-xl font-bold mb-4 text-gray-800">📋 Return Details</h3>
        
        <div className="space-y-3">
          <div className="flex border-b pb-2">
            <span className="font-semibold w-32 text-gray-600">Return ID:</span>
            <span className="text-gray-900">{returnItem.id}</span>
          </div>
          
          <div className="flex border-b pb-2">
            <span className="font-semibold w-32 text-gray-600">Order ID:</span>
            <span className="text-gray-900">{returnItem.orderId}</span>
          </div>
          
          <div className="flex border-b pb-2">
            <span className="font-semibold w-32 text-gray-600">Product:</span>
            <span className="text-gray-900">{returnItem.product}</span>
          </div>
          
          <div className="flex border-b pb-2">
            <span className="font-semibold w-32 text-gray-600">Reason:</span>
            <span className="text-gray-900">{returnItem.reason}</span>
          </div>
          
          <div className="flex border-b pb-2">
            <span className="font-semibold w-32 text-gray-600">Customer Note:</span>
            <span className="text-gray-900">{returnItem.customerNote || 'N/A'}</span>
          </div>
          
          <div className="flex border-b pb-2">
            <span className="font-semibold w-32 text-gray-600">Amount:</span>
            <span className="text-gray-900">₹{returnItem.amount.toLocaleString()}</span>
          </div>
          
          <div className="flex border-b pb-2">
            <span className="font-semibold w-32 text-gray-600">Refund Method:</span>
            <span className="text-gray-900">{returnItem.refundMethod || 'Original payment'}</span>
          </div>
          
          {returnItem.internalNote && (
            <div className="flex border-b pb-2">
              <span className="font-semibold w-32 text-gray-600">Internal Note:</span>
              <span className="text-gray-900">{returnItem.internalNote}</span>
            </div>
          )}
          
          {returnItem.pickupDate && (
            <div className="flex border-b pb-2">
              <span className="font-semibold w-32 text-gray-600">Pickup Date:</span>
              <span className="text-gray-900">{returnItem.pickupDate}</span>
            </div>
          )}
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReturnDetailModal;
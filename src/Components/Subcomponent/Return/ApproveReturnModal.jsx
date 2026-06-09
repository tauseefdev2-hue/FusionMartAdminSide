import { useState } from 'react';

function ApproveReturnModal({ returnItem, onApprove, onClose }) {
  const [internalNote, setInternalNote] = useState('');
  const [pickupDate, setPickupDate] = useState('');

  const handleSubmit = () => {
    if (!pickupDate) {
      alert('Please select a pickup date');
      return;
    }
    onApprove(returnItem.id, internalNote, pickupDate);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
        <h3 className="text-xl font-bold mb-4 text-gray-800">✅ Approve Return - {returnItem.id}</h3>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Internal Note (optional):
          </label>
          <textarea 
            value={internalNote} 
            onChange={(e) => setInternalNote(e.target.value)} 
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add internal notes here..."
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Schedule Pickup Date <span className="text-red-500">*</span>:
          </label>
          <input 
            type="date" 
            value={pickupDate} 
            onChange={(e) => setPickupDate(e.target.value)} 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Confirm Approval
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApproveReturnModal;
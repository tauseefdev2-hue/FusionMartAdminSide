import { useState } from 'react';
import { mockReturns } from './Mocksss';
import ApproveReturnModal from './ApproveReturnModal';
import RejectReturnModal from './RejectReturnModal';
import ReturnDetailModal from './ReturnDetailModal';

function ReturnsTable() {
  const [returns, setReturns] = useState(mockReturns);
  const [selectedReturn, setSelectedReturn] = useState(null);
  const [modalType, setModalType] = useState(null); // 'approve', 'reject', 'detail'

  const getStatusBadge = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      completed: 'bg-blue-100 text-blue-800'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colors[status]}`}>
        {status.toUpperCase()}
      </span>
    );
  };

  const handleApprove = (returnId, note, pickupDate) => {
    setReturns(returns.map(r => 
      r.id === returnId 
        ? { ...r, status: 'approved', internalNote: note, pickupDate }
        : r
    ));
    showToast('Return request approved!');
  };

  const handleReject = (returnId, reason) => {
    setReturns(returns.map(r =>
      r.id === returnId
        ? { ...r, status: 'rejected', rejectionReason: reason }
        : r
    ));
    showToast('Return request rejected');
  };

  // Placeholder for toast - you can implement with react-toastify
  const showToast = (message) => {
    alert(message); // Replace with actual toast notification
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🔄 Returns Management</h2>
      
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full min-w-[1000px] divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {returns.map((returnItem) => (
              <tr key={returnItem.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{returnItem.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{returnItem.orderId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{returnItem.product}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{returnItem.reason}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PKR:{returnItem.amount.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{returnItem.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(returnItem.status)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    onClick={() => { setSelectedReturn(returnItem); setModalType('detail'); }}
                    className="text-blue-600 hover:text-blue-900 transition-colors"
                  >
                     View
                  </button>
                  {returnItem.status === 'pending' && (
                    <>
                      <button
                        onClick={() => { setSelectedReturn(returnItem); setModalType('approve'); }}
                        className="text-green-600 hover:text-green-900 transition-colors ml-2"
                      >
                         Approve
                      </button>
                      <button
                        onClick={() => { setSelectedReturn(returnItem); setModalType('reject'); }}
                        className="text-red-600 hover:text-red-900 transition-colors ml-2"
                      >
                         Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {modalType === 'approve' && (
        <ApproveReturnModal 
          returnItem={selectedReturn} 
          onApprove={handleApprove} 
          onClose={() => setModalType(null)} 
        />
      )}
      {modalType === 'reject' && (
        <RejectReturnModal 
          returnItem={selectedReturn} 
          onReject={handleReject} 
          onClose={() => setModalType(null)} 
        />
      )}
      {modalType === 'detail' && (
        <ReturnDetailModal 
          returnItem={selectedReturn} 
          onClose={() => setModalType(null)} 
        />
      )}
    </div>
  );
}

export default ReturnsTable;
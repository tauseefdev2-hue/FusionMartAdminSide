import React, { useEffect, useState } from 'react';
import Batch from './Batch';
import { mob } from './Mob';
import Filter from './Filter';

const OrderC = () => {
  const [expandedId, setExpandedID] = useState(null);
  const [filter, setFilter] = useState('All');
  const [orderStatuses, setOrderStatuses] = useState({});

  // Initialize statuses
  useEffect(() => {
    const initialStatuses = {};
    mob.forEach((order) => {
      initialStatuses[order.id] = order.status;
    });
    setOrderStatuses(initialStatuses);
  }, []);

  const toggleSelect = (id) => {
    setExpandedID(expandedId === id ? null : id);
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrderStatuses((prev) => ({
      ...prev,
      [orderId]: newStatus,
    }));
    console.log(`Order ${orderId} status changed to: ${newStatus}`);
  };

  const getStatus = (item) => orderStatuses[item.id] || item.status;

  const filteredData =
    filter === 'All'
      ? mob
      : mob.filter(
          (item) => (orderStatuses[item.id] || item.status) === filter
        );

  return (
    <>
      <Filter setFilter={setFilter} />

      {/* Responsive Container */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        {/* Desktop Table */}
        <table className="min-w-full hidden md:table border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Customer</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Total</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Items</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-4 py-3 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((item) => (
              <React.Fragment key={item.id}>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium">{item.id}</td>
                  <td className="px-4 py-4">{item.customer}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{item.email}</td>
                  <td className="px-4 py-4 text-sm">{item.date}</td>
                  <td className="px-4 py-4 font-semibold">PKR {item.total}</td>
                  <td className="px-4 py-4 text-sm">
                    {item.items.map((product, idx) => (
                      <div key={idx} className="mb-1">
                        {product.name} ×{product.quantity} - PKR {product.price}
                      </div>
                    ))}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col gap-2">
                      <Batch status={getStatus(item)} />
                      <select
                        value={getStatus(item)}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="delivered">Delivered</option>
                        <option value="pending">Pending</option>
                        <option value="out for delivery">Out for Delivery</option>
                        <option value="shipped">Shipped</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="processing">Processing</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => toggleSelect(item.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {expandedId === item.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </td>
                </tr>

                {/* Expanded Details Row */}
                {expandedId === item.id && (
                  <tr className="bg-gray-50">
                    <td colSpan="8" className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Address */}
                        <div>
                          <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                            📍 Address Details
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {item.address.street}<br />
                            {item.address.city}, {item.address.province}<br />
                            ZIP: {item.address.zip}
                          </p>
                        </div>

                        {/* Timeline */}
                        <div>
                          <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                            ⏱️ Order Timeline
                          </h4>
                          <div className="space-y-3">
                            {item.timeline.map((entry, idx) => (
                              <div key={idx} className="flex gap-3">
                                <span className="font-semibold text-sm whitespace-nowrap">
                                  {entry.status}:
                                </span>
                                <span className="text-gray-600">{entry.date}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4 p-4">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-4 border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-lg">#{item.id}</p>
                    <p className="text-gray-700 font-medium">{item.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">PKR {item.total}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-4">
                <div>
                  <p className="text-xs uppercase text-gray-500 mb-1">Items</p>
                  {item.items.map((product, idx) => (
                    <div key={idx} className="text-sm">
                      {product.name} ×{product.quantity}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <Batch status={getStatus(item)} />
                  </div>
                  <select
                    value={getStatus(item)}
                    onChange={(e) => handleStatusChange(item.id, e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm"
                  >
                    <option value="delivered">Delivered</option>
                    <option value="pending">Pending</option>
                    <option value="out for delivery">Out for Delivery</option>
                    <option value="shipped">Shipped</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="processing">Processing</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <button
                  onClick={() => toggleSelect(item.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors"
                >
                  {expandedId === item.id ? 'Hide Details' : 'View Details'}
                </button>

                {expandedId === item.id && (
                  <div className="pt-4 border-t space-y-5">
                    <div>
                      <h4 className="font-bold mb-2">📍 Address</h4>
                      <p className="text-sm text-gray-600">
                        {item.address.street}<br />
                        {item.address.city}, {item.address.province}<br />
                        ZIP: {item.address.zip}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">⏱️ Timeline</h4>
                      {item.timeline.map((entry, idx) => (
                        <div key={idx} className="flex justify-between text-sm py-1">
                          <span className="font-medium">{entry.status}</span>
                          <span className="text-gray-500">{entry.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderC;
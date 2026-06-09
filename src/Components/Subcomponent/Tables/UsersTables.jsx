import React, { useState } from 'react';
import { mockUsserstable } from './Tablesmockdata';
import RoleToggle from './RoleToggle';
import StatusToggle from './StatusToggle';
import OrderHistoryModal from './Modalss/OrderHistoryModals'; // ← ADD THIS IMPORT

const UsersTables = () => {
  const [users, setUsers] = useState(mockUsserstable);
  const [search, setSearch] = useState('');
  const [selecteduser, setSelectedUser] = useState(null);
  const [seletedmodal, setSelectedmodal] = useState(false); // This controls modal visibility
  
  const handlesearch = users.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Search..."
        className="mb-4 p-2 border rounded"
      />
      
      <table className='border bg-blue-200 text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>OrdersCount</th>
            <th>Status</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {handlesearch.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>{item.ordersCount}</td>
              <td>{item.status}</td>
              <td>{new Date(item.joined).toLocaleDateString()}</td>
              <td className="flex gap-2 justify-center">
                <RoleToggle 
                  userId={item.id}
                  currentRole={item.role}
                  users={users}
                  setUsers={setUsers}
                />
                
                <StatusToggle 
                  userId={item.id}
                  currentStatus={item.status}
                  users={users}
                  setUsers={setUsers}
                />
                
                <button 
                  onClick={() => {
                    setSelectedUser(item);
                    setSelectedmodal(true);  // ← This opens the modal
                  }}
                  className="px-3 py-1 bg-blue-500 text-white rounded flex items-center gap-2 hover:bg-blue-600"
                >
                  <span>View Orders</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ ADD THIS - Modal rendering */}
      {seletedmodal && selecteduser && (
        <OrderHistoryModal 
          user={selecteduser} 
          onClose={() => setSelectedmodal(false)}  // ← This closes the modal
        />
      )}
    </>
  );
}

export default UsersTables;
import React from 'react';
import { toast } from 'react-toastify';

const StatusToggle = ({ userId, currentStatus, users, setUsers }) => {
  
  const handleClick = () => {
    // Find current user and determine new status
    const currentUser = users.find(u => u.id === userId);
    const newStatus = currentUser.status === 'active' ? 'blocked' : 'active';
    
    // Update users state
    setUsers(users.map(user =>
      user.id === userId
        ? { ...user, status: newStatus }
        : user
    ));
    
    // Show toast notification
    toast.success(
      newStatus === 'active'
        ? '✅ User has been unblocked!'
        : '🔒 User has been blocked'
    );
  };

  return (
    <button 
      onClick={handleClick}
      className={`px-3 py-1 rounded text-white flex items-center gap-2 ${
        currentStatus === 'active' 
          ? 'bg-red-500 hover:bg-red-600' 
          : 'bg-green-500 hover:bg-green-600'
      }`}
    >
      <span>{currentStatus === 'active' ? 'Block' : 'Unblock'}</span>
    </button>
  );
};

export default StatusToggle;
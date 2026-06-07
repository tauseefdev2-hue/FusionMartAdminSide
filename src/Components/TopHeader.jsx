import React from 'react';
import { FiMenu, FiBell, FiUser } from 'react-icons/fi';

const TopHeader = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex justify-between items-center sticky top-0 z-10">
      <button 
        onClick={onMenuClick}
        className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
      >
        <FiMenu size={24} />
      </button>
      
      <div className="flex-1" />
      
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <FiBell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        {/* Admin Profile */}
        <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-semibold">
            A
          </div>
          <span className="text-sm font-medium hidden sm:block">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;

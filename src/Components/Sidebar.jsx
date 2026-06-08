import React, { useState } from 'react';
import { MdDashboardCustomize, MdOutlineProductionQuantityLimits, MdAssignmentReturn } from "react-icons/md";
import { FaShoppingCart, FaUsers, FaTruck } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidebar = ({ collapsed, isMobile, onClose }) => {
  const [selected, setSelected] = useState('DashBoard');

  const lists = [
    { name: 'DashBoard', icon: <MdDashboardCustomize size={22} /> , path:'/admin/dashboard'},
    { name: 'Products', icon: <MdOutlineProductionQuantityLimits size={22} />,path:'/admin/products' },
    { name: 'Orders', icon: <FaShoppingCart size={20} />,path:'/admin/orders' },
    { name: 'Users', icon: <FaUsers size={20} /> },
    { name: 'Coupons', icon: <RiCoupon3Fill size={20} /> },
    { name: 'Delivery', icon: <FaTruck size={20} /> },
    { name: 'Returns', icon: <MdAssignmentReturn size={20} /> },
    { name: 'Settings', icon: <IoSettingsSharp size={20} /> },
  ];

  return (
    <div
      className={`${
        collapsed ? 'w-20' : 'w-64'  // ← FIXED: Just use collapsed prop
      } min-h-screen bg-gray-900 text-white shadow-lg transition-all duration-300`}
    >
      <div className="p-5 border-b border-gray-700">
        
        {!collapsed && (
          <h1 className="text-2xl font-bold text-amber-400">
            Admin Panel
          </h1>
        )}
        {collapsed && (
          <h1 className="text-2xl font-bold text-amber-400 text-center">
            AP
          </h1>
        )}
      </div>

      <ul className="flex flex-col gap-2 p-4">
        {lists.map((item) => (
          <Link to={item.path}
        //   key={item.path}
            key={item.name}
            onClick={() => {
              setSelected(item.name);
              if (isMobile && onClose) {
                onClose();
              }
            }}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300
              ${
                selected === item.name
                  ? 'bg-amber-500 text-white'
                  : 'hover:bg-gray-800 hover:text-amber-400'
              }
              ${collapsed ? 'justify-center' : ''}
            `}
          >
            {item.icon}

            
            {!collapsed && (
              <span>{item.name}</span>
            )}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
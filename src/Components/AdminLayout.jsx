import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';

const AdminLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {  // ← ADD THIS!
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      const shouldCollapse = window.innerWidth < 1200;
      
      setIsMobile(mobile);
      setSidebarCollapsed(shouldCollapse);
      
      // Close mobile menu when resizing to desktop
      if (!mobile && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]); // ← CLOSE useEffect properly

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed left-0 top-0 h-full z-20">
        <Sidebar 
          collapsed={sidebarCollapsed} 
          setCollapsed={setSidebarCollapsed}
          isMobile={false}
        />
      </div>

      {/* Mobile Sidebar Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Drawer */}
          <div className="fixed left-0 top-0 h-full z-40 md:hidden">
            <Sidebar 
              collapsed={false}
              isMobile={true}
              onClose={() => setMobileMenuOpen(false)}
            />
          </div>
        </>
      )}

      {/* Main Content Area */}
      <div className={`transition-all duration-300 ${!sidebarCollapsed ? 'md:ml-64' : 'md:ml-20'}`}>
        <TopHeader onMenuClick={() => setMobileMenuOpen(true)} />
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
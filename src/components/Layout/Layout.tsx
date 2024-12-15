import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Sidebar />
      <div className="p-4 sm:ml-64 pt-20">
        <div className="p-4 border-2 border-gray-200 rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
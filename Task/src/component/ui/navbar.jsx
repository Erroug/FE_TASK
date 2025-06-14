import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center space-x-8 bg-white px-6 py-4 shadow-sm text-gray-700 text-lg font-medium">
      <div className="hover:text-black">Dashboard</div>
      <div className="text-green-700 relative">
        Jobs
        <span className="absolute left-0 -bottom-1 w-full h-1 bg-green-400 rounded-full"></span>
      </div>
      <div className="hover:text-black">Messages</div>
      <div className="hover:text-black">Activity</div>
      <div className="hover:text-black">Schedule</div>
      <div className="hover:text-black">Manage</div>
      <div className="hover:text-black">API</div>
      <div className="ml-auto bg-green-300 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
        Coming Soon
      </div>
    </nav>
  );
};

export default Navbar;
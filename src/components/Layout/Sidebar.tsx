import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  MapPin,
  Users,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: BookOpen, label: 'Resources', path: '/resources' },
    { icon: ClipboardList, label: 'Requests', path: '/requests' },
    { icon: Users, label: 'Assignments', path: '/assignments' },
    { icon: MapPin, label: 'Locations', path: '/locations' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="fixed top-0 left-0 z-20 w-64 h-screen pt-16 bg-white border-r border-gray-200">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <item.icon className="w-6 h-6 text-gray-500 transition duration-75" />
                <span className="ml-3">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
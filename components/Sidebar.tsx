
import React from 'react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-chart-pie' },
    { id: 'cases', label: 'Case Management', icon: 'fa-folder-open' },
    { id: 'ai-assistant', label: 'Care AI Assistant', icon: 'fa-robot' },
    { id: 'wellness', label: 'Wellness Hub', icon: 'fa-leaf' },
    { id: 'settings', label: 'Settings', icon: 'fa-cog' },
  ];

  return (
    <div className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-2xl">
          <i className="fas fa-hand-holding-heart"></i>
          <span>CampusCare</span>
        </div>
        <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">Management Pro</p>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id as View)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              currentView === item.id 
                ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-500'
            }`}
          >
            <i className={`fas ${item.icon} w-5`}></i>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
          <img src="https://picsum.photos/40/40" alt="Admin" className="w-10 h-10 rounded-full border border-slate-200" />
          <div className="overflow-hidden">
            <p className="text-sm font-semibold truncate">Dr. Sarah Thompson</p>
            <p className="text-xs text-slate-500 truncate">Dean of Students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

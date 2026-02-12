
import React, { useState } from 'react';
import { View } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CaseManagement from './components/CaseManagement';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'cases':
        return <CaseManagement />;
      case 'ai-assistant':
        return <AIAssistant />;
      case 'wellness':
        return (
          <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-4">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl">
              <i className="fas fa-leaf"></i>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Student Wellness Hub</h2>
            <p className="text-slate-500 max-w-md">This section is currently under construction. It will soon feature self-care guides, community forums, and mental health resource directories.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold text-slate-800">System Settings</h1>
            <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100">
              <div className="p-6 flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-800">AI Triage Sensitivity</p>
                  <p className="text-sm text-slate-500">Determine how aggressively the AI flags cases for human intervention.</p>
                </div>
                <select className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm">
                  <option>Conservative</option>
                  <option selected>Balanced</option>
                  <option>Proactive</option>
                </select>
              </div>
              <div className="p-6 flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-800">Auto-Summary</p>
                  <p className="text-sm text-slate-500">Automatically generate case summaries when a new report is filed.</p>
                </div>
                <div className="w-12 h-6 bg-indigo-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="p-6 flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-800">Push Notifications</p>
                  <p className="text-sm text-slate-500">Alert staff immediately for high-priority incidents.</p>
                </div>
                <div className="w-12 h-6 bg-slate-200 rounded-full relative">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="ml-64 p-10">
        <div className="max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>

      {/* Persistent Help Toggle */}
      <button 
        className="fixed bottom-8 right-8 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center z-50"
        title="Emergency Help"
        onClick={() => alert("Emergency protocol activated. All department heads notified.")}
      >
        <i className="fas fa-life-ring text-xl"></i>
      </button>
    </div>
  );
};

export default App;

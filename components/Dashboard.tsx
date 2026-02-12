
import React from 'react';
import { DASHBOARD_STATS, CHART_DATA } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold text-slate-800">Campus Overview</h1>
        <p className="text-slate-500">Real-time monitoring of campus health and wellness metrics.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DASHBOARD_STATS.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-indigo-50 text-indigo-600 p-3 rounded-xl">
                <i className={`fas ${stat.icon} text-xl`}></i>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                stat.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 
                stat.trend === 'down' ? 'bg-rose-50 text-rose-600' : 'bg-slate-50 text-slate-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Card */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-800">Support Request Volume</h3>
            <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {CHART_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.count > 15 ? '#4f46e5' : '#818cf8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alerts / Activity Card */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Critical Alerts</h3>
          <div className="space-y-4 flex-1 overflow-y-auto">
            <div className="p-4 bg-rose-50 border-l-4 border-rose-500 rounded-lg">
              <p className="text-rose-800 font-semibold text-sm">High Priority: Alex Rivera</p>
              <p className="text-rose-600 text-xs mt-1">Severe anxiety symptoms reported via portal.</p>
              <span className="text-[10px] text-rose-400 mt-2 block uppercase font-bold">2 hours ago</span>
            </div>
            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
              <p className="text-amber-800 font-semibold text-sm">Follow-up: Taylor Lee</p>
              <p className="text-amber-600 text-xs mt-1">Flu symptoms recovered, check immunization records.</p>
              <span className="text-[10px] text-amber-400 mt-2 block uppercase font-bold">5 hours ago</span>
            </div>
            <div className="p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-lg">
              <p className="text-indigo-800 font-semibold text-sm">Facility Update</p>
              <p className="text-indigo-600 text-xs mt-1">West Wing Counseling Center fully booked for Friday.</p>
              <span className="text-[10px] text-indigo-400 mt-2 block uppercase font-bold">Yesterday</span>
            </div>
          </div>
          <button className="mt-6 w-full py-2 bg-slate-50 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-100 transition-colors">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

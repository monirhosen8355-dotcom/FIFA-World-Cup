import React from 'react';
import { Trophy, Activity, Target, Users, Calendar, TrendingUp } from 'lucide-react';

const SummaryCard = ({ icon: Icon, label, value, subValue, isLive }) => (
  <div className="relative group overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 hover:bg-white/[0.08] transition-all duration-500 cursor-default">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      {isLive && (
        <div className="flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full">
          <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Live</span>
        </div>
      )}
    </div>
    
    <div className="space-y-1">
      <h3 className="text-3xl font-black text-white italic tracking-tighter group-hover:text-indigo-400 transition-colors">
        {value}
      </h3>
      <p className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em]">
        {label}
      </p>
    </div>

    {subValue && (
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
        <TrendingUp className="w-3 h-3 text-emerald-500" />
        <span className="text-[10px] font-bold text-white/30 uppercase tracking-tighter">
          {subValue}
        </span>
      </div>
    )}

    {/* Subtle Glow Effect */}
    <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-indigo-500/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
  </div>
);

const DashboardSummary = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 space-y-8">
      {/* Tournament Status Header Card */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900/40 to-black border border-white/10 rounded-[2.5rem] p-8 md:p-12">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <Trophy size={180} className="text-white" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded-full mb-6">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">
                Tournament Phase
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic text-white uppercase tracking-tighter leading-none mb-4">
              Group <span className="text-indigo-500">Stage</span>
            </h1>
            <p className="text-white/40 font-medium max-w-md uppercase text-xs tracking-widest leading-relaxed">
              Matchday 4 of 12 • 16 Host Cities Across North America
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <div className="text-right">
              <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-1">Current Progress</p>
              <div className="text-4xl font-black text-white italic tracking-tighter">
                32<span className="text-white/20">/</span>104
              </div>
            </div>
            <div className="w-48 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-indigo-500 w-[30%] shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard 
          icon={Users} 
          label="Total Teams" 
          value="48" 
          subValue="Record Expansion" 
        />
        <SummaryCard 
          icon={Target} 
          label="Goals Scored" 
          value="142" 
          subValue="2.8 Goals Per Match" 
        />
        <SummaryCard 
          icon={Activity} 
          label="Live Matches" 
          value="03" 
          isLive={true}
          subValue="USA vs ENG Starting Now" 
        />
        <SummaryCard 
          icon={Calendar} 
          label="Total Matches" 
          value="104" 
          subValue="720 Total Minutes" 
        />
      </div>

      {/* Subtle Data Footer */}
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-white/10" />
        <span className="text-[9px] font-black text-white/10 uppercase tracking-[0.6em] whitespace-nowrap">
          Official FIFA Data Stream 2026
        </span>
        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-white/10" />
      </div>
    </div>
  );
};

export default DashboardSummary;
import React from 'react';
import { Activity, Trophy, Users, Zap, TrendingUp } from 'lucide-react';

const STATS_DATA = [
  {
    id: 1,
    label: "Total Matches",
    value: "104",
    subtext: "16 Host Cities",
    trend: "+24 vs 2022",
    icon: Activity,
    color: "text-indigo-500",
    glow: "bg-indigo-500/20"
  },
  {
    id: 2,
    label: "Goals Scored",
    value: "182",
    subtext: "2.4 Per Match",
    trend: "Live Tracking",
    icon: Trophy,
    color: "text-yellow-500",
    glow: "bg-yellow-500/20"
  },
  {
    id: 3,
    label: "Teams Qualified",
    value: "48",
    subtext: "Expanded Format",
    trend: "6 Confederations",
    icon: Users,
    color: "text-emerald-500",
    glow: "bg-emerald-500/20"
  },
  {
    id: 4,
    label: "Avg. Attendance",
    value: "68.4K",
    subtext: "Stadium Capacity",
    trend: "New Record",
    icon: Zap,
    color: "text-rose-500",
    glow: "bg-rose-500/20"
  }
];

const TournamentStats = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase">
            Tournament <span className="text-indigo-500">Insights</span>
          </h2>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mt-1">
            Live Statistics Dashboard
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
          <TrendingUp className="w-3 h-3 text-indigo-500" />
          <span className="text-[10px] font-black text-white uppercase tracking-widest">Performance Live</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS_DATA.map((stat) => (
          <div
            key={stat.id}
            className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 cursor-default"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl ${stat.glow} transition-transform duration-500 group-hover:scale-110`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="px-2 py-1 bg-white/5 rounded-md border border-white/5">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-tighter">
                  {stat.trend}
                </span>
              </div>
            </div>

            {/* Value Section */}
            <div className="mb-2">
              <h3 className="text-4xl font-black text-white italic tracking-tighter group-hover:text-indigo-400 transition-colors">
                {stat.value}
              </h3>
            </div>

            {/* Label Section */}
            <div>
              <p className="text-[11px] font-black text-white uppercase tracking-widest opacity-80">
                {stat.label}
              </p>
              <p className="text-[10px] font-medium text-white/30 mt-1">
                {stat.subtext}
              </p>
            </div>

            {/* Decorative Glow Element */}
            <div className={`absolute -bottom-10 -right-10 w-24 h-24 ${stat.glow} blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
          </div>
        ))}
      </div>

      {/* Data Source Info */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-white/5" />
        <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.5em] whitespace-nowrap">
          Official FIFA Real-Time Data Feed
        </p>
        <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-white/5" />
      </div>
    </div>
  );
};

export default TournamentStats;
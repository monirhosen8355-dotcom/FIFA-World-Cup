import React from 'react';
import { Trophy, ChevronRight } from 'lucide-react';

const GROUPS_DATA = [
  {
    group: "A",
    standings: [
      { team: "USA", p: 3, w: 2, d: 1, l: 0, gd: 4, pts: 7 },
      { team: "Germany", p: 3, w: 2, d: 0, l: 1, gd: 3, pts: 6 },
      { team: "Mexico", p: 3, w: 1, d: 1, l: 1, gd: 0, pts: 4 },
      { team: "Australia", p: 3, w: 0, d: 0, l: 3, gd: -7, pts: 0 },
    ]
  },
  {
    group: "B",
    standings: [
      { team: "Argentina", p: 3, w: 3, d: 0, l: 0, gd: 6, pts: 9 },
      { team: "England", p: 3, w: 1, d: 1, l: 1, gd: 1, pts: 4 },
      { team: "Poland", p: 3, w: 1, d: 1, l: 1, gd: -1, pts: 4 },
      { team: "Nigeria", p: 3, w: 0, d: 0, l: 3, gd: -6, pts: 0 },
    ]
  },
  {
    group: "C",
    standings: [
      { team: "France", p: 3, w: 2, d: 1, l: 0, gd: 5, pts: 7 },
      { team: "Brazil", p: 3, w: 2, d: 1, l: 0, gd: 4, pts: 7 },
      { team: "Japan", p: 3, w: 1, d: 0, l: 2, gd: -2, pts: 3 },
      { team: "Scotland", p: 3, w: 0, d: 0, l: 3, gd: -7, pts: 0 },
    ]
  },
  {
    group: "D",
    standings: [
      { team: "Spain", p: 3, w: 2, d: 1, l: 0, gd: 3, pts: 7 },
      { team: "Netherlands", p: 3, w: 1, d: 2, l: 0, gd: 2, pts: 5 },
      { team: "Morocco", p: 3, w: 1, d: 0, l: 2, gd: -1, pts: 3 },
      { team: "Canada", p: 3, w: 0, d: 1, l: 2, gd: -4, pts: 1 },
    ]
  },
  {
    group: "E",
    standings: [
      { team: "Portugal", p: 3, w: 2, d: 1, l: 0, gd: 4, pts: 7 },
      { team: "Belgium", p: 3, w: 2, d: 0, l: 1, gd: 2, pts: 6 },
      { team: "Uruguay", p: 3, w: 1, d: 1, l: 1, gd: 1, pts: 4 },
      { team: "South Korea", p: 3, w: 0, d: 0, l: 3, gd: -7, pts: 0 },
    ]
  },
  {
    group: "F",
    standings: [
      { team: "Italy", p: 3, w: 2, d: 0, l: 1, gd: 2, pts: 6 },
      { team: "Croatia", p: 3, w: 1, d: 2, l: 0, gd: 1, pts: 5 },
      { team: "Senegal", p: 3, w: 1, d: 1, l: 1, gd: 0, pts: 4 },
      { team: "Colombia", p: 3, w: 0, d: 1, l: 2, gd: -3, pts: 1 },
    ]
  }
];

const PointsTable = () => {
  return (
    <div className="min-h-screen bg-[#05070a] text-white p-4 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-indigo-500 w-8 h-8" />
              <span className="text-xs font-black uppercase tracking-[0.5em] text-white/40">Tournament Phase</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
              Group <span className="text-indigo-500">Standings</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 text-indigo-400 group cursor-pointer">
            <span className="text-xs font-black uppercase tracking-widest">Full Bracket</span>
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {GROUPS_DATA.map((groupObj) => (
            <div 
              key={groupObj.group}
              className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 md:p-8 hover:bg-white/[0.08] transition-all duration-500"
            >
              {/* Group Label */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-black italic tracking-tighter text-indigo-500">
                  GROUP {groupObj.group}
                </h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">
                  FIFA WC 2026
                </span>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                      <th className="px-4 py-2">Pos</th>
                      <th className="px-4 py-2">Team</th>
                      <th className="px-4 py-2 text-center">P</th>
                      <th className="px-4 py-2 text-center">W</th>
                      <th className="px-4 py-2 text-center">D</th>
                      <th className="px-4 py-2 text-center">L</th>
                      <th className="px-4 py-2 text-center">GD</th>
                      <th className="px-4 py-2 text-center text-indigo-400">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupObj.standings.map((row, idx) => (
                      <tr 
                        key={row.team} 
                        className="group/row bg-white/5 hover:bg-indigo-500/10 rounded-xl transition-colors"
                      >
                        <td className="px-4 py-4 rounded-l-xl">
                          <span className={`text-xs font-black ${idx < 2 ? 'text-indigo-400' : 'text-white/20'}`}>
                            {idx + 1}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-4 bg-white/10 rounded-sm flex-shrink-0" />
                            <span className="text-sm font-black uppercase tracking-tight group-hover/row:text-indigo-400 transition-colors">
                              {row.team}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center text-xs font-bold text-white/60">{row.p}</td>
                        <td className="px-4 py-4 text-center text-xs font-bold text-white/60">{row.w}</td>
                        <td className="px-4 py-4 text-center text-xs font-bold text-white/60">{row.d}</td>
                        <td className="px-4 py-4 text-center text-xs font-bold text-white/60">{row.l}</td>
                        <td className="px-4 py-4 text-center text-xs font-bold text-white/60">
                          {row.gd > 0 ? `+${row.gd}` : row.gd}
                        </td>
                        <td className="px-4 py-4 text-center rounded-r-xl">
                          <span className="text-sm font-black text-white group-hover/row:text-indigo-400">
                            {row.pts}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Qualification Indicator */}
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/30">Round of 32</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/30">Eliminated</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-20 py-10 border-t border-white/5 text-center">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">
            Official Live Standings Update Every 60 Seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default PointsTable;
import React from 'react';

const LIVE_DATA = [
  {
    id: 1,
    homeTeam: "Argentina",
    awayTeam: "France",
    homeScore: 2,
    awayScore: 2,
    minute: "84'",
    group: "Group A",
  },
  {
    id: 2,
    homeTeam: "USA",
    awayTeam: "England",
    homeScore: 1,
    awayScore: 0,
    minute: "42'",
    group: "Group B",
  },
  {
    id: 3,
    homeTeam: "Brazil",
    awayTeam: "Croatia",
    homeScore: 0,
    awayScore: 0,
    minute: "HT",
    group: "Group C",
  }
];

const LiveMatches = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-4">
      {LIVE_DATA.map((match) => (
        <div
          key={match.id}
          className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 hover:bg-white/10 transition-all duration-500 group cursor-pointer"
        >
          {/* Top Section: Group & Live Status */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
              {match.group}
            </span>
            <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-red-500 uppercase">
                {match.minute}
              </span>
            </div>
          </div>

          {/* Main Scoreboard Section */}
          <div className="flex items-center justify-between gap-2">
            {/* Home Team */}
            <div className="flex flex-col items-center gap-3 flex-1 text-center">
              <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center border border-white/5 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <span className="text-xl font-black text-white/80">
                  {match.homeTeam.substring(0, 3).toUpperCase()}
                </span>
              </div>
              <span className="text-sm font-black text-white truncate w-full">
                {match.homeTeam}
              </span>
            </div>

            {/* Score Center */}
            <div className="flex flex-col items-center px-4">
              <div className="flex items-center gap-3 text-4xl font-black italic tracking-tighter text-white">
                <span>{match.homeScore}</span>
                <span className="text-white/10">:</span>
                <span>{match.awayScore}</span>
              </div>
              <div className="mt-4 px-4 py-1 bg-white/5 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest">
                  Match Hub
                </span>
              </div>
            </div>

            {/* Away Team */}
            <div className="flex flex-col items-center gap-3 flex-1 text-center">
              <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center border border-white/5 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <span className="text-xl font-black text-white/80">
                  {match.awayTeam.substring(0, 3).toUpperCase()}
                </span>
              </div>
              <span className="text-sm font-black text-white truncate w-full">
                {match.awayTeam}
              </span>
            </div>
          </div>

          {/* Bottom Gradient Decorator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
        </div>
      ))}
    </div>
  );
};

export default LiveMatches;
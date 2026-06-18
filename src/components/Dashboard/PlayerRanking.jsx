import React from 'react';
import { Trophy, Star, Target, Zap, ChevronRight, Medal } from 'lucide-react';

const PLAYER_RANKINGS = [
  { rank: 1, name: "Kylian Mbappé", country: "France", goals: 8, assists: 3, rating: 8.9, color: "text-yellow-500" },
  { rank: 2, name: "Lionel Messi", country: "Argentina", goals: 5, assists: 5, rating: 8.7, color: "text-slate-300" },
  { rank: 3, name: "Jude Bellingham", country: "England", goals: 4, assists: 4, rating: 8.6, color: "text-amber-600" },
  { rank: 4, name: "Vinícius Júnior", country: "Brazil", goals: 6, assists: 2, rating: 8.4, color: "text-indigo-400" },
  { rank: 5, name: "Erling Haaland", country: "Norway", goals: 7, assists: 1, rating: 8.3, color: "text-indigo-400" },
  { rank: 6, name: "Jamal Musiala", country: "Germany", goals: 3, assists: 5, rating: 8.2, color: "text-indigo-400" },
  { rank: 7, name: "Kevin De Bruyne", country: "Belgium", goals: 2, assists: 7, rating: 8.1, color: "text-indigo-400" },
  { rank: 8, name: "Bruno Fernandes", country: "Portugal", goals: 4, assists: 4, rating: 8.0, color: "text-indigo-400" },
  { rank: 9, name: "Achraf Hakimi", country: "Morocco", goals: 1, assists: 3, rating: 7.9, color: "text-indigo-400" },
  { rank: 10, name: "Christian Pulisic", country: "USA", goals: 3, assists: 2, rating: 7.8, color: "text-indigo-400" },
];

const PlayerRanking = () => {
  return (
    <div className="min-h-screen bg-[#05070a] text-white p-4 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-indigo-500 w-8 h-8" />
              <span className="text-xs font-black uppercase tracking-[0.5em] text-white/40">Performance Awards</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
              Golden <span className="text-indigo-500">Ball</span> Race
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl hidden md:block">
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1 text-center">Tournament MVP</p>
              <p className="text-sm font-bold text-indigo-400 uppercase tracking-tighter">Live Updates Enabled</p>
            </div>
          </div>
        </div>

        {/* Desktop Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-4 text-[10px] font-black text-white/20 uppercase tracking-[0.2em] border-b border-white/5">
          <div className="col-span-1">Rank</div>
          <div className="col-span-4">Player / National Team</div>
          <div className="col-span-2 text-center flex items-center justify-center gap-1">
            <Target size={12} className="text-rose-500" /> Goals
          </div>
          <div className="col-span-2 text-center flex items-center justify-center gap-1">
            <Zap size={12} className="text-emerald-500" /> Assists
          </div>
          <div className="col-span-2 text-center flex items-center justify-center gap-1">
            <Star size={12} className="text-yellow-500" /> Rating
          </div>
          <div className="col-span-1"></div>
        </div>

        {/* Player List */}
        <div className="mt-4 space-y-3">
          {PLAYER_RANKINGS.map((player) => (
            <div 
              key={player.rank}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1.5rem] md:rounded-full p-4 md:p-2 hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all duration-500 cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-4 md:px-6">
                
                {/* Rank */}
                <div className="col-span-1 flex items-center justify-center md:justify-start">
                  <div className={`text-2xl font-black italic tracking-tighter ${player.rank <= 3 ? player.color : 'text-white/20'}`}>
                    #{player.rank.toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Player Identity */}
                <div className="col-span-4 flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                       <span className="text-xs font-black text-white/20">{player.name.substring(0, 2)}</span>
                    </div>
                    {player.rank === 1 && (
                      <div className="absolute -top-1 -right-1 bg-yellow-500 p-1 rounded-full border-2 border-[#05070a]">
                        <Medal size={10} className="text-black" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                      {player.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-2 bg-white/10 rounded-sm" />
                      <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{player.country}</p>
                    </div>
                  </div>
                </div>

                {/* Mobile View Score Summary */}
                <div className="md:hidden flex justify-around py-4 border-y border-white/5">
                  <div className="text-center">
                    <p className="text-[9px] font-black text-white/20 uppercase mb-1">Goals</p>
                    <p className="text-lg font-black text-white">{player.goals}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[9px] font-black text-white/20 uppercase mb-1">Assists</p>
                    <p className="text-lg font-black text-white">{player.assists}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[9px] font-black text-white/20 uppercase mb-1">Rating</p>
                    <p className="text-lg font-black text-indigo-400">{player.rating}</p>
                  </div>
                </div>

                {/* Desktop Score Sections */}
                <div className="hidden md:col-span-2 md:flex justify-center">
                  <span className="text-lg font-black text-white italic">{player.goals}</span>
                </div>
                <div className="hidden md:col-span-2 md:flex justify-center">
                  <span className="text-lg font-black text-white/60 italic">{player.assists}</span>
                </div>
                <div className="hidden md:col-span-2 md:flex justify-center">
                  <div className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                    <span className="text-lg font-black text-indigo-400 tracking-tighter">{player.rating}</span>
                  </div>
                </div>

                {/* View Profile */}
                <div className="hidden md:col-span-1 md:flex justify-end">
                   <ChevronRight size={18} className="text-white/10 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>

              {/* Hover Background Accent */}
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-20 py-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">
            Official Player Performance Data Feed • 2026
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Download Stats</button>
            <button className="px-6 py-2 bg-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20">Full Analytics</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerRanking;
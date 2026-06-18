import LiveMatchPage from './LiveMatchPage';
import React, { useState } from 'react';
import { Play, X, Tv, Calendar, Trophy, Activity, AlertCircle, Clock } from 'lucide-react';

const MATCH_DATA = [
  {
    id: 1,
    team1: "USA",
    team2: "England",
    time: "20:00 EST",
    score: "2 - 1",
    status: "Live",
    minute: "74'",
    group: "Group A"
  },
  {
    id: 2,
    team1: "Mexico",
    team2: "Brazil",
    time: "18:00 CST",
    score: "0 - 0",
    status: "Live",
    minute: "22'",
    group: "Group C"
  },
  {
    id: 3,
    team1: "Canada",
    team2: "France",
    time: "Tomorrow",
    score: "VS",
    status: "Upcoming",
    group: "Group B"
  },
  {
    id: 4,
    team1: "Argentina",
    team2: "Germany",
    time: "Yesterday",
    score: "3 - 2",
    status: "Finished",
    group: "Finals"
  }
];

const LiveMatchViewer = () => {
  const [selectedMatch, setSelectedMatch] = useState(null);
    const [openLivePage, setOpenLivePage] = useState(false);

  const StatusBadge = ({ status, minute }) => {
    if (status === "Live") {
        if (openLivePage) {
  return (
    <LiveMatchPage
      onBack={() => setOpenLivePage(false)}
    />
  );
}
      return (
        <div className="flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full">
          <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Live {minute}</span>
        </div>
      );
    }
    if (status === "Upcoming") {
      return (
        <div className="flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
          <Calendar className="w-3 h-3 text-indigo-400" />
          <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Upcoming</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Finished</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white p-4 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Tv className="text-indigo-500 w-8 h-8" />
              <span className="text-xs font-black uppercase tracking-[0.5em] text-white/40">Broadcasting Center</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
              Match <span className="text-indigo-500">Viewer</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right hidden md:block">
                <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Current Viewers</p>
                <p className="text-xl font-black italic">1.2M LIVE</p>
             </div>
          </div>
        </div>

        {/* Match Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {MATCH_DATA.map((match) => (
            <div 
              key={match.id}
              className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 group transition-all duration-500 hover:bg-white/[0.08]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Trophy size={120} />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <StatusBadge status={match.status} minute={match.minute} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20">{match.group}</span>
                </div>

                <div className="flex items-center justify-between mb-10 px-4">
                  <div className="flex flex-col items-center gap-4 flex-1">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                      <span className="text-2xl font-black text-white/80">{match.team1.substring(0, 3)}</span>
                    </div>
                    <span className="text-sm font-black uppercase tracking-tight">{match.team1}</span>
                  </div>

                  <div className="text-center flex flex-col items-center gap-2">
                    <span className="text-4xl font-black italic tracking-tighter text-indigo-500">
                      {match.score}
                    </span>
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{match.time}</span>
                  </div>

                  <div className="flex flex-col items-center gap-4 flex-1">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                      <span className="text-2xl font-black text-white/80">{match.team2.substring(0, 3)}</span>
                    </div>
                    <span className="text-sm font-black uppercase tracking-tight">{match.team2}</span>
                  </div>
                </div>

                <button 
                  onClick={() => {
  if (match.status === "Live") {
    setOpenLivePage(true);
  } else {
    setSelectedMatch(match);
  }
}}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl transition-all duration-300 group/btn"
                >
                  <Play size={18} className="fill-white group-hover/btn:scale-110 transition-transform" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                    {match.status === "Finished" ? "Watch Highlights" : "Watch Match"}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reusable Match Player Modal */}
        {selectedMatch && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-xl" 
              onClick={() => setSelectedMatch(null)}
            />
            
            <div className="relative w-full max-w-5xl bg-[#0a0e17] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
              
              {/* Modal Header */}
              <div className="p-6 flex items-center justify-between border-b border-white/5 bg-white/5">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${selectedMatch.status === 'Live' ? 'bg-rose-500/20' : 'bg-indigo-500/20'}`}>
                    <Activity size={18} className={selectedMatch.status === 'Live' ? 'text-rose-500' : 'text-indigo-500'} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-white">
                      {selectedMatch.team1} vs {selectedMatch.team2}
                    </h3>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-tighter">
                      FIFA World Cup 2026™ Official Stream
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedMatch(null)}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Player Placeholder Area */}
              <div className="aspect-video w-full bg-slate-950 flex flex-col items-center justify-center relative border-y border-white/5">
                {selectedMatch.status === 'Upcoming' ? (
                  <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="mx-auto w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center border border-indigo-500/20">
                      <Clock size={32} className="text-indigo-500" />
                    </div>
                    <h2 className="text-2xl font-black italic uppercase tracking-widest text-white/80">Stream Not Started</h2>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-[0.2em]">Match scheduled for {selectedMatch.time}</p>
                    <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Set Reminder</button>
                  </div>
                ) : selectedMatch.status === 'Live' ? (
                  <div className="text-center space-y-6">
                    <div className="relative inline-block">
                        <div className="w-24 h-24 bg-rose-600/20 rounded-full flex items-center justify-center animate-pulse">
                            <Play size={40} className="text-rose-500 fill-rose-500 ml-1" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-rose-600 px-3 py-1 rounded-full border-2 border-slate-950">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">Live Now</span>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Connecting to Feed...</h2>
                        <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.3em]">Bitrate: 4500kbps | 4K Ultra HD</p>
                    </div>
                  </div>
                ) : (
                   <div className="text-center space-y-4">
                    <AlertCircle size={48} className="text-white/10 mx-auto" />
                    <h2 className="text-xl font-black italic uppercase text-white/40 tracking-widest">Highlights Loading</h2>
                  </div>
                )}

                {/* Video UI Overlay Decorators */}
                <div className="absolute bottom-6 left-8 flex items-center gap-4 pointer-events-none opacity-40">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em]">Transmitting Signal</span>
                </div>
              </div>

              {/* Modal Footer Info */}
              <div className="p-8 bg-black flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-10">
                  <div className="text-center">
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-widest mb-1">Score</p>
                    <p className="text-2xl font-black italic text-indigo-400">{selectedMatch.score}</p>
                  </div>
                  <div className="h-10 w-px bg-white/10 hidden md:block" />
                  <div className="text-center md:text-left">
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-widest mb-1">Venue</p>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">MetLife Stadium, New Jersey</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                   <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all text-white">View Statistics</button>
                   <button className="px-8 py-3 bg-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 text-white">Match Hub</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-20 py-10 border-t border-white/5 text-center">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">
            Official Streaming Partner of FIFA World Cup 2026™
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveMatchViewer;
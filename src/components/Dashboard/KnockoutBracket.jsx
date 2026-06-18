import React from 'react';
import { Trophy, ChevronRight, Star } from 'lucide-react';

const BRACKET_DATA = [
  {
    round: "Round of 16",
    matches: [
      { id: 1, home: "USA", away: "Spain", hScore: 2, aScore: 1, status: "FT" },
      { id: 2, home: "England", away: "Italy", hScore: 1, aScore: 0, status: "FT" },
      { id: 3, home: "Brazil", away: "Japan", hScore: 3, aScore: 0, status: "FT" },
      { id: 4, home: "France", away: "Mexico", hScore: 2, aScore: 2, status: "P (5-4)" },
    ]
  },
  {
    round: "Quarter-Finals",
    matches: [
      { id: 5, home: "USA", away: "England", hScore: 1, aScore: 2, status: "FT" },
      { id: 6, home: "Brazil", away: "France", hScore: 1, aScore: 0, status: "FT" },
    ]
  },
  {
    round: "Semi-Finals",
    matches: [
      { id: 7, home: "England", away: "Brazil", hScore: 1, aScore: 2, status: "FT" },
    ]
  },
  {
    round: "Final",
    matches: [
      { id: 8, home: "Brazil", away: "Argentina", hScore: null, aScore: null, status: "July 19" },
    ]
  }
];

const MatchCard = ({ match, isFinal }) => (
  <div className={`relative flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 min-w-[200px] hover:bg-white/10 transition-all duration-300 group cursor-pointer ${isFinal ? 'ring-2 ring-indigo-500 shadow-2xl shadow-indigo-500/20' : ''}`}>
    {isFinal && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
        <Trophy size={10} className="text-white" />
        <span className="text-[9px] font-black uppercase text-white tracking-widest">World Cup Final</span>
      </div>
    )}
    
    <div className="space-y-3">
      {/* Home Team */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 bg-white/10 rounded-sm" />
          <span className={`text-xs font-black uppercase tracking-tight ${match.hScore > match.aScore ? 'text-white' : 'text-white/40'}`}>
            {match.home}
          </span>
        </div>
        <span className="text-xs font-black text-indigo-400">{match.hScore}</span>
      </div>

      {/* Away Team */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 bg-white/10 rounded-sm" />
          <span className={`text-xs font-black uppercase tracking-tight ${match.aScore > match.hScore ? 'text-white' : 'text-white/40'}`}>
            {match.away}
          </span>
        </div>
        <span className="text-xs font-black text-indigo-400">{match.aScore}</span>
      </div>
    </div>

    <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
      <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{match.status}</span>
      <ChevronRight size={12} className="text-white/10 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
    </div>
  </div>
);

const KnockoutBracket = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-10 font-sans">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Star className="text-indigo-500 fill-indigo-500 w-5 h-5" />
          <span className="text-xs font-black uppercase tracking-[0.5em] text-white/40">Road to New Jersey</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none text-white">
          Knockout <span className="text-indigo-500">Stage</span>
        </h1>
      </div>

      {/* Bracket Container */}
      <div className="overflow-x-auto pb-10 no-scrollbar">
        <div className="flex items-start gap-12 min-w-[1000px] justify-between">
          {BRACKET_DATA.map((round, roundIdx) => (
            <div key={round.round} className="flex flex-col gap-8 flex-1">
              {/* Round Header */}
              <div className="mb-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500/60 border-b border-indigo-500/20 pb-2">
                  {round.round}
                </h3>
              </div>

              {/* Match list with vertical spacing that grows per round */}
              <div className="flex flex-col h-full justify-around gap-12">
                {round.matches.map((match) => (
                  <div key={match.id} className="relative">
                    <MatchCard 
                      match={match} 
                      isFinal={round.round === "Final"} 
                    />
                    
                    {/* Connection Lines (Visual logic for bracket) */}
                    {roundIdx < BRACKET_DATA.length - 1 && (
                      <div className="absolute top-1/2 -right-12 w-12 h-px bg-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-10 p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Trophy size={18} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-black text-white uppercase tracking-widest">Grand Final</p>
            <p className="text-[10px] text-white/40 font-medium uppercase tracking-tighter">MetLife Stadium • July 19, 2026</p>
          </div>
        </div>
        <button className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-300 tracking-[0.2em]">
          Full Tournament Bracket
        </button>
      </div>
    </div>
  );
};

export default KnockoutBracket;
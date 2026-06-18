import React from 'react';
import { Trophy, Star, Target, Zap, ChevronRight, TrendingUp } from 'lucide-react';

const RANKING_DATA = {
  scorers: [
    { id: 1, name: "Kylian Mbappé", country: "France", value: "8", rank: 1 },
    { id: 2, name: "Lionel Messi", country: "Argentina", value: "6", rank: 2 },
    { id: 3, name: "Vinícius Jr", country: "Brazil", value: "5", rank: 3 },
    { id: 4, name: "Harry Kane", country: "England", value: "4", rank: 4 },
  ],
  assists: [
    { id: 1, name: "Bruno Fernandes", country: "Portugal", value: "5", rank: 1 },
    { id: 2, name: "Kevin De Bruyne", country: "Belgium", value: "4", rank: 2 },
    { id: 3, name: "Jamal Musiala", country: "Germany", value: "4", rank: 3 },
    { id: 4, name: "Antoine Griezmann", country: "France", value: "3", rank: 4 },
  ],
  ratings: [
    { id: 1, name: "Jude Bellingham", country: "England", value: "8.42", rank: 1 },
    { id: 2, name: "Rodri", country: "Spain", value: "8.15", rank: 2 },
    { id: 3, name: "Achraf Hakimi", country: "Morocco", value: "7.98", rank: 3 },
    { id: 4, name: "Federico Valverde", country: "Uruguay", value: "7.85", rank: 4 },
  ]
};

const RankingCard = ({ player, unit, colorClass }) => (
  <div className="group relative flex items-center justify-between p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300">
    <div className="flex items-center gap-4">
      <div className={`flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-xs font-black italic ${player.rank === 1 ? 'text-indigo-400 border border-indigo-400/30' : 'text-white/20'}`}>
        {player.rank}
      </div>
      <div>
        <h4 className="text-sm font-black text-white uppercase tracking-tight group-hover:text-indigo-400 transition-colors">
          {player.name}
        </h4>
        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest flex items-center gap-1">
          <span className="w-3 h-2 bg-white/10 rounded-sm" /> {player.country}
        </p>
      </div>
    </div>
    <div className="text-right">
      <span className={`text-lg font-black italic tracking-tighter ${colorClass}`}>
        {player.value}
      </span>
      <p className="text-[8px] font-black text-white/20 uppercase tracking-tighter leading-none">
        {unit}
      </p>
    </div>
  </div>
);

const RankingSection = ({ title, icon: Icon, data, unit, colorClass }) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-xl bg-white/5 border border-white/10 ${colorClass}`}>
          <Icon size={18} />
        </div>
        <h3 className="text-base font-black italic tracking-tight text-white uppercase">
          {title}
        </h3>
      </div>
      <button className="text-[10px] font-black text-white/20 hover:text-indigo-400 uppercase tracking-widest transition-colors">
        Full List
      </button>
    </div>
    <div className="flex flex-col gap-3">
      {data.map(player => (
        <RankingCard key={player.id} player={player} unit={unit} colorClass={colorClass} />
      ))}
    </div>
  </div>
);

const PlayerRankings = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-10 bg-[#05070a]">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="text-indigo-500 w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Performance Metrics</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-none text-white">
            Player <span className="text-indigo-500">Rankings</span>
          </h1>
        </div>
        
        <div className="flex gap-2">
          {['Tournament', 'Qualifiers', 'Historical'].map(tab => (
            <button key={tab} className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'Tournament' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'bg-white/5 text-white/40 border border-white/5 hover:bg-white/10'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Rankings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <RankingSection 
          title="Top Scorers" 
          icon={Target} 
          data={RANKING_DATA.scorers} 
          unit="Goals"
          colorClass="text-rose-500"
        />
        <RankingSection 
          title="Top Assists" 
          icon={Zap} 
          data={RANKING_DATA.assists} 
          unit="Assists"
          colorClass="text-emerald-400"
        />
        <RankingSection 
          title="Best Rated" 
          icon={Star} 
          data={RANKING_DATA.ratings} 
          unit="Rating"
          colorClass="text-yellow-500"
        />
      </div>

      {/* Footer Insight */}
      <div className="mt-16 relative overflow-hidden bg-white/5 border border-white/10 rounded-[2.5rem] p-8 group">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
          <Trophy size={120} />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center border border-indigo-500/30">
              <Star className="text-indigo-400 fill-indigo-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-white italic uppercase tracking-tight">Golden Boot Race</h3>
              <p className="text-sm text-white/40 font-medium max-w-md">
                Kylian Mbappé currently leads the tournament with 8 goals, followed closely by Lionel Messi.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase text-xs rounded-2xl hover:bg-indigo-500 hover:text-white transition-all duration-300 tracking-widest shadow-xl">
            Compare Players <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="mt-10 py-6 border-t border-white/5 text-center">
        <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.6em]">
          Data Powered by FIFA Real-Time Intelligence
        </p>
      </div>
    </div>
  );
};

export default PlayerRankings;
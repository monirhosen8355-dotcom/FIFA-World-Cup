import { TRANSFER_TRENDS, TOP_SCORERS } from '../../data/dummyData';
import { GlassCard } from '../UI/GlassCard';
import { TrendingUp } from 'lucide-react';

export const RightSidebar = () => {
  return (
    <aside className="w-80 h-screen hidden xl:flex flex-col p-6 sticky top-0 gap-6 overflow-y-auto custom-scrollbar">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <TrendingUp size={20} className="text-brand-accent" /> Trending Players
      </h3>
      
      {TRANSFER_TRENDS.map((player, i) => (
        <GlassCard key={i} className="p-4 flex items-center justify-between">
          <div>
            <p className="font-bold">{player.name}</p>
            <p className="text-xs text-white/40">{player.status}</p>
          </div>
          <span className="text-brand-gold font-bold">{player.value}</span>
        </GlassCard>
      ))}

      <h3 className="text-lg font-bold mt-4">Top Scorers</h3>
      <GlassCard className="p-0 overflow-hidden">
        {TOP_SCORERS.map((player, i) => (
          <div key={i} className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-white/20 font-black">{i + 1}</span>
              <div>
                <p className="text-sm font-bold">{player.name}</p>
                <p className="text-[10px] text-white/40 uppercase">{player.team}</p>
              </div>
            </div>
            <span className="bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-lg text-sm font-bold">
              {player.goals}
            </span>
          </div>
        ))}
      </GlassCard>
    </aside>
  );
};
import React from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Activity, 
  MessageSquare, 
  TrendingUp, 
  Shield, 
  AlertCircle,
  Zap,
  Target
} from 'lucide-react';

const LiveMatchPage = ({ onBack }) => {
  // Dummy Data for Live Match State
  const matchData = {
    teamHome: "USA",
    teamAway: "England",
    scoreHome: 2,
    scoreAway: 1,
    time: "74'",
    possession: { home: 42, away: 58 },
    stats: {
      shotsOnTarget: { home: 6, away: 4 },
      corners: { home: 3, away: 7 },
      yellowCards: { home: 2, away: 1 }
    },
    events: [
      { id: 1, time: "12'", type: "GOAL", player: "C. Pulisic", detail: "USA Lead" },
      { id: 2, time: "34'", type: "YELLOW", player: "H. Maguire", detail: "Foul" },
      { id: 3, time: "45+2'", type: "GOAL", player: "H. Kane", detail: "Penalty" },
      { id: 4, time: "68'", type: "GOAL", player: "F. Balogun", detail: "USA Lead" },
    ],
    commentary: [
      { id: 1, time: "74'", text: "England pushing forward now. Rice looks for Saka on the wing." },
      { id: 2, time: "72'", text: "CHANCE! Pulisic nearly gets a hat-trick but Pickford saves brilliantly." },
      { id: 3, time: "70'", text: "Substitution for USA: McKennie off, Musah on." },
      { id: 4, time: "68'", text: "GOAL!!! Balogun fires it into the top corner from outside the box!" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans selection:bg-indigo-500/30">
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#05070a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Exit Match Hub</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full">
              <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Live</span>
            </div>
            <span className="text-xs font-black uppercase tracking-tighter text-white/40">Broadcasting HD</span>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        {/* Scoreboard Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900/20 to-black border border-white/10 rounded-[3rem] p-8 md:p-12 mb-8">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col items-center gap-4 flex-1">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-black text-white/20">{matchData.teamHome.substring(0, 3)}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">{matchData.teamHome}</h2>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="text-6xl md:text-8xl font-black italic tracking-tighter flex items-center gap-4">
                <span>{matchData.scoreHome}</span>
                <span className="text-indigo-500">:</span>
                <span>{matchData.scoreAway}</span>
              </div>
              <div className="px-4 py-1 bg-white/5 border border-white/10 rounded-full flex items-center gap-2">
                <Clock size={14} className="text-indigo-400" />
                <span className="text-sm font-black text-indigo-400">{matchData.time}</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 flex-1">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-black text-white/20">{matchData.teamAway.substring(0, 3)}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">{matchData.teamAway}</h2>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Ball Possession</span>
              <TrendingUp size={16} className="text-indigo-400" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-black italic">{matchData.possession.home}%</span>
              <span className="text-2xl font-black italic">{matchData.possession.away}%</span>
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden flex gap-1">
              <div className="bg-indigo-500 transition-all duration-1000" style={{ width: `${matchData.possession.home}%` }} />
              <div className="bg-white/20 flex-grow transition-all duration-1000" />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4">
              <Target size={16} className="text-rose-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Shots on Target</span>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-4xl font-black italic">{matchData.stats.shotsOnTarget.home}</span>
              <span className="text-4xl font-black italic text-white/10">/</span>
              <span className="text-4xl font-black italic">{matchData.stats.shotsOnTarget.away}</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-white/20 block mb-1 text-center">Corners</span>
              <div className="flex items-center justify-center gap-3">
                <span className="font-black text-xl">{matchData.stats.corners.home}</span>
                <div className="h-4 w-px bg-white/10" />
                <span className="font-black text-xl">{matchData.stats.corners.away}</span>
              </div>
            </div>
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-white/20 block mb-1 text-center">Cards</span>
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-3 bg-yellow-500 rounded-sm" />
                  <span className="font-black text-xl">{matchData.stats.yellowCards.home}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-3 bg-yellow-500 rounded-sm" />
                  <span className="font-black text-xl">{matchData.stats.yellowCards.away}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs (Responsive) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline Section */}
          <div className="lg:col-span-1 bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="text-indigo-400" size={18} />
              <h3 className="text-sm font-black uppercase tracking-widest italic">Match Timeline</h3>
            </div>
            <div className="space-y-8 relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10" />
              {matchData.events.map(event => (
                <div key={event.id} className="relative flex items-start gap-6 group">
                  <div className={`z-10 w-[24px] h-[24px] rounded-full flex items-center justify-center border-2 border-[#05070a] ${
                    event.type === 'GOAL' ? 'bg-indigo-500' : 'bg-yellow-500'
                  }`}>
                    {event.type === 'GOAL' ? <Shield size={10} /> : <AlertCircle size={10} className="text-black" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-indigo-400 block mb-1">{event.time}</span>
                    <h4 className="text-sm font-black uppercase tracking-tight">{event.player}</h4>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{event.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commentary Feed */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-indigo-400" size={18} />
              <h3 className="text-sm font-black uppercase tracking-widest italic">Live Commentary</h3>
            </div>
            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
              {matchData.commentary.map(comment => (
                <div key={comment.id} className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded-md uppercase tracking-widest">
                      {comment.time}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-white/80 leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              ))}
              <div className="text-center pt-4">
                <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.4em]">End of Feed</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Styled Scrollbar for Commentary */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.3);
          border-radius: 10px;
        }
      `}} />
    </div>
  );
};

export default LiveMatchPage;
import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  ChevronRight, 
  Trophy, 
  Play, 
  Activity, 
  ArrowLeft,
  Info,
  Shield
} from 'lucide-react';

const MatchDetailsPage = ({ match, onBack, onWatchLive }) => {
  // Sample Data fallback if no match prop is provided
  const data = {
  team1: match?.team1 || "Argentina",
  team2: match?.team2 || "USA",
  date: match?.date || "July 12, 2026",
  time: match?.time || "20:00 EST",
  stadium: match?.stadium || "MetLife Stadium",
  referee: "Szymon Marciniak",
  preview: "World Cup knockout match preview.",
  form1: ["W", "W", "D", "W", "W"],
  form2: ["W", "L", "W", "D", "W"],
  h2h: {
    team1Wins: 4,
    team2Wins: 1,
    draws: 2,
    lastMeeting: "Argentina 2-1 USA"
  }
};

  const FormBadge = ({ result }) => {
    const colors = {
      W: "bg-emerald-500 text-white",
      L: "bg-rose-500 text-white",
      D: "bg-amber-500 text-white"
    };
    return (
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow-lg ${colors[result]}`}>
        {result}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans selection:bg-indigo-500/30">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-6">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Back to Hub</span>
          </button>
          <div className="px-6 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">Matchday • Semi-Finals</span>
          </div>
        </div>

        {/* Hero Scoreboard Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900/40 via-slate-900/40 to-black border border-white/10 rounded-[3rem] p-8 md:p-16 mb-8 shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
            <Trophy size={300} />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            {/* Team 1 */}
            <div className="flex flex-col items-center gap-6 flex-1">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-white/5 rounded-[2.5rem] flex items-center justify-center border border-white/10 shadow-2xl backdrop-blur-md">
                <span className="text-5xl font-black text-white/20 uppercase">{data.team1.substring(0, 3)}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-center">
                {data.team1}
              </h1>
            </div>

            {/* VS Center */}
            <div className="flex flex-col items-center gap-4">
              <div className="text-6xl md:text-8xl font-black italic text-indigo-500/20 tracking-tighter">VS</div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 text-indigo-400 mb-2">
                  <Clock size={16} />
                  <span className="text-xl font-black italic tracking-tight">{data.time}</span>
                </div>
                <div className="text-[11px] font-bold text-white/40 uppercase tracking-[0.4em]">{data.date}</div>
              </div>
            </div>

            {/* Team 2 */}
            <div className="flex flex-col items-center gap-6 flex-1">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-white/5 rounded-[2.5rem] flex items-center justify-center border border-white/10 shadow-2xl backdrop-blur-md">
                <span className="text-5xl font-black text-white/20 uppercase">{data.team2.substring(0, 3)}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-center">
                {data.team2}
              </h1>
            </div>
          </div>

          {/* Quick Match Info Footer */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-10">
            <div className="flex items-center gap-3 text-white/60">
              <MapPin size={18} className="text-indigo-500" />
              <span className="text-xs font-bold uppercase tracking-wider">{data.stadium}</span>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <Shield size={18} className="text-indigo-500" />
              <span className="text-xs font-bold uppercase tracking-wider">Ref: {data.referee}</span>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mb-12">
          <button 
            onClick={onWatchLive}
            className="w-full flex items-center justify-center gap-4 py-6 bg-indigo-600 hover:bg-indigo-500 rounded-[2rem] transition-all duration-300 shadow-xl shadow-indigo-500/20 group"
          >
            <Play size={24} className="fill-white group-hover:scale-110 transition-transform" />
            <span className="text-lg font-black uppercase tracking-[0.2em]">Watch Live Match</span>
          </button>
        </div>

        {/* Detailed Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Match Preview */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <Info className="text-indigo-500" size={20} />
                <h3 className="text-xl font-black uppercase tracking-tight italic">Match Preview</h3>
              </div>
              <p className="text-white/70 leading-relaxed text-lg font-medium">
                {data.preview}
              </p>
              <div className="mt-8 flex gap-4">
                <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-[10px] font-black uppercase tracking-widest text-white/40">Tactical Preview</div>
                <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-[10px] font-black uppercase tracking-widest text-white/40">Injury Report</div>
              </div>
            </div>

            {/* Head to Head Stats */}
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-8">
                <Activity className="text-indigo-500" size={20} />
                <h3 className="text-xl font-black uppercase tracking-tight italic">Head To Head</h3>
              </div>
              
              <div className="space-y-10">
                <div className="flex items-center justify-between px-2">
                  <div className="text-center">
                    <div className="text-4xl font-black italic">{data.h2h.team1Wins}</div>
                    <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{data.team1} Wins</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black italic text-white/20">{data.h2h.draws}</div>
                    <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">Draws</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black italic">{data.h2h.team2Wins}</div>
                    <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">{data.team2} Wins</div>
                  </div>
                </div>

                <div className="relative h-4 bg-white/5 rounded-full overflow-hidden flex">
                  <div className="bg-indigo-500 h-full transition-all duration-1000" style={{ width: '60%' }} />
                  <div className="bg-white/10 h-full transition-all duration-1000" style={{ width: '20%' }} />
                  <div className="bg-purple-600 h-full transition-all duration-1000" style={{ width: '20%' }} />
                </div>
                <p className="text-center text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Last Result: {data.h2h.lastMeeting}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form & Trends */}
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-10">
                <Shield className="text-indigo-500" size={20} />
                <h3 className="text-xl font-black uppercase tracking-tight italic">Team Form</h3>
              </div>

              <div className="space-y-12">
                <div>
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-4">{data.team1} Recent Results</p>
                  <div className="flex gap-3">
                    {data.form1.map((res, i) => <FormBadge key={i} result={res} />)}
                  </div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-4">{data.team2} Recent Results</p>
                  <div className="flex gap-3">
                    {data.form2.map((res, i) => <FormBadge key={i} result={res} />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Ticket/Promo Card */}
            <div className="relative overflow-hidden bg-indigo-600 rounded-[2.5rem] p-8 group cursor-pointer">
              <div className="relative z-10">
                <h4 className="text-2xl font-black italic uppercase leading-tight mb-2">Hospitality Packages</h4>
                <p className="text-white/80 text-sm mb-6 font-medium">Experience the Semi-Final in ultimate luxury. Limited seats remaining.</p>
                <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest">
                  Explore <ChevronRight size={16} />
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 p-8 opacity-20 group-hover:scale-110 transition-transform duration-500">
                <Shield size={160} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 py-10 border-t border-white/5 text-center">
          <p className="text-[10px] font-black text-white/10 uppercase tracking-[0.5em]">
            FIFA Official Match Hub • Powered by FIFA Intelligence
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchDetailsPage;
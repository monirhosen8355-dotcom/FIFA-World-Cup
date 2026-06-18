import React from 'react';

const UPCOMING_MATCHES = [
  {
    id: 1,
    homeTeam: "Canada",
    awayTeam: "France",
    date: "JUN 20, 2026",
    time: "18:00",
    venue: "BC Place, Vancouver",
    group: "Group B"
  },
  {
    id: 2,
    homeTeam: "Argentina",
    awayTeam: "Germany",
    date: "JUN 21, 2026",
    time: "21:00",
    venue: "MetLife Stadium, NJ",
    group: "Group A"
  },
  {
    id: 3,
    homeTeam: "Japan",
    awayTeam: "Spain",
    date: "JUN 21, 2026",
    time: "15:00",
    venue: "SoFi Stadium, LA",
    group: "Group E"
  },
  {
    id: 4,
    homeTeam: "Morocco",
    awayTeam: "Portugal",
    date: "JUN 22, 2026",
    time: "12:00",
    venue: "Azteca Stadium, Mexico City",
    group: "Group F"
  }
];

const UpcomingMatches = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black italic text-white tracking-tighter">
          UPCOMING FIXTURES
        </h2>
        <span className="text-[10px] font-bold text-indigo-400 border border-indigo-400/30 px-3 py-1 rounded-full uppercase tracking-widest">
          Matchday 1
        </span>
      </div>

      <div className="grid gap-4">
        {UPCOMING_MATCHES.map((match) => (
          <div
            key={match.id}
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Date & Time Section */}
              <div className="flex flex-col items-center md:items-start min-w-[100px]">
                <span className="text-indigo-400 font-black text-sm tracking-tighter leading-none">
                  {match.time}
                </span>
                <span className="text-white/40 text-[10px] font-bold mt-1 uppercase tracking-widest">
                  {match.date}
                </span>
              </div>

              {/* Versus Section */}
              <div className="flex items-center justify-center flex-1 w-full px-4">
                {/* Home */}
                <div className="flex items-center gap-4 flex-1 justify-end">
                  <span className="text-sm font-black text-white uppercase text-right truncate max-w-[120px]">
                    {match.homeTeam}
                  </span>
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <span className="text-[10px] font-bold text-white/50">{match.homeTeam[0]}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="px-6 text-white/10 font-black italic text-lg">VS</div>

                {/* Away */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <span className="text-[10px] font-bold text-white/50">{match.awayTeam[0]}</span>
                  </div>
                  <span className="text-sm font-black text-white uppercase truncate max-w-[120px]">
                    {match.awayTeam}
                  </span>
                </div>
              </div>

              {/* Venue & Group Info */}
              <div className="hidden lg:flex flex-col items-end min-w-[180px]">
                <span className="text-[10px] font-bold text-white/60 truncate max-w-full uppercase tracking-tighter">
                  {match.venue}
                </span>
                <span className="text-[9px] font-bold text-white/20 mt-1 uppercase tracking-widest">
                  {match.group}
                </span>
              </div>

              {/* CTA Button (Hidden on Mobile) */}
              <div className="mt-4 md:mt-0">
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-black uppercase rounded-lg transition-colors tracking-widest">
                  Tickets
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-4 bg-white/5 border border-white/5 rounded-2xl text-[11px] font-black text-white/40 uppercase tracking-[0.3em] hover:text-white hover:bg-white/10 transition-all">
        Explore Full Schedule
      </button>
    </div>
  );
};

export default UpcomingMatches;
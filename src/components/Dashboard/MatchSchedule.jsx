import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Trophy } from 'lucide-react';
import MatchDetailsPage from './MatchDetailsPage';

const MATCHES_DATA = [
  {
    id: 1,
    homeTeam: "USA",
    awayTeam: "England",
    date: "June 12, 2026",
    time: "20:00 EST",
    stadium: "SoFi Stadium, Los Angeles",
    group: "Group A"
  },
  {
    id: 2,
    homeTeam: "Mexico",
    awayTeam: "Brazil",
    date: "June 13, 2026",
    time: "18:00 CST",
    stadium: "Estadio Azteca, Mexico City",
    group: "Group C"
  },
  {
    id: 3,
    homeTeam: "Canada",
    awayTeam: "France",
    date: "June 14, 2026",
    time: "15:00 PST",
    stadium: "BC Place, Vancouver",
    group: "Group B"
  },
  {
    id: 4,
    homeTeam: "Argentina",
    awayTeam: "Germany",
    date: "June 15, 2026",
    time: "21:00 EST",
    stadium: "MetLife Stadium, New Jersey",
    group: "Group D"
  },
  {
    id: 5,
    homeTeam: "Japan",
    awayTeam: "Spain",
    date: "June 16, 2026",
    time: "19:00 CST",
    stadium: "AT&T Stadium, Dallas",
    group: "Group E"
  }
];

const MatchSchedule = () => {
    const [selectedMatch, setSelectedMatch] = useState(null);

if (selectedMatch) {
  return (
    <MatchDetailsPage
      match={{
        team1: selectedMatch.homeTeam,
        team2: selectedMatch.awayTeam,
        date: selectedMatch.date,
        time: selectedMatch.time,
        stadium: selectedMatch.stadium,
      }}
      onBack={() => setSelectedMatch(null)}
      onWatchLive={() => alert('Live Stream Coming Soon')}
    />
  );
}
    console.log("MatchSchedule Loaded");
  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-4xl font-black italic text-white tracking-tighter uppercase">
            Match <span className="text-indigo-500">Schedule</span>
          </h2>
          <p className="text-white/40 text-sm font-medium mt-1">FIFA World Cup 2026 Official Fixtures</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold text-white transition-all">
            Filter by Date
          </button>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-xs font-bold text-white transition-all">
            Download PDF
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {MATCHES_DATA.map((match) => (
          <div
            key={match.id}
            className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 group"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
              {/* <Trophy size={120} /> */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left: Schedule Info */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-center gap-2 border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pb-0">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-bold text-white">{match.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-bold text-white/70">{match.time}</span>
                </div>
              </div>

              {/* Center: Teams Section */}
              <div className="lg:col-span-6 flex items-center justify-between px-4">
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-xl group-hover:scale-105 transition-transform">
                    <span className="text-xl font-black text-white">{match.homeTeam.substring(0, 3)}</span>
                  </div>
                  <span className="text-sm md:text-base font-black text-white uppercase tracking-tight">
                    {match.homeTeam}
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-2xl font-black text-white/20 italic">VS</span>
                  <div className="mt-2 px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{match.group}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-xl group-hover:scale-105 transition-transform">
                    <span className="text-xl font-black text-white">{match.awayTeam.substring(0, 3)}</span>
                  </div>
                  <span className="text-sm md:text-base font-black text-white uppercase tracking-tight">
                    {match.awayTeam}
                  </span>
                </div>
              </div>

              {/* Right: Venue Info */}
              <div className="lg:col-span-3 flex flex-col items-center lg:items-end gap-2">
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold text-center lg:text-right">{match.stadium}</span>
                </div>
                <button
  onClick={() => setSelectedMatch(match)}
  className="mt-4 w-full lg:w-auto px-6 py-2 bg-white text-black text-xs font-black uppercase rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-300"
>
  Match Details
</button>
              </div>

            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center py-10">
        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">
          End of Scheduled Fixtures
        </p>
      </div>
    </div>
  );
};

export default MatchSchedule;
import React, { useState } from 'react';
import { Search, Filter, Trophy, User, Hash } from 'lucide-react';
import TeamProfileModal from './TeamProfileModal';

const TEAMS_DATA = [
  { 
    id: 1, name: "Argentina", rank: 1, group: "A", coach: "Lionel Scaloni", 
    captain: "Lionel Messi", stadium: "Estadio Monumental", 
    players: ["L. Messi", "E. Martínez", "L. Martínez", "R. De Paul", "A. Di María"] 
  },
  { 
    id: 2, name: "France", rank: 2, group: "D", coach: "Didier Deschamps", 
    captain: "Kylian Mbappé", stadium: "Stade de France", 
    players: ["K. Mbappé", "A. Griezmann", "W. Saliba", "O. Dembélé", "T. Hernandez"] 
  },
  { 
    id: 3, name: "England", rank: 4, group: "B", coach: "Gareth Southgate", 
    captain: "Harry Kane", stadium: "Wembley Stadium", 
    players: ["H. Kane", "J. Bellingham", "P. Foden", "D. Rice", "B. Saka"] 
  },
  { 
    id: 4, name: "Brazil", rank: 5, group: "C", coach: "Dorival Júnior", 
    captain: "Danilo", stadium: "Maracanã", 
    players: ["Vinícius Jr", "Rodrygo", "Alisson", "Bruno G.", "Endrick"] 
  },
  { 
    id: 5, name: "Portugal", rank: 6, group: "F", coach: "Roberto Martínez", 
    captain: "Cristiano Ronaldo", stadium: "Estádio da Luz", 
    players: ["C. Ronaldo", "B. Fernandes", "R. Leão", "Bernardo Silva", "R. Dias"] 
  },
  { 
    id: 6, name: "Spain", rank: 8, group: "E", coach: "Luis de la Fuente", 
    captain: "Álvaro Morata", stadium: "Santiago Bernabéu", 
    players: ["Lamine Yamal", "Rodri", "Pedri", "Nico Williams", "Dani Olmo"] 
  },
  { 
    id: 7, name: "USA", rank: 11, group: "A", coach: "Gregg Berhalter", 
    captain: "Christian Pulisic", stadium: "Mercedes-Benz Stadium", 
    players: ["C. Pulisic", "W. McKennie", "G. Reyna", "T. Adams", "F. Balogun"] 
  },
  { 
    id: 8, name: "Morocco", rank: 13, group: "F", coach: "Walid Regragui", 
    captain: "Romain Saïss", stadium: "Stade Adrar", 
    players: ["A. Hakimi", "H. Ziyech", "B. Díaz", "Y. En-Nesyri", "S. Amrabat"] 
  },
  { 
    id: 9, name: "Mexico", rank: 14, group: "C", coach: "Jaime Lozano", 
    captain: "Edson Álvarez", stadium: "Estadio Azteca", 
    players: ["S. Giménez", "E. Álvarez", "L. Chávez", "H. Lozano", "C. Montes"] 
  },
  { 
    id: 10, name: "Germany", rank: 16, group: "A", coach: "Julian Nagelsmann", 
    captain: "İlkay Gündoğan", stadium: "Allianz Arena", 
    players: ["F. Wirtz", "J. Musiala", "K. Havertz", "L. Sané", "A. Rüdiger"] 
  },
  { 
    id: 11, name: "Japan", rank: 18, group: "E", coach: "Hajime Moriyasu", 
    captain: "Wataru Endo", stadium: "Saitama Stadium 2002", 
    players: ["K. Mitoma", "T. Kubo", "W. Endo", "R. Doan", "T. Minamino"] 
  },
  { 
    id: 12, name: "Canada", rank: 48, group: "B", coach: "Jesse Marsch", 
    captain: "Alphonso Davies", stadium: "BMO Field", 
    players: ["A. Davies", "J. David", "C. Larin", "I. Koné", "T. Buchanan"] 
  },
];

const TeamDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeGroup, setActiveGroup] = useState("All");
  const [selectedTeam, setSelectedTeam] = useState(null);

  const groups = ["All", "A", "B", "C", "D", "E", "F"];

  const filteredTeams = TEAMS_DATA.filter((team) => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup = activeGroup === "All" || team.group === activeGroup;
    return matchesSearch && matchesGroup;
  });

  return (
    <div className="min-h-screen bg-[#05070a] text-white p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-2">
              Team <span className="text-indigo-500">Directory</span>
            </h1>
            <p className="text-white/40 font-medium">Browse the 2026 World Cup Contenders</p>
          </div>

          {/* Search Box */}
          <div className="relative group w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-indigo-500 transition-colors" />
            <input
              type="text"
              placeholder="Search by team name..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/10 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filters Section */}
        <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex items-center gap-2 text-white/40 mr-2">
            <Filter size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Groups:</span>
          </div>
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                activeGroup === group
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-white/5 text-white/40 hover:bg-white/10 border border-white/5"
              }`}
            >
              {group === "All" ? "View All" : `Group ${group}`}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        {filteredTeams.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTeams.map((team) => (
              <div
                key={team.id}
                onClick={() => setSelectedTeam(team)}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer"
              >
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Trophy size={100} />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                      <span className="text-2xl font-black text-white/80">
                        {team.name.substring(0, 3).toUpperCase()}
                      </span>
                    </div>
                    <div className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                      <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                        Group {team.group}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-6 tracking-tight uppercase group-hover:text-indigo-400 transition-colors">
                    {team.name}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-white/40">
                        <Hash size={14} className="text-indigo-500" />
                        <span className="font-bold uppercase text-[10px] tracking-widest">FIFA Rank</span>
                      </div>
                      <span className="font-black">#{team.rank}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-white/40">
                        <User size={14} className="text-indigo-500" />
                        <span className="font-bold uppercase text-[10px] tracking-widest">Coach</span>
                      </div>
                      <span className="font-bold truncate max-w-[120px]">{team.coach}</span>
                    </div>
                  </div>

                  <button className="w-full mt-8 py-3 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black text-white/40 uppercase tracking-[0.3em] group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300">
                    Team Profile
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white/5 rounded-[3rem] border border-dashed border-white/10">
            <div className="mb-4 inline-flex p-6 bg-white/5 rounded-full">
              <Search size={48} className="text-white/10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 italic">No Teams Found</h3>
            <p className="text-white/40">Try adjusting your search or filters.</p>
            <button 
              onClick={() => { setSearchTerm(""); setActiveGroup("All"); }}
              className="mt-6 text-indigo-400 font-bold uppercase text-xs tracking-widest border-b border-indigo-400/30 pb-1 hover:text-indigo-300 transition-colors"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Modal Integration */}
        <TeamProfileModal 
          isOpen={!!selectedTeam} 
          onClose={() => setSelectedTeam(null)} 
          team={selectedTeam} 
        />
      </div>
    </div>
  );
};

export default TeamDirectory;
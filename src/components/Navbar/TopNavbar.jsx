import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, User, Trophy, ChevronRight, Hash } from 'lucide-react';
// import TeamProfileModal from '../Dashboard/TeamProfileModal'; // Assuming the path to the previously created modal

// Data shared with TeamDirectory
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

export const TopNavbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const searchRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Search Logic
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim().length > 0) {
      const results = TEAMS_DATA.filter(team => 
        team.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTeams(results);
      setShowDropdown(true);
    } else {
      setFilteredTeams([]);
      setShowDropdown(false);
    }
  };

  const openTeamProfile = (team) => {
    setSelectedTeam(team);
    setShowDropdown(false);
    setSearchTerm("");
  };

  return (
    <>
      <header className="h-20 flex items-center justify-between px-8 sticky top-0 z-40 bg-brand-dark/50 backdrop-blur-md border-b border-white/5">
        
        {/* Dynamic Search System */}
        <div className="relative w-96" ref={searchRef}>
          <div className="relative group">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${searchTerm ? 'text-brand-accent' : 'text-white/40'}`} size={18} />
            <input 
              type="text" 
              value={searchTerm}
              onChange={handleSearch}
              onFocus={() => searchTerm && setShowDropdown(true)}
              placeholder="Search teams, players..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 outline-none focus:border-brand-accent/50 focus:bg-white/10 transition-all text-sm text-white placeholder:text-white/20"
            />
          </div>

          {/* Search Dropdown Suggestions */}
          {showDropdown && (
            <div className="absolute top-full left-0 w-full mt-2 bg-[#0a0e17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
              <div className="p-2">
                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] px-3 py-2">Quick Results</p>
                {filteredTeams.length > 0 ? (
                  <div className="space-y-1">
                    {filteredTeams.map((team) => (
                      <div 
                        key={team.id}
                        onClick={() => openTeamProfile(team)}
                        className="flex items-center justify-between px-3 py-2.5 hover:bg-white/5 rounded-xl cursor-pointer group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-brand-accent/30 transition-all">
                            <span className="text-[10px] font-black text-white/40">{team.name.substring(0, 3).toUpperCase()}</span>
                          </div>
                          <div>
                            <p className="text-xs font-black text-white group-hover:text-brand-accent transition-colors">{team.name}</p>
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] font-bold text-white/20 uppercase tracking-tighter">Group {team.group}</span>
                              <span className="text-[9px] font-bold text-brand-gold uppercase">#{team.rank}</span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight size={14} className="text-white/10 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-xs text-white/30 font-medium italic">No teams found matching "{searchTerm}"</p>
                  </div>
                )}
              </div>
              
              {/* Dropdown Footer */}
              <div className="bg-white/5 p-3 border-t border-white/5 text-center">
                <p className="text-[9px] font-black text-white/20 uppercase tracking-widest italic">Search powered by FIFA 2026 Engine</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Right Section Actions */}
        <div className="flex items-center gap-6">
          <div className="relative p-2 bg-white/5 rounded-full cursor-pointer hover:bg-white/10 transition-all border border-white/5 group">
            <Bell size={20} className="text-white/60 group-hover:text-white" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-brand-dark animate-pulse"></span>
          </div>
          
          <div className="flex items-center gap-3 bg-white/5 p-1 pr-4 rounded-full border border-white/5 cursor-pointer hover:bg-white/10 transition-all group">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-accent to-brand-purple rounded-full flex items-center justify-center font-bold text-xs shadow-lg">
              JD
            </div>
            <div className="hidden sm:block">
              <span className="text-xs font-black text-white block leading-none">John Doe</span>
              <span className="text-[9px] font-bold text-white/30 uppercase tracking-tighter">Gold Member</span>
            </div>
          </div>
        </div>
      </header>

      {/* Team Profile Modal - triggered from search
      <TeamProfileModal 
        isOpen={!!selectedTeam} 
        onClose={() => setSelectedTeam(null)} 
        team={selectedTeam} 
      /> */}
    </>
  );
};
import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const teams = [
    "Argentina", "Brazil", "France", "Germany", 
    "England", "Spain", "Portugal", "USA", 
    "Mexico", "Canada", "Japan", "Morocco"
  ];

  const filteredTeams = teams.filter((team) =>
    team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-md mx-auto p-4">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg 
            className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search teams..."
          className="w-full bg-slate-900/50 backdrop-blur-md text-white border border-slate-700 rounded-2xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {searchTerm !== "" && (
        <div className="absolute left-4 right-4 mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden">
          {filteredTeams.length > 0 ? (
            <ul className="divide-y divide-slate-800">
              {filteredTeams.map((team, index) => (
                <li 
                  key={index}
                  className="px-5 py-3 text-gray-200 hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors flex items-center justify-between group"
                >
                  <span className="font-medium">{team}</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-5 py-4 text-gray-500 text-center italic">
              No matching teams found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
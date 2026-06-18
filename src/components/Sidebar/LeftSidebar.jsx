import React from 'react';
import { Trophy, LayoutDashboard, Calendar, Users, Newspaper, Settings, LogOut, Table, Activity, UserCircle } from 'lucide-react';

const NavItem = ({ icon: Icon, label, targetId, active = false }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a 
      href={`#${targetId}`}
      onClick={handleClick}
      className={`flex items-center gap-4 px-6 py-4 cursor-pointer transition-all duration-300 group ${
        active 
        ? 'text-indigo-500 border-r-4 border-indigo-500 bg-indigo-500/5' 
        : 'text-white/40 hover:text-white hover:bg-white/5'
      }`}
    >
      <Icon size={20} className={`${active ? 'text-indigo-500' : 'group-hover:text-indigo-400'} transition-colors`} />
      <span className="font-bold text-sm tracking-wide uppercase">{label}</span>
    </a>
  );
};

export const LeftSidebar = () => {
  return (
    <aside className="w-64 h-screen glass border-r border-white/5 flex flex-col hidden lg:flex sticky top-0 z-50 bg-[#05070a]">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <Trophy className="text-white" size={24} />
        </div>
        <span className="text-xl font-black tracking-tighter text-white uppercase">FIFA <span className="text-indigo-500">2026</span></span>
      </div>
      
      <nav className="flex-1 mt-4">
        <NavItem icon={LayoutDashboard} label="Dashboard" targetId="hero" active />
        <NavItem icon={Calendar} label="Matches" targetId="matches" />
        <NavItem icon={Users} label="Teams" targetId="teams" />
        <NavItem icon={Table} label="Standings" targetId="standings" />
        <NavItem icon={UserCircle} label="Players" targetId="players" />
        <NavItem icon={Activity} label="Live" targetId="live" />
      </nav>

      <div className="p-4 mt-auto border-t border-white/5 bg-white/5">
        <div className="px-6 py-4 flex items-center gap-4 text-white/40 hover:text-white cursor-pointer transition-colors">
          <Settings size={20} />
          <span className="font-bold text-sm uppercase">Settings</span>
        </div>
        <div className="px-6 py-4 flex items-center gap-4 text-rose-500/60 hover:text-rose-500 cursor-pointer transition-colors">
          <LogOut size={20} />
          <span className="font-bold text-sm uppercase">Logout</span>
        </div>
      </div>
    </aside>
  );
};
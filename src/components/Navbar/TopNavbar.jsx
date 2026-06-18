import { Search, Bell } from 'lucide-react';
import SearchBar from './SearchBar';

export const TopNavbar = () => {
  return (
    <header className="h-20 flex items-center justify-between px-8 sticky top-0 z-40 bg-brand-dark/50 backdrop-blur-md">

    <SearchBar />

      <div className="flex items-center gap-6">
        <div className="relative p-2 bg-white/5 rounded-full cursor-pointer hover:bg-white/10">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-brand-accent rounded-full border border-brand-dark"></span>
        </div>

        <div className="flex items-center gap-3 bg-white/5 p-1 pr-4 rounded-full border border-white/10 cursor-pointer hover:bg-white/10">
          <div className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center font-bold">
            JD
          </div>
          <span className="text-sm font-medium">John Doe</span>
        </div>
      </div>

    </header>
  );
};
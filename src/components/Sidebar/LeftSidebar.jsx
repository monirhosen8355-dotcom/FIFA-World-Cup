import { Trophy, LayoutDashboard, Calendar, Users, Newspaper, Settings, LogOut } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center gap-4 px-6 py-4 cursor-pointer transition-all ${active ? 'text-brand-accent border-r-4 border-brand-accent bg-white/5' : 'text-white/50 hover:text-white'}`}>
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </div>
);

export const LeftSidebar = () => {
  return (
    <aside className="w-64 h-screen glass border-r border-white/5 flex flex-col hidden lg:flex sticky top-0">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center">
          <Trophy className="text-white" size={24} />
        </div>
        <span className="text-xl font-bold tracking-tight">FIFA2026</span>
      </div>
      
      <nav className="flex-1 mt-4">
        <NavItem icon={LayoutDashboard} label="Dashboard" active />
        <NavItem icon={Calendar} label="Matches" />
        <NavItem icon={Users} label="Teams" />
        <NavItem icon={Newspaper} label="News" />
      </nav>

      <div className="p-4 mt-auto border-t border-white/5">
        <NavItem icon={Settings} label="Settings" />
        <NavItem icon={LogOut} label="Logout" />
      </div>
    </aside>
  );
};
import PointsTable from './components/Dashboard/PointsTable';
import TeamDirectory from './components/Dashboard/TeamDirectory';
import MatchSchedule from './components/Dashboard/MatchSchedule';
import { LeftSidebar } from './components/Sidebar/LeftSidebar';
import { RightSidebar } from './components/Sidebar/RightSidebar';
import { TopNavbar } from './components/Navbar/TopNavbar';
import { HeroMatch } from './components/Dashboard/HeroMatch';
import LiveMatches from './components/Dashboard/LiveMatches';
import { NEWS } from './data/dummyData';
import { GlassCard } from './components/UI/GlassCard';
import UpcomingMatches from './components/Dashboard/UpcomingMatches';

function App() {
  return (
    <div className="flex min-h-screen text-white">
      <LeftSidebar />

      <main className="flex-1 flex flex-col min-w-0">
        <TopNavbar />

        <div className="p-8 flex flex-col gap-8">
          <HeroMatch />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Live Now</h2>
            <LiveMatches />
          </div>

          {/* Match Schedule */}
          <MatchSchedule />

          <TeamDirectory />

          <PointsTable />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">Latest News</h2>

              <div className="grid grid-cols-1 gap-4">
                {NEWS.map((n) => (
                  <GlassCard key={n.id} className="group cursor-pointer">
                    <p className="text-[10px] text-brand-accent font-bold uppercase mb-1">
                      {n.category}
                    </p>

                    <h4 className="font-bold group-hover:text-brand-accent transition-colors">
                      {n.title}
                    </h4>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <RightSidebar />
    </div>
  );
}

export default App;
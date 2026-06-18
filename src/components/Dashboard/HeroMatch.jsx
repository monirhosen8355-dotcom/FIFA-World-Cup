import { GlassCard } from '../UI/GlassCard';

export const HeroMatch = () => (
  <GlassCard className="relative h-64 overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/40 to-transparent z-10" />
    <img 
      src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070" 
      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" 
      alt="stadium"
    />
    <div className="relative z-20 h-full flex flex-col justify-center p-8">
      <span className="bg-brand-gold text-black text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-4">MATCH OF THE DAY</span>
      <h1 className="text-4xl font-black mb-2">ARGENTINA vs GERMANY</h1>
      <p className="text-white/60 mb-6">Final rematch at the MetLife Stadium, New Jersey.</p>
      <button className="bg-white text-brand-dark px-8 py-3 rounded-xl font-bold hover:bg-brand-gold transition-colors w-fit">
        Buy Tickets
      </button>
    </div>
  </GlassCard>
);
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function usePrefersDark() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setIsDark(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return isDark;
}

export default function Gallery() {
  const prefersDark = usePrefersDark();
  const [mode, setMode] = useState('auto');

  const effectiveDark = mode === 'auto' ? prefersDark : mode === 'dark';

  const images = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    hue: (i * 40) % 360
  }));

  return (
    <section id="gallery" className={`${effectiveDark ? 'bg-[#0b0c0f]' : 'bg-[#eef2f7]'} py-24 transition-colors`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <h2 className={`text-3xl md:text-4xl font-bold ${effectiveDark ? 'text-white' : 'text-slate-800'}`} style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}>Visual Zone</h2>
          <div className="flex gap-2 text-xs">
            {['auto','light','dark'].map(m => (
              <button key={m} onClick={() => setMode(m)} className={`px-3 py-1 rounded-full border ${mode===m ? 'bg-emerald-400/20 text-emerald-900 border-emerald-400/40' : effectiveDark ? 'text-emerald-100 border-white/10' : 'text-slate-700 border-slate-300'}`}>{m}</button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map(({ id, hue }) => (
            <motion.div key={id} whileHover={{ scale: 1.02 }} className={`relative overflow-hidden rounded-xl ${effectiveDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-slate-200'} shadow`}> 
              <div className="aspect-[4/3]" style={{ background: `conic-gradient(from 90deg, hsl(${hue} 70% 70%/0.15), hsl(${(hue+60)%360} 70% 70%/0.15))` }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(0,0,0,0.15), transparent 40%), radial-gradient(circle at 80% 60%, rgba(0,0,0,0.15), transparent 40%)' }} />
              <div className={`p-3 ${effectiveDark ? 'text-emerald-100' : 'text-slate-700'}`}>Sketch #{id+1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

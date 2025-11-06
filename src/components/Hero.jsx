import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Music, MusicOff } from 'lucide-react';

export default function Hero() {
  const [musicOn, setMusicOn] = useState(false);
  const audioCtxRef = useRef(null);
  const gainRef = useRef(null);

  useEffect(() => {
    // Lightweight ambient pad using WebAudio (no external assets)
    if (musicOn && !audioCtxRef.current) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const gain = ctx.createGain();
      gain.gain.value = 0.0001; // start quiet
      gain.connect(ctx.destination);

      const makeOsc = (type, freq, detune) => {
        const o = ctx.createOscillator();
        o.type = type;
        o.frequency.value = freq;
        o.detune.value = detune;
        o.connect(gain);
        o.start();
        return o;
      };

      const osc1 = makeOsc('sine', 110, -6);
      const osc2 = makeOsc('sine', 220, 8);
      const osc3 = makeOsc('triangle', 55, 3);

      // Slow LFO for organic swell
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.type = 'sine';
      lfo.frequency.value = 0.07;
      lfoGain.gain.value = 0.12;
      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);
      lfo.start();

      // fade in
      gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 3);

      audioCtxRef.current = ctx;
      gainRef.current = { gain, nodes: [osc1, osc2, osc3, lfo, lfoGain] };
    }

    if (!musicOn && audioCtxRef.current) {
      try {
        const ctx = audioCtxRef.current;
        const { gain, nodes } = gainRef.current || {};
        if (gain) gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1);
        setTimeout(() => {
          nodes?.forEach(n => { try { n.stop?.(); n.disconnect?.(); } catch (_) {} });
          try { gain?.disconnect?.(); } catch (_) {}
          ctx.close();
          audioCtxRef.current = null;
          gainRef.current = null;
        }, 1200);
      } catch (_) {
        audioCtxRef.current = null;
        gainRef.current = null;
      }
    }
  }, [musicOn]);

  const [hovering, setHovering] = useState(false);

  return (
    <section id="home" className="relative w-full h-[95vh] overflow-hidden bg-[#0b0c0f]">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Atmospheric overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(1500px 500px at 10% 10%, rgba(168,85,247,0.18), transparent), radial-gradient(800px 400px at 80% 60%, rgba(34,197,94,0.12), transparent)' }} />

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => setMusicOn(v => !v)}
            className="group inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur text-white border border-white/10 transition"
            aria-label={musicOn ? 'Turn off ambient music' : 'Turn on ambient music'}
          >
            {musicOn ? <Music className="w-4 h-4 text-cyan-300" /> : <MusicOff className="w-4 h-4 text-purple-300" />}
            <span className="text-xs opacity-80">Ambient</span>
          </button>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.25)]"
          style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-purple-200 to-cyan-200">Fikri Binaul Umah</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl text-emerald-100/90 max-w-2xl"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Where Art Meets Technology.
        </motion.p>

        <div className="mt-10 flex items-center gap-8">
          {/* Avatar */}
          <motion.div
            onHoverStart={() => setHovering(true)}
            onHoverEnd={() => setHovering(false)}
            className="relative w-40 h-40 rounded-2xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center shadow-[0_0_50px_rgba(56,189,248,0.15)]"
          >
            <motion.svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a7f3d0" />
                  <stop offset="100%" stopColor="#c4b5fd" />
                </linearGradient>
              </defs>
              <circle cx="60" cy="60" r="38" stroke="url(#grad)" strokeWidth="4" fill="#0f1115" />
              <circle cx="48" cy="55" r="4" fill="#a7f3d0" />
              <circle cx="72" cy="55" r="4" fill="#a7f3d0" />
              <motion.path
                d="M45 75 C55 85, 65 85, 75 75"
                stroke="#86efac"
                strokeWidth="4"
                strokeLinecap="round"
                fill="transparent"
                animate={{ pathLength: hovering ? 1 : 0.7 }}
                transition={{ type: 'spring', stiffness: 120, damping: 15 }}
              />
              {/* waving hand */}
              <motion.g style={{ originX: 1, originY: 1 }} animate={{ rotate: hovering ? [0, 18, -8, 14, 0] : 0 }} transition={{ duration: 1.2, repeat: hovering ? Infinity : 0, repeatDelay: 0.4 }}>
                <circle cx="95" cy="40" r="8" fill="#c4b5fd" />
                <rect x="90" y="40" width="10" height="20" rx="5" fill="#c4b5fd" />
              </motion.g>
            </motion.svg>
            <span className="absolute -bottom-3 text-[11px] px-2 py-1 rounded-full bg-emerald-400/20 text-emerald-100 border border-emerald-300/20">Say hi!</span>
          </motion.div>

          <div className="max-w-xl text-emerald-50/90">
            <p className="leading-relaxed">Computer Engineering @ IPB University. I blend circuits, code, and color to craft playful, emotionally resonant interfaces and installations.</p>
            <p className="mt-3 text-emerald-100/70">Explore a studio where sketches become systems, and experiments become experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

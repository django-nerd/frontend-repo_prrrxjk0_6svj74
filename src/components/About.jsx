import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0b0c0f] text-emerald-50">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,\
        <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 120 120\'>\
          <filter id=\'n\'>\
            <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/>\
            <feColorMatrix type=\'saturate\' values=\'0\'/>\
            <feComponentTransfer>\
              <feFuncA type=\'table\' tableValues=\'0 0.03\'/>\
            </feComponentTransfer>\
          </filter>\
          <rect width=\'120\' height=\'120\' filter=\'url(%23n)\' opacity=\'0.8\'/>\
        </svg>" )', opacity: 0.25 }} />

      <div className="relative container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
          style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}
        >
          About Me
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="leading-relaxed text-emerald-100/90"
          >
            <p>
              I’m Fikri — a Computer Engineering student at IPB University who thinks like an artist. I explore the poetry of logic, the feel of feedback loops, and the warmth inside cold circuits.
            </p>
            <p className="mt-4">
              My work blends embedded systems, web interfaces, and generative visuals. I design experiences that listen and respond: objects that glow with meaning, interfaces that breathe, code that carries emotion.
            </p>
            <p className="mt-4">
              When art and engineering collaborate, technology becomes a canvas — and every bug is just a brushstroke on the path to beauty.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.svg
              viewBox="0 0 400 260"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a7f3d0" />
                  <stop offset="100%" stopColor="#c4b5fd" />
                </linearGradient>
              </defs>
              <motion.path
                d="M20 200 C 120 120, 180 260, 260 160 C 320 100, 360 140, 380 80"
                stroke="url(#stroke)"
                strokeWidth="6"
                fill="transparent"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: 'easeInOut' }}
              />
              <motion.circle cx="260" cy="160" r="8" fill="#22d3ee" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.4 }} />
              <motion.circle cx="120" cy="140" r="6" fill="#a78bfa" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2.0, delay: 0.3 }} />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0b0c0f] text-emerald-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}>Contact</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <form className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur space-y-4">
            <div>
              <label className="text-sm opacity-80">Name</label>
              <input type="text" className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm opacity-80">Email</label>
              <input type="email" className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm opacity-80">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Tell me about your idea..." />
            </div>
            <button type="button" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-emerald-400/80 to-cyan-400/80 text-black font-semibold hover:from-emerald-300 hover:to-cyan-300 transition shadow">Send</button>
          </form>

          <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur flex items-center">
            <motion.svg width="100%" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a7f3d0" />
                  <stop offset="100%" stopColor="#c4b5fd" />
                </linearGradient>
              </defs>
              <motion.path d="M10 150 Q 100 60, 200 130 T 390 110" stroke="url(#lg)" strokeWidth="4" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }} />
              <motion.circle cx="200" cy="130" r="6" fill="#22d3ee" animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            </motion.svg>
            <div className="absolute bottom-4 right-4 text-xs text-emerald-100/70">Say goodbye <span className="opacity-60">👋</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

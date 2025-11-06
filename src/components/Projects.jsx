import { motion } from 'framer-motion';

const projects = [
  {
    title: 'IoT Greenhouse (ESP8266 + MQTT)',
    desc: 'Responsive dashboard + automated climate control. Plants, but cyber.',
    tags: ['IoT', 'ESP8266', 'MQTT', 'React']
  },
  {
    title: 'Interactive Poetry Player',
    desc: 'A music-poetry fusion that reacts to mouse movement and rhythm.',
    tags: ['WebAudio', 'Creative Coding']
  },
  {
    title: 'Arduino Light Sculpture',
    desc: 'Procedural light choreography that mirrors emotion states.',
    tags: ['Arduino', 'LED', 'Art']
  },
  {
    title: 'Generative Illustration Lab',
    desc: 'Vector brushes that paint with algorithms and noise fields.',
    tags: ['SVG', 'Generative Art']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-[#0b0c0f] to-[#0f1115] text-emerald-50">
      <div className="relative container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}>Projects</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur shadow-lg"
            >
              <div className="h-40 bg-gradient-to-br from-emerald-200/20 via-purple-200/20 to-cyan-200/20" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-emerald-100/80">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-emerald-400/10 text-emerald-100 border border-emerald-300/20">{t}</span>
                  ))}
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                initial={false}
              >
                <span className="text-sm text-emerald-50">Click to view (demo)</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

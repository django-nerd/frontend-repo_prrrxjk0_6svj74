import { motion } from 'framer-motion';

const posts = [
  { title: 'Breathing Interfaces', excerpt: 'How micro-animations can make interfaces feel alive and empathetic.' },
  { title: 'The Poetry of Sensors', excerpt: 'Turning voltage and noise into gestures and feelings.' },
  { title: 'Debugging as Drawing', excerpt: 'Each bug a brushstroke. Each fix a new layer of meaning.' }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#0f1115] text-emerald-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}>Thoughts</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-emerald-100/80 text-sm leading-relaxed">{p.excerpt}</p>
              <button className="mt-4 text-xs text-cyan-300 hover:text-cyan-200">Read more →</button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

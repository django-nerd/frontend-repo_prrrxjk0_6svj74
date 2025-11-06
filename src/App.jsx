import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0c0f] text-white">
      {/* Simple top nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
        <nav className="container mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-wide text-emerald-100">Fikri</a>
          <div className="flex items-center gap-6 text-sm text-emerald-100/80">
            <a href="#about" className="hover:text-emerald-200">About</a>
            <a href="#projects" className="hover:text-emerald-200">Projects</a>
            <a href="#contact" className="hover:text-emerald-200">Contact</a>
          </div>
        </nav>
      </header>

      <main className="pt-14">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-10 text-center text-xs text-emerald-100/60 border-t border-white/10 bg-black/30">
        © {new Date().getFullYear()} Fikri Binaul Umah • Where Art Meets Technology
      </footer>
    </div>
  );
}

export default App;

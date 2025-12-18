export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-cyan-400">Your Name</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
          Front-End Developer
        </h2>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
          I build fast, responsive, and modern web applications using
          <span className="text-white font-medium"> React</span> and
          <span className="text-white font-medium"> Vite</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

import HeroParticles from './HeroParticles';

interface HeroProps {
  name: string;
  title: string;
  intro: string;
}

function Hero({ name, title, intro }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-slate-900 to-purple-900 dark:from-slate-950 dark:to-purple-950 overflow-hidden"
    >
      <HeroParticles />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-6">
          {title}
        </p>
        <p className="text-lg text-slate-400 max-w-md mx-auto mb-8">
          {intro}
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          查看项目
        </a>
      </div>
    </section>
  );
}

export default Hero;

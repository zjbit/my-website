import { useState, useEffect, useRef } from 'react';

interface Project {
  name: string;
  description: string;
  github: string;
  image?: string;
}

const projects: Project[] = [
  {
    name: 'Cursor_Test',
    description: 'Cursor_Test',
    github: 'https://github.com/zjbit/Cursor_Test',
  },
  {
    name: 'smartPolicy',
    description: 'smartPolicy',
    github: 'https://github.com/luoy2/smartPolicyNlpValidate',
  },
  {
    name: 'Serving',
    description: 'Serving',
    github: 'https://github.com/zjbit/Serving',
  },
  {
    name: 'STANet',
    description: 'STANet',
    github: 'https://github.com/zjbit/STANet',
  },
];

function LazyImage({ src, alt, className }: { src?: string; alt: string; className: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!src || error) {
    return (
      <div ref={imgRef} className={className}>
        <span className="text-white text-4xl font-bold opacity-30">{alt.charAt(0)}</span>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={className}>
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
      {!inView && <span className="text-white text-4xl font-bold opacity-30">{alt.charAt(0)}</span>}
    </div>
  );
}

function Projects() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section id="projects" className="py-16 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
          我的项目
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden ${
                reducedMotion
                  ? ''
                  : 'hover:shadow-xl hover:scale-105 transition-all duration-300'
              }`}
            >
              <LazyImage
                src={project.image}
                alt={project.name}
                className="aspect-video bg-gradient-to-br from-purple-500 to-slate-700 flex items-center justify-center"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {project.name}
                  </h3>
                  <svg
                    className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

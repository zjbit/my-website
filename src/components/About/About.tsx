import { useState, useEffect, useRef } from 'react';

const introParagraphs = [
  'AI技术爱好者',
  'AI技术爱好者',
  'AI技术爱好者',
];

const brandTags = ['AI技术爱好者'];

const PHOTO_PATH = 'E:\\个人信息\\个人头像照.jpg';

function LazyImage({ src, alt, className }: { src?: string; alt: string; className: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

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
      <div ref={imgRef} className={`${className} flex items-center justify-center bg-slate-200 dark:bg-slate-700`}>
        <span className="text-slate-400 text-6xl">👤</span>
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
      {!inView && (
        <div className="w-full h-full flex items-center justify-center bg-slate-200 dark:bg-slate-700">
          <span className="text-slate-400 text-6xl">👤</span>
        </div>
      )}
    </div>
  );
}

function About() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
          关于我
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <LazyImage
              src={PHOTO_PATH}
              alt="个人照片"
              className="w-full h-full rounded-full object-cover border-4 border-slate-200 dark:border-slate-600"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            {introParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-slate-600 dark:text-slate-300 mb-4 leading-relaxed ${
                  reducedMotion ? '' : 'animate-fade-in'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {brandTags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

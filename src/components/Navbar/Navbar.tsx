import { useState, useEffect } from 'react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '项目', href: '#projects' },
  { label: '联系我', href: '#contact' },
];

function Navbar() {
  const [current, setCurrent] = useState('#hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrent(window.location.hash || '#hero');
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      if (!mediaQuery.matches) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-16 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-white dark:text-white">
          郑江
        </a>
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={current === link.href ? 'page' : undefined}
                className="text-white/90 hover:text-white dark:text-slate-300 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-2 py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

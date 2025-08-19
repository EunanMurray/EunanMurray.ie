"use client";
import React, { useState, useEffect } from 'react';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';

interface NavItem {
  id: string;
  label: string;
  mobileIcon?: string;
}

const HomePage: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/60 dark:bg-blue-900/70 rounded-full filter blur-3xl opacity-20 motion-safe:animate-spin-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/60 dark:bg-purple-900/70 rounded-full filter blur-3xl opacity-20 motion-safe:animate-spin-reverse-slow" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="absolute -top-4 -left-4 motion-safe:animate-float">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg shadow-blue-600/20">.NET</div>
        </div>
        <div className="absolute -top-8 right-8 motion-safe:animate-float-delay-1">
          <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg shadow-emerald-600/20">MudBlazor</div>
        </div>
        <div className="absolute -bottom-4 -right-4 motion-safe:animate-float-delay-2">
          <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg shadow-indigo-600/20">Azure</div>
        </div>

        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
            I build clean, reliable web apps
          </span>
        </h1>

        <p className="mt-5 text-xl lg:text-2xl text-slate-700 dark:text-slate-300/90 max-w-3xl leading-relaxed mx-auto">
          Software Developer focused on .NET, Angular, and cloud. Currently a <strong>Software Developer Intern at CBE</strong> (Apr&nbsp;1, 2025&nbsp;–&nbsp;present, 6-month internship) and starting my <strong>final year at ATU Sligo</strong> next month.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setCurrentPage('projects')}
            className="group relative px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-4 rounded-2xl font-semibold border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-white hover:scale-105 transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: '3+', l: 'Years Experience', c: 'text-blue-600 dark:text-blue-400' },
            { v: '15+', l: 'Technologies', c: 'text-purple-600 dark:text-purple-400' },
            { v: '4+', l: 'Major Projects', c: 'text-green-600 dark:text-green-400' },
            { v: 'CBE', l: 'Current Intern', c: 'text-orange-600 dark:text-orange-400' },
          ].map((s, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-6 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-slate-900/5"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-70" />
              <div className={`text-3xl font-bold ${s.c}`}>{s.v}</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300/90 max-w-3xl mx-auto">
          I design and ship practical software: clear UIs, solid APIs, and deployments that don't keep you up at night.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="rounded-2xl p-8 border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">What I'm doing now</h2>
            <p className="text-slate-700 dark:text-slate-300/90 leading-relaxed">
              Currently working as a <strong className="text-slate-900 dark:text-white">Software Developer Intern at CBE</strong> since April 2025.
              I'm focusing on modernizing internal dashboards with Blazor/MudBlazor and implementing robust RBAC features.
              This 6-month placement has been an incredible opportunity to work with enterprise-level .NET applications and Azure cloud services.
            </p>
          </div>

          <div className="rounded-2xl p-8 border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">What's next</h2>
            <p className="text-slate-700 dark:text-slate-300/90 leading-relaxed">
              Starting my <strong className="text-slate-900 dark:text-white">final year at ATU Sligo</strong> next month, where I'll be completing my BSc in Software Development.
              I'm actively seeking opportunities for when I graduate, particularly in full-stack development roles where I can leverage my .NET and cloud expertise.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg shadow-purple-900/20">
            <h2 className="text-2xl font-bold mb-6">What I enjoy</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-xl">🚀</span>
                <div>
                  <strong>Building practical solutions:</strong> Creating software that solves real problems and makes people's work easier
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">☁️</span>
                <div>
                  <strong>Cloud architecture:</strong> Designing scalable systems with Azure and AWS that can grow with business needs
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🎨</span>
                <div>
                  <strong>Clean UI/UX:</strong> Crafting interfaces that are both beautiful and intuitive, using modern frameworks like MudBlazor
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🔵</span>
                <div>
                  <strong>The TARDIS is bigger on the inside:</strong> Just like good software architecture should be - simple on the surface, powerful underneath
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl p-8 border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Quick Facts</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300/90">
              <div className="flex justify-between">
                <span>Location</span>
                <span className="font-medium text-slate-900 dark:text-white">Westport, Ireland 🇮🇪</span>
              </div>
              <div className="flex justify-between">
                <span>Education</span>
                <span className="font-medium text-slate-900 dark:text-white">ATU Sligo (Final Year)</span>
              </div>
              <div className="flex justify-between">
                <span>Focus Areas</span>
                <span className="font-medium text-slate-900 dark:text-white">.NET, Cloud, Full-Stack</span>
              </div>
              <div className="flex justify-between">
                <span>Availability</span>
                <span className="font-medium text-green-600 dark:text-green-400">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [navElevated, setNavElevated] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setNavElevated(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', mobileIcon: '🏠' },
    { id: 'about', label: 'About', mobileIcon: '👤' },
    { id: 'experience', label: 'Experience', mobileIcon: '💼' },
    { id: 'projects', label: 'Projects', mobileIcon: '🚀' },
    { id: 'skills', label: 'Skills', mobileIcon: '⚡' },
    { id: 'contact', label: 'Contact', mobileIcon: '📧' }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'skills':
        return <SkillsPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] rounded-lg bg-slate-900 text-white px-3 py-2"
      >
        Skip to content
      </a>

      <nav
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-shadow",
          "bg-white/75 dark:bg-slate-900/75 backdrop-blur-xl",
          "border-b border-slate-200/70 dark:border-slate-800/70",
          navElevated ? "shadow-sm" : "shadow-none"
        ].join(" ")}
        role="navigation"
        aria-label="Primary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-2 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-lg"
              aria-label="Go to Home"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110">
                EM
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white hidden sm:block">
                Eunan Murray
              </span>
            </button>

            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const active = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    aria-current={active ? 'page' : undefined}
                    className={[
                      "px-4 py-2 rounded-xl font-medium transition-all duration-300 focus:outline-none",
                      "focus-visible:ring-2 focus-visible:ring-blue-500/60",
                      active
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 border border-transparent hover:border-slate-200/70 dark:hover:border-slate-700/70"
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200/70 dark:border-slate-800/70">
        <div className="flex justify-around py-2">
          {navItems.map((item) => {
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                aria-current={active ? 'page' : undefined}
                className={[
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60",
                  active
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm"
                    : "text-slate-700 dark:text-slate-300"
                ].join(" ")}
                aria-label={item.label}
                title={item.label}
              >
                <span className="text-xl">{item.mobileIcon}</span>
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <main id="main-content" className="pt-16 pb-20 md:pb-8 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}
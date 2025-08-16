'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 transition-all duration-500">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <nav className="relative z-10 w-full px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Eunan Murray
          </div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#projects" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#experience" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium relative group">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block text-slate-900 dark:text-white">Hello,</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  I'm Eunan
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                Third-year Software Development student passionate about full-stack development, cloud technologies, and creating innovative digital solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10">View My Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a 
                href="mailto:eunanmurray56@gmail.com"
                className="group px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-2xl font-semibold border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-80 h-80 border border-blue-200 dark:border-blue-800 rounded-full"></div>
              </div>
              <div className="absolute inset-4 animate-spin-reverse-slow">
                <div className="w-72 h-72 border border-purple-200 dark:border-purple-800 rounded-full border-dashed"></div>
              </div>
              
              <div className="relative w-80 h-80 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center border border-slate-200 dark:border-slate-700">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                    EM
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400">ATU Sligo Student</div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">Software Developer</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 animate-float">
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">C#/.NET</div>
              </div>
              <div className="absolute -top-8 right-8 animate-float-delay-1">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">Angular</div>
              </div>
              <div className="absolute -bottom-4 -right-4 animate-float-delay-2">
                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">AWS</div>
              </div>
            </div>
          </div>
        </div>

        <section id="about" className="mt-32">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-slate-200 dark:border-slate-700 shadow-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">About Me</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  I'm a third-year BSc (Honors) Software Development student at ATU Sligo with a passion for technology, 
                  problem-solving, and business. Currently seeking work experience opportunities to apply my technical 
                  expertise in real-world environments.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  My academic journey has equipped me with strong foundations in C#/.NET programming, web development, 
                  cloud computing, and database management. I thrive in dynamic, team-oriented environments and bring 
                  both technical skills and leadership experience from my work in hospitality.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">ATU Sligo Student</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">Full-Stack Developer</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">Cloud Enthusiast</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">C# & .NET Development</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Web Development (Angular)</span>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">Proficient</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Cloud Technologies (AWS)</span>
                    <span className="text-orange-600 dark:text-orange-400 font-semibold">Intermediate</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Database Management (SQL)</span>
                    <span className="text-green-600 dark:text-green-400 font-semibold">Intermediate</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Real-world applications showcasing my skills in full-stack development, cloud technologies, and modern frameworks
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                📋
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Personal Project & Task Tracker</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                A C# WPF application for college students to manage projects, tasks, and deadlines with database integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">C#</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium">WPF</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">SQL</span>
              </div>
            </div>

            <div className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                🍹
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Cloud Cocktail Ordering System</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                AWS-based ordering system with API integration, DynamoDB storage, and separate customer/staff interfaces.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">AWS</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">DynamoDB</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium">API</span>
              </div>
            </div>

            <div className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                🌐
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Angular Web Application</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Full-stack Angular website with REST API integration, hosted on personal domain (Eunan.ie).
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-xs font-medium">Angular</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">REST API</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">Cloud Hosting</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Technologies & Skills
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Proficient in modern development tools and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "C# & .NET", emoji: "🔵", color: "from-blue-500 to-blue-700" },
              { name: "Angular", emoji: "🅰️", color: "from-red-500 to-red-700" },
              { name: "Java", emoji: "☕", color: "from-orange-500 to-orange-700" },
              { name: "Python", emoji: "🐍", color: "from-green-500 to-green-700" },
              { name: "AWS", emoji: "☁️", color: "from-orange-400 to-yellow-500" },
              { name: "SQL", emoji: "🗄️", color: "from-slate-600 to-slate-800" }
            ].map((tech, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl text-center">
                  <div className="text-3xl mb-3">{tech.emoji}</div>
                  <div className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
                    {tech.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-32">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              I'm actively seeking work experience opportunities to apply my skills and contribute to innovative projects. 
              Based in Westport, Ireland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:eunanmurray56@gmail.com"
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                📧 eunanmurray56@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/eunan-murray/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 hover:bg-white/30"
              >
                💼 LinkedIn Profile
              </a>
              <a 
                href="https://www.github.com/EunanMurray"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 hover:bg-white/30"
              >
                🐙 GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-sm py-8 mt-20 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-2">
            © 2025 Eunan Murray. Built with Next.js, React, and Tailwind CSS.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Third-year Software Development student at ATU Sligo • Westport, Ireland
          </p>
        </div>
      </footer>
    </div>
  );
}
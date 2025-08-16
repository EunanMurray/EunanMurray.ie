"use client";

import React, { useState, useEffect } from 'react';

const PortfolioLayout = () => {
  const [currentPage, setCurrentPage] = useState('home');
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

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 transition-all duration-500">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 w-full px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Eunan Murray
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`relative group px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-white/20 dark:bg-slate-800/50 backdrop-blur-sm'
                    : 'hover:bg-white/10 dark:hover:bg-slate-800/30'
                }`}
              >
                <span className="text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2">
                  <span>{item.icon}</span>
                  {item.label}
                </span>
                {currentPage === item.id && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                )}
              </button>
            ))}
            
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden mt-4">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-3 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`p-3 rounded-lg transition-all duration-300 text-center ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="text-lg">{item.icon}</div>
                  <div className="text-xs font-medium mt-1">{item.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'skills' && <SkillsPage />}
        {currentPage === 'experience' && <ExperiencePage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="pt-12">
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
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
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
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="pt-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          About Me
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Passionate developer with a drive for innovation and excellence
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">My Journey</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              I'm a third-year BSc (Honors) Software Development student at ATU Sligo with a passion for technology, 
              problem-solving, and business. Currently seeking work experience opportunities to apply my technical 
              expertise in real-world environments.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My academic journey has equipped me with strong foundations in C#/.NET programming, web development, 
              cloud computing, and database management. I thrive in dynamic, team-oriented environments and bring 
              both technical skills and leadership experience from my work in hospitality.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="space-y-3">
              <div>
                <div className="font-semibold">BSc (Honors) Software Development</div>
                <div className="text-blue-100">Atlantic Technological University (ATU), Sligo</div>
                <div className="text-blue-200 text-sm">2022 - Present (3rd Year)</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Achievements</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Web Programming (Angular) - 73%
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Object Oriented Development (C#) - 63%
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Cloud Computing - 63%
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Database Management (SQL) - 55%
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Progress */}
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Technical Proficiency</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-700 dark:text-slate-300 font-medium">C# & .NET Development</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Advanced</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full w-5/6 transition-all duration-1000"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-700 dark:text-slate-300 font-medium">Web Development (Angular)</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">Proficient</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full w-4/5 transition-all duration-1000 delay-200"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-700 dark:text-slate-300 font-medium">Cloud Technologies (AWS)</span>
                <span className="text-orange-600 dark:text-orange-400 font-semibold">Intermediate</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full w-3/4 transition-all duration-1000 delay-400"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-700 dark:text-slate-300 font-medium">Database Management (SQL)</span>
                <span className="text-green-600 dark:text-green-400 font-semibold">Intermediate</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full w-3/4 transition-all duration-1000 delay-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Import the actual page components
const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterTech, setFilterTech] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const projects = [
    {
      id: 1,
      title: "Personal Project & Task Tracker",
      description: "A comprehensive C# WPF application designed for college students to manage projects, tasks, and deadlines with seamless database integration.",
      technologies: ["C#", "WPF", ".NET", "SQL"],
      status: "Completed",
      year: "2024",
      image: "🗂️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Cloud Cocktail Ordering System",
      description: "AWS-based ordering system featuring dual interfaces for customers and staff, with real-time API integration and cloud database storage.",
      technologies: ["AWS", "DynamoDB", "API", "Serverless"],
      status: "Completed", 
      year: "2024",
      image: "🍹",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      title: "Angular Web Application",
      description: "Full-stack Angular website with REST API integration, hosted on personal domain with modern responsive design.",
      technologies: ["Angular", "TypeScript", "REST API", "HTML/CSS"],
      status: "Completed",
      year: "2024", 
      image: "🌐",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="pt-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Featured Projects
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Real-world applications showcasing my skills in full-stack development, cloud technologies, and modern frameworks
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4`}>
              {project.image}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsPage = () => {
  const skills = [
    { name: "C# & .NET", level: 85, icon: "🔵" },
    { name: "Angular", level: 80, icon: "🅰️" },
    { name: "Java", level: 70, icon: "☕" },
    { name: "Python", level: 65, icon: "🐍" },
    { name: "AWS", level: 75, icon: "☁️" },
    { name: "SQL", level: 70, icon: "🗄️" }
  ];

  return (
    <div className="pt-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Skills & Expertise
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Technical skills and proficiency levels across various technologies
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">{skill.icon}</div>
              <h3 className="font-bold text-slate-900 dark:text-white">{skill.name}</h3>
              <span className="ml-auto text-lg font-bold text-slate-900 dark:text-white">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
              <div 
                className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Part-time Waiter & Host",
      company: "Luseas Restaurant, Westport Coast Hotel",
      duration: "Summer 2021 - Present",
      status: "Current",
      icon: "🏨",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Software Development Student",
      company: "Atlantic Technological University (ATU)",
      duration: "September 2022 - Present", 
      status: "Current",
      icon: "🎓",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Part-time Retail Assistant",
      company: "SuperValu",
      duration: "2019 - 2020",
      status: "Completed",
      icon: "🛒", 
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="pt-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Experience & Journey
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          My professional and educational journey
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-8">
            <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0`}>
              {exp.icon}
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${exp.status === 'Current' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300'}`}>
                  {exp.status}
                </span>
              </div>
              <p className="font-medium text-slate-700 dark:text-slate-300">{exp.company}</p>
              <p className="text-slate-500 dark:text-slate-500">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Let's Connect
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Ready to discuss opportunities, collaborate on projects, or just have a chat about technology
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <a href="mailto:eunanmurray56@gmail.com" className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform">
            📧
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">Email</h3>
          <p className="text-slate-600 dark:text-slate-400">eunanmurray56@gmail.com</p>
        </a>

        <a href="https://www.linkedin.com/in/eunan-murray/" target="_blank" rel="noopener noreferrer" className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform">
            💼
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">LinkedIn</h3>
          <p className="text-slate-600 dark:text-slate-400">Professional Network</p>
        </a>

        <a href="https://www.github.com/EunanMurray" target="_blank" rel="noopener noreferrer" className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group">
          <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform">
            🐙
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">GitHub</h3>
          <p className="text-slate-600 dark:text-slate-400">Code Repository</p>
        </a>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-xl mb-6 opacity-90">
          I'm actively seeking work experience opportunities to apply my skills and contribute to innovative projects.
        </p>
        <a href="mailto:eunanmurray56@gmail.com" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 inline-block">
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default PortfolioLayout;
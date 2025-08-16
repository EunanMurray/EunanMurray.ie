"use client";
import React, { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  years?: number;
  projects?: number;
  icon: string;
  category?: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
}

interface SoftSkill {
  name: string;
  level: number;
  icon: string;
}

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [animateProgress, setAnimateProgress] = useState<boolean>(false);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: '🎨',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Angular', level: 80, years: 2, projects: 3, icon: '🅰️' },
        { name: 'HTML/CSS', level: 85, years: 3, projects: 8, icon: '🌐' },
        { name: 'TypeScript', level: 75, years: 2, projects: 4, icon: '📘' },
        { name: 'JavaScript', level: 70, years: 2, projects: 5, icon: '⚡' },
        { name: 'Responsive Design', level: 80, years: 2, projects: 6, icon: '📱' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: '⚙️',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'C# & .NET', level: 85, years: 3, projects: 6, icon: '🔵' },
        { name: '.NET MVC', level: 80, years: 2, projects: 3, icon: '🏗️' },
        { name: 'Java', level: 70, years: 2, projects: 4, icon: '☕' },
        { name: 'Python', level: 65, years: 1, projects: 2, icon: '🐍' },
        { name: 'API Development', level: 75, years: 2, projects: 5, icon: '🔗' }
      ]
    },
    {
      id: 'database',
      name: 'Database & Cloud',
      icon: '☁️',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'SQL Server', level: 70, years: 2, projects: 5, icon: '🗄️' },
        { name: 'AWS', level: 75, years: 1, projects: 3, icon: '☁️' },
        { name: 'Azure', level: 70, years: 1, projects: 2, icon: '🌤️' },
        { name: 'DynamoDB', level: 65, years: 1, projects: 2, icon: '📊' },
        { name: 'Database Design', level: 75, years: 2, projects: 4, icon: '🏛️' }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Technologies',
      icon: '🛠️',
      color: 'from-purple-500 to-indigo-500',
      skills: [
        { name: 'Git/GitHub', level: 80, years: 3, projects: 10, icon: '🐙' },
        { name: 'Visual Studio', level: 85, years: 3, projects: 8, icon: '💻' },
        { name: 'Docker', level: 60, years: 1, projects: 2, icon: '🐳' },
        { name: 'CI/CD', level: 65, years: 1, projects: 3, icon: '🔄' },
        { name: 'Agile/Scrum', level: 70, years: 2, projects: 4, icon: '🏃' }
      ]
    }
  ];

  const softSkills: SoftSkill[] = [
    { name: 'Problem Solving', level: 90, icon: '🧩' },
    { name: 'Team Collaboration', level: 85, icon: '🤝' },
    { name: 'Communication', level: 80, icon: '💬' },
    { name: 'Leadership', level: 75, icon: '👨‍💼' },
    { name: 'Time Management', level: 80, icon: '⏰' },
    { name: 'Adaptability', level: 85, icon: '🔄' }
  ];

  const getAllSkills = (): (Skill & { category: string })[] => {
    return skillCategories.flatMap(category => 
      category.skills.map(skill => ({ ...skill, category: category.name }))
    );
  };

  const getFilteredSkills = (): Skill[] => {
    if (selectedCategory === 'all') return getAllSkills();
    return skillCategories.find(cat => cat.id === selectedCategory)?.skills || [];
  };

  const SkillCard: React.FC<{ skill: Skill; category?: string }> = ({ skill, category }) => (
    <div 
      className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onMouseEnter={() => setHoveredSkill(skill)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{skill.icon}</div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">{skill.name}</h3>
            {category && (
              <p className="text-sm text-slate-500 dark:text-slate-400">{category}</p>
            )}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-slate-900 dark:text-white">{skill.level}%</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {skill.years ? `${skill.years}yr${skill.years > 1 ? 's' : ''}` : 'Proficiency'}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
          <div 
            className={`h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out ${
              animateProgress ? '' : 'w-0'
            }`}
            style={{ width: animateProgress ? `${skill.level}%` : '0%' }}
          ></div>
        </div>
      </div>

      {skill.projects && (
        <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
          <span>{skill.projects} projects</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      )}
    </div>
  );

  const SkillRadialChart: React.FC<{ skills: Skill[]; title: string }> = ({ skills, title }) => {
    const maxSkills = 6;
    const displaySkills = skills.slice(0, maxSkills);
    
    return (
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">{title}</h3>
        <div className="relative w-64 h-64 mx-auto">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {displaySkills.map((skill: Skill, index: number) => {
              const radius = 35 - (index * 5);
              const circumference = 2 * Math.PI * radius;
              const strokeDasharray = circumference;
              const strokeDashoffset = circumference * (1 - skill.level / 100);
              
              return (
                <circle
                  key={skill.name}
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke={`hsl(${220 + (index * 30)}, 70%, 60%)`}
                  strokeWidth="2"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={animateProgress ? strokeDashoffset : circumference}
                  className="transition-all duration-1000 ease-out"
                  style={{ transitionDelay: `${index * 200}ms` }}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {Math.round(displaySkills.reduce((acc: number, skill: Skill) => acc + skill.level, 0) / displaySkills.length)}%
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Average</div>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {displaySkills.map((skill: Skill, index: number) => (
            <div key={skill.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: `hsl(${220 + (index * 30)}, 70%, 60%)` }}
                ></div>
                <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
              </div>
              <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const SkillTreeNode: React.FC<{ skill: Skill; level?: number; isActive?: boolean }> = ({ skill, level = 0, isActive = false }) => (
    <div className={`relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
      isActive ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 scale-105' : 'hover:bg-white/10'
    }`}>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
          : 'bg-white/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
      }`}>
        {skill.icon}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-slate-900 dark:text-white">{skill.name}</div>
        <div className="text-sm text-slate-600 dark:text-slate-400">Level {skill.level}%</div>
      </div>
      <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
          style={{ width: animateProgress ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="pt-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Skills & Expertise
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          A comprehensive overview of my technical skills, tools, and proficiency levels
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
            selectedCategory === 'all'
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
              : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:shadow-lg'
          }`}
        >
          All Skills
        </button>
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === category.id
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:shadow-lg'
            }`}
          >
            <span>{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {selectedCategory === 'all' 
          ? getAllSkills().map((skill, index) => (
              <SkillCard key={`${skill.name}-${index}`} skill={skill} category={skill.category} />
            ))
          : getFilteredSkills().map((skill, index) => (
              <SkillCard key={`${skill.name}-${index}`} skill={skill} />
            ))
        }
      </div>

      {/* Radial Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <SkillRadialChart 
          skills={skillCategories.find(cat => cat.id === 'backend')?.skills || []} 
          title="Backend Technologies"
        />
        <SkillRadialChart 
          skills={skillCategories.find(cat => cat.id === 'frontend')?.skills || []} 
          title="Frontend Technologies"
        />
      </div>

      {/* Soft Skills */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Soft Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => (
            <div key={skill.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{skill.icon}</div>
                <h3 className="font-bold">{skill.name}</h3>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                <div 
                  className="h-3 bg-white rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: animateProgress ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
              <div className="text-right text-sm opacity-90">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Tree View */}
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Learning Path & Progression
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.slice(0, 2).map((category, categoryIndex) => (
            <div key={category.id} className="space-y-4">
              <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`}>
                {category.icon} {category.name}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillTreeNode 
                    key={skill.name}
                    skill={skill}
                    level={skillIndex}
                    isActive={hoveredSkill?.name === skill.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Summary Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {getAllSkills().length}
          </div>
          <div className="text-slate-600 dark:text-slate-400">Technical Skills</div>
        </div>
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            {Math.round(getAllSkills().reduce((acc: number, skill) => acc + skill.level, 0) / getAllSkills().length)}%
          </div>
          <div className="text-slate-600 dark:text-slate-400">Average Proficiency</div>
        </div>
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {getAllSkills().reduce((acc: number, skill) => acc + (skill.years || 0), 0)}
          </div>
          <div className="text-slate-600 dark:text-slate-400">Years Experience</div>
        </div>
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
            {getAllSkills().reduce((acc: number, skill) => acc + (skill.projects || 0), 0)}
          </div>
          <div className="text-slate-600 dark:text-slate-400">Total Projects</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
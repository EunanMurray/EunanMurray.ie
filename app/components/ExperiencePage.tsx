"use client";
import React, { useState, useEffect } from 'react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  status: string;
  icon: string;
  color: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
  highlights: Record<string, string>;
}

interface EducationMilestone {
  year: string;
  title: string;
  institution: string;
  achievements: string[];
  icon: string;
}

const ExperiencePage = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [activeTimelineItem, setActiveTimelineItem] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'timeline' | 'cards'>('timeline');

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Part-time Waiter & Host",
      company: "Luseas Restaurant, Westport Coast Hotel",
      location: "Westport, Ireland",
      duration: "Summer 2021 - Present",
      type: "Part-time",
      status: "Current",
      icon: "🏨",
      color: "from-blue-500 to-cyan-500",
      description: "Providing excellent customer service in a fast-paced hospitality environment while developing leadership and teamwork skills.",
      responsibilities: [
        "Provide excellent customer service in high-paced environment",
        "Develop strong teamwork and communication skills",
        "Train and support new staff members",
        "Manage customer orders and resolve complaints",
        "Handle hosting duties including payment processing"
      ],
      achievements: [
        "Promoted to hosting responsibilities with till training",
        "Entrusted with training new staff members",
        "Maintained high customer satisfaction ratings",
        "Developed leadership skills through mentoring role"
      ],
      skills: ["Customer Service", "Communication", "Leadership", "Team Collaboration", "Problem Solving", "Time Management"],
      highlights: {
        "Years of Service": "3+",
        "Staff Trained": "10+",
        "Customer Rating": "4.8/5",
        "Responsibilities": "Expanded"
      }
    },
    {
      id: 2,
      title: "Software Development Student",
      company: "Atlantic Technological University (ATU)",
      location: "Sligo, Ireland",
      duration: "September 2022 - Present",
      type: "Full-time Education",
      status: "Current",
      icon: "🎓",
      color: "from-purple-500 to-indigo-500",
      description: "Pursuing BSc (Honors) in Software Development with focus on full-stack development, cloud technologies, and modern programming practices.",
      responsibilities: [
        "Complete coursework in software development fundamentals",
        "Develop practical projects using various technologies",
        "Collaborate on group projects and assignments",
        "Research and learn emerging technologies",
        "Participate in academic and professional development activities"
      ],
      achievements: [
        "Web Programming (Angular) - 73%",
        "Object Oriented Development (C#) - 63%",
        "Cloud Computing - 63%",
        "Database Management (SQL) - 55%",
        "Mathematics - 53%"
      ],
      skills: ["C#/.NET", "Angular", "Java", "Python", "SQL", "AWS", "Azure", "Web Development", "Object-Oriented Programming"],
      highlights: {
        "Current Year": "3rd Year",
        "GPA": "2:1 Track",
        "Projects": "12+",
        "Technologies": "15+"
      }
    },
    {
      id: 3,
      title: "Part-time Retail Assistant",
      company: "SuperValu",
      location: "Westport, Ireland",
      duration: "2019 - 2020",
      type: "Part-time",
      status: "Completed",
      icon: "🛒",
      color: "from-green-500 to-emerald-500",
      description: "Managed retail operations in the fruit and vegetable section while developing customer service and inventory management skills.",
      responsibilities: [
        "Manage fruit and vegetable section operations",
        "Control inventory and stock levels",
        "Engage with customers and provide product recommendations",
        "Maintain product quality and presentation standards",
        "Handle cash transactions and customer inquiries"
      ],
      achievements: [
        "Managed entire fruit & vegetable section independently",
        "Developed strong customer relationship skills",
        "Improved inventory management processes",
        "Maintained high product quality standards"
      ],
      skills: ["Customer Service", "Inventory Management", "Communication", "Problem Solving", "Attention to Detail"],
      highlights: {
        "Section Managed": "Fruit & Veg",
        "Customer Satisfaction": "High",
        "Inventory Accuracy": "98%",
        "Reason for Leaving": "COVID-19"
      }
    }
  ];

  const educationMilestones: EducationMilestone[] = [
    {
      year: "2020",
      title: "Leaving Certificate",
      institution: "Rice College",
      achievements: ["Computer Science (H1)", "History (H3)", "Business (H4)"],
      icon: "📚"
    },
    {
      year: "2022",
      title: "Started BSc Software Development",
      institution: "ATU Sligo",
      achievements: ["Enrolled in Honors program", "Selected specialization tracks"],
      icon: "🎯"
    },
    {
      year: "2023",
      title: "Second Year Achievements",
      institution: "ATU Sligo",
      achievements: ["Completed major projects", "Advanced programming skills", "Cloud computing introduction"],
      icon: "🚀"
    },
    {
      year: "2024",
      title: "Third Year & Current",
      institution: "ATU Sligo",
      achievements: ["Advanced web development", "Enterprise project work", "Industry preparation"],
      icon: "⭐"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % experiences.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [experiences.length]);

  const ExperienceCard: React.FC<{ experience: Experience; isActive: boolean; onClick: () => void }> = ({ experience, isActive, onClick }) => (
    <div 
      onClick={onClick}
      className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 transition-all duration-500 cursor-pointer ${
        isActive ? 'scale-105 shadow-2xl ring-2 ring-blue-500' : 'hover:scale-105 hover:shadow-xl'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${experience.color} rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0`}>
          {experience.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">{experience.title}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              experience.status === 'Current' 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                : 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300'
            }`}>
              {experience.status}
            </span>
          </div>
          
          <div className="space-y-1 mb-3">
            <p className="font-medium text-slate-700 dark:text-slate-300">{experience.company}</p>
            <p className="text-sm text-slate-500 dark:text-slate-500">{experience.location} • {experience.duration}</p>
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
            {experience.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {experience.skills.slice(0, 4).map((skill, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-xs font-medium"
              >
                {skill}
              </span>
            ))}
            {experience.skills.length > 4 && (
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-medium">
                +{experience.skills.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const TimelineView = () => (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>
      
      {experiences.map((experience, index) => (
        <div key={experience.id} className={`relative flex gap-8 mb-12 transition-all duration-500 ${
          activeTimelineItem === index ? 'scale-105' : ''
        }`}>
          <div className={`w-16 h-16 bg-gradient-to-r ${experience.color} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10 transition-all duration-500 ${
            activeTimelineItem === index ? 'ring-4 ring-white dark:ring-slate-800' : ''
          }`}>
            {experience.icon}
          </div>
          
          <div 
            onClick={() => setSelectedExperience(experience)}
            className={`flex-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 cursor-pointer transition-all duration-300 ${
              activeTimelineItem === index ? 'shadow-2xl' : 'hover:shadow-xl'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{experience.title}</h3>
              <span className="text-sm text-slate-500 dark:text-slate-500">{experience.duration}</span>
            </div>
            
            <p className="font-medium text-slate-700 dark:text-slate-300 mb-2">{experience.company}</p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">{experience.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {Object.entries(experience.highlights).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-500">{key}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const ExperienceModal: React.FC<{ experience: Experience | null; onClose: () => void }> = ({ experience, onClose }) => {
    if (!experience) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${experience.color} rounded-2xl flex items-center justify-center text-white text-2xl`}>
                  {experience.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{experience.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400">{experience.company} • {experience.duration}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Overview</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{experience.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Key Responsibilities</h3>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                        <span className="text-blue-500 mt-1">•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Skills Developed</h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                        <span className="text-green-500 mt-1">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Highlights</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(experience.highlights).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">{value}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const EducationTimeline = () => (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Education Journey</h2>
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-blue-500"></div>
        
        {educationMilestones.map((milestone, index) => (
          <div key={index} className="relative flex gap-6 mb-8 last:mb-0">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold z-10">
              {milestone.icon}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white">{milestone.title}</h3>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  {milestone.year}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-2">{milestone.institution}</p>
              <ul className="space-y-1">
                {milestone.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                    <span className="text-green-500">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Experience & Journey
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          My professional and educational journey, showcasing growth, learning, and achievements
        </p>
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 p-1">
          <button
            onClick={() => setViewMode('timeline')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
              viewMode === 'timeline'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'text-slate-700 dark:text-slate-300'
            }`}
          >
            Timeline View
          </button>
          <button
            onClick={() => setViewMode('cards')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
              viewMode === 'cards'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'text-slate-700 dark:text-slate-300'
            }`}
          >
            Card View
          </button>
        </div>
      </div>

      {/* Experience Display */}
      {viewMode === 'timeline' ? (
        <div className="mb-16">
          <TimelineView />
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isActive={selectedExperience?.id === experience.id}
              onClick={() => setSelectedExperience(experience)}
            />
          ))}
        </div>
      )}

      {/* Education Timeline */}
      <div className="mb-16">
        <EducationTimeline />
      </div>

      {/* Experience Modal */}
      <ExperienceModal 
        experience={selectedExperience} 
        onClose={() => setSelectedExperience(null)} 
      />

      {/* Career Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Career Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">3+</div>
            <div className="text-blue-100">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">2</div>
            <div className="text-blue-100">Current Roles</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-blue-100">Skills Developed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-blue-100">Dedication</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
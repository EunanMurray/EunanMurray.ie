"use client";

import React, { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  status: string;
  year: string;
  features: string[];
  challenges: string[];
  image: string;
  color: string;
}

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterTech, setFilterTech] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');

  const projects: Project[] = [
    {
      id: 1,
      title: "Personal Project & Task Tracker",
      description: "A comprehensive C# WPF application designed for college students to manage projects, tasks, and deadlines with seamless database integration.",
      longDescription: "This desktop application serves as a dynamic calendar and project management tool specifically designed for college students. Built using C# and WPF, it features a clean, intuitive interface that allows users to create projects, add tasks with varying urgency levels, set deadlines, and attach relevant images or documents. The application integrates with a SQL database to ensure data persistence and reliability.",
      technologies: ["C#", "WPF", ".NET", "SQL", "Database Design"],
      category: "Desktop Application",
      status: "Completed",
      year: "2024",
      features: [
        "Project creation and management",
        "Task prioritization with urgency levels",
        "Deadline tracking and notifications",
        "File attachment support",
        "Database integration for data persistence",
        "Clean, student-friendly interface"
      ],
      challenges: [
        "Implementing efficient database queries",
        "Creating an intuitive user interface",
        "Managing file attachments and storage"
      ],
      image: "🗂️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Cloud Cocktail Ordering System",
      description: "AWS-based ordering system featuring dual interfaces for customers and staff, with real-time API integration and cloud database storage.",
      longDescription: "A comprehensive cloud-based ordering system built on AWS infrastructure, featuring two distinct interfaces: a customer-facing application for browsing and ordering cocktails, and a staff management interface for order processing. The system dynamically retrieves cocktail data through external API integration and stores all transaction data in DynamoDB for scalability and reliability.",
      technologies: ["AWS", "DynamoDB", "API Integration", "Serverless", "Lambda"],
      category: "Cloud Application",
      status: "Completed",
      year: "2024",
      features: [
        "Dual interface design (customer/staff)",
        "Real-time cocktail API integration",
        "AWS DynamoDB for data storage",
        "Serverless architecture with Lambda",
        "Order management and tracking",
        "Scalable cloud infrastructure"
      ],
      challenges: [
        "Managing API rate limits and reliability",
        "Implementing serverless architecture",
        "Ensuring data consistency across interfaces"
      ],
      image: "🍹",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      title: "Angular Web Application",
      description: "Full-stack Angular website with REST API integration, hosted on personal domain with modern responsive design.",
      longDescription: "A modern, responsive web application built with Angular framework, featuring full-stack capabilities with REST API integration. The application demonstrates modern web development practices including component-based architecture, reactive programming, and responsive design. Hosted on personal domain (Eunan.ie) showcasing deployment and domain management skills.",
      technologies: ["Angular", "TypeScript", "REST API", "HTML/CSS", "Cloud Hosting"],
      category: "Web Application",
      status: "Completed",
      year: "2024",
      features: [
        "Modern Angular framework implementation",
        "REST API integration and consumption",
        "Responsive design for all devices",
        "Component-based architecture",
        "Personal domain hosting (Eunan.ie)",
        "Modern UI/UX design principles"
      ],
      challenges: [
        "Implementing reactive programming patterns",
        "Managing API state and error handling",
        "Optimizing performance and loading times"
      ],
      image: "🌐",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 4,
      title: "ATU Scholarship Management System",
      description: "Currently developing a full-stack application to streamline scholarship application and review processes at ATU using .NET MVC and Azure.",
      longDescription: "An ongoing collaborative project aimed at modernizing and streamlining the scholarship application and review processes at Atlantic Technological University. Built as a full-stack application using .NET MVC framework with Azure cloud services for scalability and reliability. The system includes SQL database management for handling application data, user management, and review workflows.",
      technologies: [".NET MVC", "Azure", "SQL", "C#", "Cloud Services"],
      category: "Enterprise Application",
      status: "In Development",
      year: "2024-2025",
      features: [
        "Student application portal",
        "Administrative review interface",
        "Document upload and management",
        "Automated workflow processes",
        "Azure cloud integration",
        "Role-based access control"
      ],
      challenges: [
        "Managing complex user workflows",
        "Ensuring data security and privacy",
        "Integrating with existing university systems"
      ],
      image: "🎓",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const technologies = [
    'all', 'C#', '.NET', 'Angular', 'AWS', 'Azure', 'SQL', 'API', 'Cloud'
  ];

  const filteredProjects = filterTech === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filterTech.toLowerCase())
        )
      );

  const ProjectCard: React.FC<{ project: Project; isSelected: boolean; onClick: () => void }> = ({ project, isSelected, onClick }) => (
    <div 
      onClick={onClick}
      className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 transition-all duration-500 cursor-pointer group ${
        isSelected ? 'scale-105 shadow-2xl ring-2 ring-blue-500' : 'hover:scale-105 hover:shadow-xl'
      }`}
    >
      <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-4 group-hover:rotate-12 transition-transform duration-300`}>
        {project.image}
      </div>
      
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          project.status === 'Completed' 
            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
        }`}>
          {project.status}
        </span>
      </div>
      
      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-xs font-medium">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500 dark:text-slate-500">{project.year}</span>
        <div className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
          →
        </div>
      </div>
    </div>
  );

  const ProjectTimeline = () => (
    <div className="space-y-8">
      {filteredProjects.map((project, index) => (
        <div key={project.id} className="flex gap-8 group">
          <div className="flex flex-col items-center">
            <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
              {project.image}
            </div>
            {index < filteredProjects.length - 1 && (
              <div className="w-px h-24 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-600 mt-4"></div>
            )}
          </div>
          
          <div className="flex-1 pb-8">
            <div 
              onClick={() => setSelectedProject(project)}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <span className="text-sm text-slate-500 dark:text-slate-500">{project.year}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center text-white text-2xl`}>
                  {project.image}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{project.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400">{project.category} • {project.year}</p>
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
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Project Overview</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.longDescription}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <span className="text-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Challenges & Solutions</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <span className="text-orange-500">⚡</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

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

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-between items-center">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {technologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilterTech(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                filterTech === tech
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {tech === 'all' ? 'All Projects' : tech}
            </button>
          ))}
        </div>

        <div className="flex bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              viewMode === 'grid'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'text-slate-700 dark:text-slate-300'
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode('timeline')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              viewMode === 'timeline'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'text-slate-700 dark:text-slate-300'
            }`}
          >
            Timeline
          </button>
        </div>
      </div>

      {/* Projects Display */}
      {viewMode === 'grid' ? (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={selectedProject?.id === project.id}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      ) : (
        <ProjectTimeline />
      )}

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Stats Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">{projects.length}</div>
            <div className="text-blue-100">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">
              {[...new Set(projects.flatMap(p => p.technologies))].length}
            </div>
            <div className="text-blue-100">Technologies Used</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">2+</div>
            <div className="text-blue-100">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-blue-100">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
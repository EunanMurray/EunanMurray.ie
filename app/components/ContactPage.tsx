"use client";
import React, { useState, useEffect } from 'react';

interface ContactMethod {
  id: string;
  title: string;
  subtitle: string;
  value: string;
  icon: string;
  color: string;
  action: string | null;
  description: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  description: string;
}

interface QuickAction {
  title: string;
  description: string;
  icon: string;
  color: string;
  action: () => void;
}

interface MousePosition {
  x: number;
  y: number;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [activeContact, setActiveContact] = useState<string>('email');
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [hoveredSocial, setHoveredSocial] = useState<SocialLink | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const contactMethods: ContactMethod[] = [
    {
      id: 'email',
      title: 'Email',
      subtitle: 'Send me a message',
      value: 'eunanmurray56@gmail.com',
      icon: '📧',
      color: 'from-blue-500 to-cyan-500',
      action: 'mailto:eunanmurray56@gmail.com',
      description: 'Best for detailed inquiries and formal communications'
    },
    {
      id: 'phone',
      title: 'Phone',
      subtitle: 'Call or message',
      value: '+353 87 120 2171',
      icon: '📱',
      color: 'from-green-500 to-emerald-500',
      action: 'tel:+353871202171',
      description: 'Available during business hours for urgent matters'
    },
    {
      id: 'location',
      title: 'Location',
      subtitle: 'Based in Ireland',
      value: 'Westport, Co. Mayo',
      icon: '📍',
      color: 'from-purple-500 to-indigo-500',
      action: 'https://maps.google.com/?q=Westport,Ireland',
      description: 'Open to remote work and local opportunities'
    },
    {
      id: 'availability',
      title: 'Availability',
      subtitle: 'Work Experience',
      value: 'Seeking Opportunities',
      icon: '💼',
      color: 'from-orange-500 to-red-500',
      action: null,
      description: 'Actively looking for internships and entry-level positions'
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/eunan-murray/',
      icon: '💼',
      color: 'from-blue-600 to-blue-700',
      description: 'Professional network and career updates'
    },
    {
      name: 'GitHub',
      url: 'https://www.github.com/EunanMurray',
      icon: '🐙',
      color: 'from-gray-700 to-gray-900',
      description: 'Code repositories and open source contributions'
    },
    {
      name: 'Portfolio',
      url: 'https://eunan.ie',
      icon: '🌐',
      color: 'from-purple-600 to-indigo-600',
      description: 'Personal website and project showcase'
    }
  ];

  const quickActions: QuickAction[] = [
    {
      title: 'Download CV',
      description: 'Get my latest resume',
      icon: '📄',
      color: 'from-blue-500 to-purple-500',
      action: () => {
        // This would typically download a PDF
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
      }
    },
    {
      title: 'Schedule Meeting',
      description: 'Book a time to chat',
      icon: '📅',
      color: 'from-green-500 to-teal-500',
      action: () => window.open('mailto:eunanmurray56@gmail.com?subject=Meeting Request', '_blank')
    },
    {
      title: 'View Projects',
      description: 'See my work samples',
      icon: '🚀',
      color: 'from-orange-500 to-pink-500',
      action: () => {
        // This would navigate to projects section
        console.log('Navigate to projects');
      }
    }
  ];

  const ContactCard: React.FC<{ method: ContactMethod; isActive: boolean; onClick: () => void }> = ({ method, isActive, onClick }) => (
    <div 
      onClick={onClick}
      className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 cursor-pointer group ${
        isActive 
          ? 'border-blue-500 shadow-2xl scale-105 ring-2 ring-blue-500/20' 
          : 'border-slate-200 dark:border-slate-700 hover:shadow-xl hover:scale-105'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
          {method.icon}
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">{method.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{method.subtitle}</p>
          <p className="font-medium text-slate-800 dark:text-slate-200 mb-3">{method.value}</p>
          <p className="text-slate-500 dark:text-slate-500 text-sm">{method.description}</p>
        </div>
        
        <div className="text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          →
        </div>
      </div>
    </div>
  );

  const SocialLink: React.FC<{ social: SocialLink; onHover: (social: SocialLink) => void; onLeave: () => void }> = ({ social, onHover, onLeave }) => (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => onHover(social)}
      onMouseLeave={onLeave}
      className={`group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:scale-105`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
          {social.icon}
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white">{social.name}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">{social.description}</p>
        </div>
        <div className="ml-auto text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ↗
        </div>
      </div>
    </a>
  );

  const FloatingTooltip: React.FC<{ social: SocialLink | null; position: MousePosition }> = ({ social, position }) => {
    if (!social) return null;
    
    return (
      <div 
        className="fixed z-50 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm pointer-events-none transition-all duration-200"
        style={{
          left: position.x + 10,
          top: position.y - 40,
          transform: 'translate(0, 0)'
        }}
      >
        Visit my {social.name}
      </div>
    );
  };

  const SuccessMessage = () => (
    <div className={`fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 ${
      showSuccessMessage ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className="flex items-center gap-2">
        <span>✓</span>
        <span>CV download initiated!</span>
      </div>
    </div>
  );

  const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Create mailto link with form data
      const mailtoLink = `mailto:eunanmurray56@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoLink);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="What's this about?"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Tell me about your project or opportunity..."
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Send Message 📧
        </button>
      </form>
    );
  };

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

      {/* Contact Methods */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {contactMethods.map((method) => (
          <ContactCard
            key={method.id}
            method={method}
            isActive={activeContact === method.id}
            onClick={() => {
              setActiveContact(method.id);
              if (method.action) {
                window.open(method.action, method.action.startsWith('http') ? '_blank' : '_self');
              }
            }}
          />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className={`group bg-gradient-to-r ${action.color} rounded-2xl p-6 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {action.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{action.title}</h3>
              <p className="text-white/80">{action.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Follow Me</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {socialLinks.map((social) => (
            <SocialLink
              key={social.name}
              social={social}
              onHover={setHoveredSocial}
              onLeave={() => setHoveredSocial(null)}
            />
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h2>
          <ContactForm />
        </div>
        
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Looking for Work Experience</h3>
            <p className="mb-4">
              I'm actively seeking work experience opportunities to apply my skills in real-world projects. 
              I'm particularly interested in:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>💻</span>
                Full-stack development roles
              </li>
              <li className="flex items-center gap-2">
                <span>☁️</span>
                Cloud computing projects
              </li>
              <li className="flex items-center gap-2">
                <span>🔧</span>
                Software development internships
              </li>
              <li className="flex items-center gap-2">
                <span>🤝</span>
                Collaborative team environments
              </li>
            </ul>
          </div>
          
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Response Time</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Email</span>
                <span className="font-medium text-slate-900 dark:text-white">Within 24 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Phone</span>
                <span className="font-medium text-slate-900 dark:text-white">Same day</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">LinkedIn</span>
                <span className="font-medium text-slate-900 dark:text-white">Within 48 hours</span>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-green-800 dark:text-green-300">Available Now</span>
            </div>
            <p className="text-green-700 dark:text-green-400 text-sm">
              Ready to start immediately and contribute to your team's success
            </p>
          </div>
        </div>
      </div>

      {/* Location Map Placeholder */}
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Based in Ireland</h2>
        <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 mb-4">
          <div className="text-6xl mb-4">🇮🇪</div>
          <p className="text-slate-600 dark:text-slate-400">
            Located in Westport, Co. Mayo, Ireland
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-sm mt-2">
            Open to remote work and willing to relocate for the right opportunity
          </p>
        </div>
      </div>

      {/* Floating Tooltip */}
      <FloatingTooltip social={hoveredSocial} position={mousePosition} />
      
      {/* Success Message */}
      <SuccessMessage />
    </div>
  );
};

export default ContactPage;
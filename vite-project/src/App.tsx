// LearnwiseLanding.tsx
import React, { useState, useEffect } from 'react';

const LearnwiseLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from system preference or localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(savedDarkMode || systemPrefersDark);
  }, []);

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Features data
  const features = [
    { icon: '⚡', title: 'Project-Based Learning', description: 'Learn by building real-world applications from day one' },
    { icon: '🛠️', title: 'MERN + TypeScript', description: 'Master the most demanded tech stack with type safety' },
    { icon: '📱', title: 'Web & Mobile Dev', description: 'Build responsive web apps and cross-platform mobile applications' },
    { icon: '🎯', title: '1:1 Mentorship', description: 'Get personalized guidance from industry experts' },
    { icon: '💼', title: 'Career Support', description: 'Portfolio building, interview prep, and job placement' },
    { icon: '🔄', title: 'Latest Technologies', description: 'Always updated with the newest tools and best practices' }
  ];

  // Courses data
  const courses = [
    { title: 'MERN Stack Fundamentals', duration: '8 weeks', level: 'Beginner', projects: 5, topics: ['React + TypeScript', 'Node.js Basics', 'MongoDB CRUD', 'Express API'] },
    { title: 'Advanced Full-Stack', duration: '12 weeks', level: 'Intermediate', projects: 8, topics: ['Advanced React Patterns', 'Microservices', 'Authentication', 'Deployment'] },
    { title: 'Mobile Development', duration: '6 weeks', level: 'Intermediate', projects: 4, topics: ['React Native', 'Mobile UI/UX', 'API Integration', 'App Store Deployment'] }
  ];

  // Navigation handler
  const handleNavigation = (page: string) => {
    // In a real app, this would use React Router
    alert(`Navigating to ${page} page - This would be implemented with React Router in a full application`);
    // Example: navigate(`/${page}`);
  };

  return (
    <div className="learnwise-app">
      {/* Global Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-green: #10b981;
          --primary-green-dark: #059669;
          --primary-green-light: #34d399;
          --secondary-color: #f8fafc;
          --text-primary: #1e293b;
          --text-secondary: #64748b;
          --background: #ffffff;
          --border: #e2e8f0;
          --gradient: linear-gradient(135deg, #10b981 0%, #059669 100%);
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .dark {
          --primary-green: #34d399;
          --primary-green-dark: #10b981;
          --primary-green-light: #6ee7b7;
          --secondary-color: #1e293b;
          --text-primary: #f1f5f9;
          --text-secondary: #cbd5e1;
          --background: #0f172a;
          --border: #334155;
          --gradient: linear-gradient(135deg, #34d399 0%, #10b981 100%);
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: var(--text-primary);
          background: var(--background);
          overflow-x: hidden;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .btn-primary {
          background: var(--gradient);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-primary);
          border: 2px solid var(--border);
        }

        .btn-secondary:hover {
          border-color: var(--primary-green);
          color: var(--primary-green);
        }

        .btn-outline {
          background: transparent;
          border: 2px solid var(--primary-green);
          color: var(--primary-green);
        }

        .btn-outline:hover {
          background: var(--primary-green);
          color: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 16px;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-header p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .gradient-text {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Header Styles */
        .header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .dark .header {
          background: rgba(15, 23, 42, 0.95);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
        }

        .logo-icon {
          font-size: 1.8rem;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 500;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-links a:hover {
          color: var(--primary-green);
        }

        .nav-cta {
          margin-left: 16px;
        }

        .dark-toggle {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          transition: background 0.3s ease;
        }

        .dark-toggle:hover {
          background: var(--border);
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          gap: 4px;
        }

        .menu-toggle span {
          width: 25px;
          height: 3px;
          background: var(--text-primary);
          transition: 0.3s;
        }

        /* Hero Styles */
        .hero {
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
          transition: background 0.3s ease;
        }

        .dark .hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat strong {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-green);
        }

        .stat span {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
        }

        .code-window {
          background: #1a1b26;
          border-radius: 12px;
          padding: 16px;
          box-shadow: var(--shadow-lg);
          max-width: 400px;
          width: 100%;
        }

        .window-header {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .window-dots span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ff5f57;
        }

        .window-dots span:nth-child(2) {
          background: #ffbd2e;
        }

        .window-dots span:nth-child(3) {
          background: #28ca42;
        }

        .code-content {
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
          color: #f8f8f2;
        }

        .code-line {
          margin-bottom: 4px;
        }

        .indent {
          margin-left: 20px;
        }

        .double-indent {
          margin-left: 40px;
        }

        .code-keyword {
          color: #ff79c6;
        }

        .code-string {
          color: #f1fa8c;
        }

        .code-class {
          color: #8be9fd;
        }

        .code-property {
          color: #50fa7b;
        }

        .code-function {
          color: #ffb86c;
        }

        .code-operator {
          color: #ff79c6;
        }

        .code-tag {
          color: #ff79c6;
        }

        /* Features Styles */
        .features {
          padding: 80px 0;
          background: var(--background);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .feature-card {
          background: var(--background);
          padding: 40px 32px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          box-shadow: var(--shadow);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-green);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
          color: var(--text-primary);
        }

        .feature-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Courses Styles */
        .courses {
          padding: 80px 0;
          background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
          transition: background 0.3s ease;
        }

        .dark .courses {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
        }

        .course-card {
          background: var(--background);
          padding: 32px;
          border-radius: 12px;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
          border: 1px solid var(--border);
        }

        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .course-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .course-header h3 {
          font-size: 1.5rem;
          margin-right: 16px;
        }

        .level-badge {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .level-beginner {
          background: #d1fae5;
          color: #065f46;
        }

        .dark .level-beginner {
          background: #064e3b;
          color: #a7f3d0;
        }

        .level-intermediate {
          background: #fef3c7;
          color: #92400e;
        }

        .dark .level-intermediate {
          background: #78350f;
          color: #fcd34d;
        }

        .course-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
          color: var(--text-secondary);
        }

        .course-topics h4 {
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .course-topics ul {
          list-style: none;
          margin-bottom: 24px;
        }

        .course-topics li {
          padding: 8px 0;
          border-bottom: 1px solid var(--border);
          position: relative;
          padding-left: 20px;
        }

        .course-topics li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-green);
          font-weight: bold;
        }

        /* Projects Styles */
        .projects {
          padding: 80px 0;
          background: var(--background);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .project-card {
          background: var(--background);
          padding: 32px;
          border-radius: 12px;
          text-align: center;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
          border: 1px solid var(--border);
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .project-image {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        .project-card h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
          color: var(--text-primary);
        }

        .project-card p {
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }

        .tech-tag {
          background: var(--secondary-color);
          color: var(--primary-green);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .dark .tech-tag {
          background: #1e293b;
        }

        /* Testimonials Styles */
        .testimonials {
          padding: 80px 0;
          background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
          transition: background 0.3s ease;
        }

        .dark .testimonials {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .testimonial-card {
          background: var(--background);
          padding: 32px;
          border-radius: 12px;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .testimonial-content {
          font-style: italic;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .testimonial-avatar {
          font-size: 2.5rem;
        }

        .author-info h4 {
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .author-info p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        /* Footer Styles */
        .footer {
          background: var(--text-primary);
          color: white;
          padding: 60px 0 30px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-column h3 {
          margin-bottom: 20px;
          font-size: 1.2rem;
        }

        .footer-column ul {
          list-style: none;
        }

        .footer-column li {
          margin-bottom: 12px;
        }

        .footer-column a {
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .footer-column a:hover {
          color: white;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid #334155;
          color: #94a3b8;
        }

        /* Responsive Styles */
        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-stats {
            justify-content: center;
          }

          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--background);
            flex-direction: column;
            padding: 20px;
            border-top: 1px solid var(--border);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-links-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .hero-buttons {
            flex-direction: column;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 20px;
          }

          .section-header h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <a className="logo" onClick={() => handleNavigation('home')}>
              <span className="logo-icon"></span>
              <span className="logo-text">Learnwise</span>
            </a>
            
            <nav className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
              <a onClick={() => handleNavigation('courses')}>Courses</a>
              <a onClick={() => handleNavigation('projects')}>Projects</a>
              <a onClick={() => handleNavigation('about')}>About</a>
              <a onClick={() => handleNavigation('contact')}>Contact</a>
              <button className="dark-toggle" onClick={toggleDarkMode}>
                {darkMode ? '☀️' : '🌙'}
              </button>
              <a className="btn btn-primary nav-cta" onClick={() => handleNavigation('signup')}>Get Started</a>
            </nav>

            <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
              <button className="dark-toggle" onClick={toggleDarkMode} style={{display: window.innerWidth > 768 ? 'block' : 'none'}}>
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button 
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Master <span className="gradient-text">MERN Stack</span> with 
                <span className="gradient-text"> Real Projects</span>
              </h1>
              <p className="hero-subtitle">
                Become a full-stack developer by building production-ready applications. 
                Learn MongoDB, Express.js, React with TypeScript, and Node.js through 
                hands-on projects that prepare you for the real world.
              </p>
              <div className="hero-buttons">
                <a className="btn btn-primary" onClick={() => handleNavigation('signup')}>Start Learning Free</a>
                <a className="btn btn-secondary" onClick={() => handleNavigation('courses')}>View Curriculum</a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <strong>2,000+</strong>
                  <span>Students</span>
                </div>
                <div className="stat">
                  <strong>50+</strong>
                  <span>Real Projects</span>
                </div>
                <div className="stat">
                  <strong>98%</strong>
                  <span>Job Success</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="code-keyword">import</span>
                    <span className="code-text"> React from </span>
                    <span className="code-string">'react'</span>;
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">interface</span>
                    <span className="code-class"> Props </span>
                    {'{'}
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">title</span>: <span className="code-string">string</span>;
                  </div>
                  <div className="code-line">{'}'}</div>
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-function"> App</span> = () 
                    <span className="code-operator"> =&gt; </span>
                    {'('}
                  </div>
                  <div className="code-line indent">
                    <span className="code-keyword">return</span> &lt;<span className="code-tag">div</span>&gt;
                  </div>
                  <div className="code-line double-indent">
                    &lt;<span className="code-tag">h1</span>&gt;
                    <span className="code-text">Hello World</span>
                    &lt;/<span className="code-tag">h1</span>&gt;
                  </div>
                  <div className="code-line indent">&lt;/<span className="code-tag">div</span>&gt;</div>
                  <div className="code-line">{');'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Learnwise?</h2>
            <p>We provide everything you need to become a professional full-stack developer</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <div className="container">
          <div className="section-header">
            <h2>Our Courses</h2>
            <p>Structured learning paths with increasing complexity</p>
          </div>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-header">
                  <h3>{course.title}</h3>
                  <span className={`level-badge level-${course.level.toLowerCase()}`}>
                    {course.level}
                  </span>
                </div>
                <div className="course-meta">
                  <span>📅 {course.duration}</span>
                  <span>🛠️ {course.projects} Projects</span>
                </div>
                <div className="course-topics">
                  <h4>What You'll Learn:</h4>
                  <ul>
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <a className="btn btn-outline" style={{width: '100%'}} onClick={() => handleNavigation('course-details')}>View Details</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of students who have transformed their careers with Learnwise</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <a className="btn btn-primary" style={{fontSize: '1.2rem', padding: '16px 32px'}} onClick={() => handleNavigation('signup')}>
              Enroll Now - Start for Free
            </a>
            <p style={{marginTop: '20px', color: 'var(--text-secondary)'}}>
              No credit card required • 7-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <a className="logo" style={{color: 'white', marginBottom: '20px', display: 'block'}} onClick={() => handleNavigation('home')}>
                <span className="logo-icon">🚀</span>
                <span className="logo-text">Learnwise</span>
              </a>
              <p style={{color: '#cbd5e1', marginBottom: '20px'}}>
                Master the MERN stack with TypeScript through project-based learning. 
                Build real applications and launch your tech career.
              </p>
              <a className="btn btn-primary" onClick={() => handleNavigation('signup')}>Start Learning Today</a>
            </div>
            <div className="footer-column">
              <h3>Courses</h3>
              <ul>
                <li><a onClick={() => handleNavigation('mern-fundamentals')}>MERN Fundamentals</a></li>
                <li><a onClick={() => handleNavigation('advanced-fullstack')}>Advanced Full-Stack</a></li>
                <li><a onClick={() => handleNavigation('mobile-development')}>Mobile Development</a></li>
                <li><a onClick={() => handleNavigation('typescript-mastery')}>TypeScript Mastery</a></li>
                <li><a onClick={() => handleNavigation('all-courses')}>All Courses</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a onClick={() => handleNavigation('blog')}>Blog</a></li>
                <li><a onClick={() => handleNavigation('documentation')}>Documentation</a></li>
                <li><a onClick={() => handleNavigation('community')}>Community</a></li>
                <li><a onClick={() => handleNavigation('career-support')}>Career Support</a></li>
                <li><a onClick={() => handleNavigation('faq')}>FAQ</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a onClick={() => handleNavigation('about')}>About Us</a></li>
                <li><a onClick={() => handleNavigation('contact')}>Contact</a></li>
                <li><a onClick={() => handleNavigation('careers')}>Careers</a></li>
                <li><a onClick={() => handleNavigation('privacy')}>Privacy Policy</a></li>
                <li><a onClick={() => handleNavigation('terms')}>Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Learnwise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearnwiseLanding;
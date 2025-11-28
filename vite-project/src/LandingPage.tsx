import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/LandingPage.css';

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(savedDarkMode || systemPrefersDark);
  }, []);

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

  const features = [
    { icon: '⚡', title: 'Project-Based Learning', description: 'Learn by building real-world applications from day one' },
    { icon: '🛠️', title: 'MERN + TypeScript', description: 'Master the most demanded tech stack with type safety' },
    { icon: '📱', title: 'Web & Mobile Dev', description: 'Build responsive web apps and cross-platform mobile applications' },
    { icon: '🎯', title: '1:1 Mentorship', description: 'Get personalized guidance from industry experts' },
    { icon: '💼', title: 'Career Support', description: 'Portfolio building, interview prep, and job placement' },
    { icon: '🔄', title: 'Latest Technologies', description: 'Always updated with the newest tools and best practices' }
  ];

  const courses = [
    { title: 'MERN Stack Fundamentals', duration: '8 weeks', level: 'Beginner', projects: 5, topics: ['React + TypeScript', 'Node.js Basics', 'MongoDB CRUD', 'Express API'] },
    { title: 'Advanced Full-Stack', duration: '12 weeks', level: 'Intermediate', projects: 8, topics: ['Advanced React Patterns', 'Microservices', 'Authentication', 'Deployment'] },
    { title: 'Mobile Development', duration: '6 weeks', level: 'Intermediate', projects: 4, topics: ['React Native', 'Mobile UI/UX', 'API Integration', 'App Store Deployment'] }
  ];

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <Link to="/" className="logo">
              <span className="logo-icon"></span>
              <span className="logo-text">Learnwise</span>
            </Link>
            
            <nav className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
              <Link to="/">Home</Link>
              <a href="#courses">Courses</a>
              <a href="#features">Features</a>
              <a href="#testimonials">Success Stories</a>
              <button className="dark-toggle" onClick={toggleDarkMode}>
                {darkMode ? '☀️' : '🌙'}
              </button>
              <Link to="/login" className="btn btn-secondary">Login</Link>
              <Link to="/register" className="btn btn-primary nav-cta">Get Started</Link>
            </nav>

            <div className="nav-controls">
              <button className="dark-toggle" onClick={toggleDarkMode}>
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
                <Link to="/register" className="btn btn-primary">Start Learning Free</Link>
                <a href="#courses" className="btn btn-secondary">View Curriculum</a>
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
      <section id="features" className="features">
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
      <section id="courses" className="courses">
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
                <Link to="/register" className="btn btn-outline">Enroll Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of students who have transformed their careers with Learnwise</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">Start Learning Free</Link>
              <Link to="/login" className="btn btn-secondary">Already have an account? Login</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <Link to="/" className="logo">
                <span className="logo-icon">🚀</span>
                <span className="logo-text">Learnwise</span>
              </Link>
              <p>Master the MERN stack with TypeScript through project-based learning.</p>
              <div className="social-links">
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Courses</h3>
              <ul>
                <li><a href="#">MERN Fundamentals</a></li>
                <li><a href="#">Advanced Full-Stack</a></li>
                <li><a href="#">Mobile Development</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
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

export default LandingPage;
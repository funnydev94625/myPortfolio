import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Briefcase, GraduationCap, Award, Database, Layout, Smartphone, Cloud, RefreshCcw, Layers, Clock, LineChart, CreditCard, Asterisk, MessageCircle, Wind, Box, Trees, TerminalSquare, ServerIcon, Brain, Ship, Send, GitBranch, PenTool, Code, ShieldCheck } from 'lucide-react';

function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-blue-600">JD</a>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dmytro Shevchenko</h3>
            <p className="text-blue-200">Full Stack Developer & UI/UX Enthusiast based in Zaporizhzhia, Ukraine 📍</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-blue-200 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-blue-200 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
          <p>© 2025 Dmytro Shevchenko. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      tags: ["React", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "AI Dashboard",
      description: "Analytics dashboard with machine learning insights",
      tags: ["Python", "TensorFlow", "React"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Social Media App",
      description: "Mobile-first social platform for creative professionals",
      tags: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const achievements = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "5+ Years Experience",
      description: "In full-stack development"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Master's Degree",
      description: "In Computer Science"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "15+ Projects",
      description: "Delivered successfully"
    }
  ];

  const skills_frontend = {
    frontend: [
      { name: "React/Next.js", level: 95, icon: <Layout className="w-5 h-5" /> },
      { name: "TypeScript", level: 90, icon: <Code2 className="w-5 h-5" /> },
      { name: "UI/UX Design", level: 85, icon: <Palette className="w-5 h-5" /> },
      { name: "React Native", level: 80, icon: <Smartphone className="w-5 h-5" /> },
      { name: "Redux", level: 80, icon: <RefreshCcw className="w-5 h-5" /> }
    ],
    'third party/library': [
      { name: "Lodash", level: 92, icon: <Layers className="w-5 h-5" /> },
      { name: "Moment", level: 88, icon: <Clock className="w-5 h-5" /> },
      { name: "React Chart", level: 85, icon: <LineChart className="w-5 h-5" /> },
      { name: "Paypal/Stripe", level: 82, icon: <CreditCard className="w-5 h-5" /> },
      { name: "Chakra UI", level: 82, icon: <Cloud className="w-5 h-5" /> }
    ],
    'UI library': [
      { name: "Material UI", level: 88, icon: <Palette className="w-5 h-5" /> },
      { name: "Antd", level: 85, icon: <Asterisk className="w-5 h-5" /> },
      { name: "SemanticUi", level: 90, icon: <MessageCircle className="w-5 h-5" /> },
      { name: "Tailwind CSS with Shad CN", level: 92, icon: <Wind className="w-5 h-5" /> },
      { name: "Bootstrap 4&5 with Reactstrap", level: 92, icon: <Box className="w-5 h-5" /> }
    ]
  };

  const skills_backend = {
    backend: [
      { name: "Node.js", level: 95, icon: <Trees className="w-5 h-5" /> },
      { name: "Django", level: 90, icon: <TerminalSquare className="w-5 h-5" /> },
      { name: "Express", level: 85, icon: <ServerIcon className="w-5 h-5" /> },
      { name: "MongoDB", level: 80, icon: <Database className="w-5 h-5" /> },
      { name: "PostgreSQL", level: 85, icon: <Database className="w-5 h-5" /> },
      { name: "OpenAI", level: 85, icon: <Brain className="w-5 h-5" /> },
    ],
    'Others': [
      { name: "Docker", level: 92, icon: <Ship className="w-5 h-5" /> },
      { name: "Postman", level: 88, icon: <Send className="w-5 h-5" /> },
      { name: "Git", level: 85, icon: <GitBranch className="w-5 h-5" /> },
      { name: "Figma", level: 82, icon: <PenTool className="w-5 h-5" /> },
      { name: "VS code", level: 82, icon: <Code className="w-5 h-5" /> },
      { name: "ESLint", level: 82, icon: <ShieldCheck className="w-5 h-5" /> }
    ],
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <header
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-2 px-4 bg-blue-100/20 backdrop-blur-sm rounded-full text-white font-medium mb-6">
              Welcome to my portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hello, I’m Dmytro Shevchenko 👋
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              <b>Senior React & Next.js Developer | MERN Stack Expert</b><br/>
              I build fast, responsive, and scalable web and mobile applications that turn ideas into reality. Let’s bring your vision to life!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/80 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </header>

      {/* Summary Section */}
      <section
        className="relative py-24"
        id="about"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-center text-3xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
              <p className="text-lg text-gray-700">
                Hi there! I’m Dmytro Shevchenko, a passionate Senior React & Next.js Developer with extensive experience in modern frontend and full-stack development. Over the years, I’ve successfully delivered robust, user-friendly websites and mobile apps across industries like SaaS, E-commerce, Healthcare, Fintech, Real Estate, Gaming, and more.<br/><br/>

                My expertise includes React.js, Next.js, TypeScript, Node.js, GraphQL, MongoDB, PostgreSQL, and UI libraries such as Material UI and Tailwind CSS. I’m also skilled in integrating APIs, handling payments (PayPal, Stripe), and deploying scalable applications using Docker and cloud infrastructures.<br/><br/>

                I love solving complex problems with clean, maintainable code and exceptional user experiences. Ready to build something amazing together? Let’s connect!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="group p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{achievement.title}</h3>
                  <p className="text-gray-600 text-center">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="relative py-24"
        id="skills"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=2072")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-900/95 to-black/95"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-center text-white">Frontend Development</h3>
              <div className="space-y-6">
                {skills_frontend.frontend.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-blue-400">{skill.icon}</span>
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="ml-auto text-sm text-blue-200">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-sky-400 group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-center text-white">Third-party/Library</h3>
              <div className="space-y-6">
                {skills_frontend['third party/library'].map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-blue-400">{skill.icon}</span>
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="ml-auto text-sm text-blue-200">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-sky-400 group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-center text-white">UI Library</h3>
              <div className="space-y-6">
                {skills_frontend['UI library'].map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-blue-400">{skill.icon}</span>
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="ml-auto text-sm text-blue-200">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-sky-400 group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-20 h-1 mx-auto rounded-full mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-center text-white">Backend Development</h3>
              <div className="space-y-6">
                {skills_backend.backend.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-blue-400">{skill.icon}</span>
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="ml-auto text-sm text-blue-200">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-sky-400 group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-center text-white">Others</h3>
              <div className="space-y-6">
                {skills_backend.Others.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-blue-400">{skill.icon}</span>
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="ml-auto text-sm text-blue-200">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-sky-400 group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="relative py-24"
        id="projects"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1483817101829-339b08e8d83f?auto=format&fit=crop&q=80&w=2072")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="relative py-24"
        id="contact"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2072")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-black/95"></div>
        <div className="container mx-auto px-4 relative text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">Let's Connect</h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-blue-200 mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Let's create something amazing together!
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
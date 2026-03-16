import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, Twitter, ExternalLink, Code2, Terminal, Database, Layout, Server, ChevronRight, ChevronDown } from 'lucide-react';

const App = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Languages', 'Frontend', 'Backend', 'Databases', 'Tools']);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const projects = [
    {
      title: 'ExamFlow',
      desc: 'Premium study planner for students to organize their exams, track progress, and manage study materials efficiently.',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
      link: '#'
    },
    {
      title: 'Tafseel Al Quran',
      desc: 'Interactive cultural and religious application providing deep insights and translations of the Holy Quran.',
      tags: ['Audio', 'Web', 'Quran API'],
      image: 'https://images.unsplash.com/photo-1548048026-5a1a941d93d3?auto=format&fit=crop&w=600&q=80',
      link: '#'
    },
    {
      title: 'ChertNode',
      desc: 'Minecraft servers hosting platform with automated deployment and management tools.',
      tags: ['Python', 'Flask', 'Docker'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
      link: '#'
    },
    {
      title: 'ProtectX',
      desc: 'Discord anti-crash bot designed to protect servers from malicious attacks and spam.',
      tags: ['Discord.js', 'Node.js', 'Redis'],
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=600&q=80',
      link: '#'
    },
    {
      title: 'Kahoot Answers Viewer',
      desc: 'Educational tool for viewing and analyzing Kahoot quiz answers in real-time.',
      tags: ['JavaScript', 'WebSockets', 'Extension'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
      link: '#'
    }
  ];

  const skills = [
    { category: 'Languages', icon: <Code2 size={20} />, items: ['TypeScript', 'JavaScript', 'Python', 'HTML/CSS'] },
    { category: 'Frontend', icon: <Layout size={20} />, items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', icon: <Server size={20} />, items: ['Node.js', 'Express', 'Flask', 'REST APIs'] },
    { category: 'Databases', icon: <Database size={20} />, items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'] },
    { category: 'Tools', icon: <Terminal size={20} />, items: ['Git', 'Docker', 'Linux', 'Vite'] }
  ];

  return (
    <div className="min-h-screen bg-transparent text-slate-800 font-sans selection:bg-violet-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            className="font-mono font-bold text-xl tracking-tighter flex items-center gap-2 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => scrollTo('home')}
          >
            <div className="relative">
              <img src="/logo.svg" alt="rehan97 logo" className="w-9 h-9 transition-transform group-hover:rotate-12" />
              <div className="absolute inset-0 bg-violet-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
            </div>
            <span className="text-slate-900 font-peace text-2xl group-hover:text-violet-600 transition-colors">rehan97</span>
          </motion.div>
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-violet-600 ${activeSection === link.id ? 'text-violet-600' : 'text-slate-600'}`}
              >
                <span className="text-violet-500/50 mr-1">#</span>
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center items-start relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="font-mono text-violet-600 mb-4">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-4">
              Rehan Ahmad.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-600 tracking-tight mb-8">
              I build things for the web.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl">
              I'm a web designer and full-stack developer focused on building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products and purpose-driven applications.
            </p>
            <div className="flex gap-4">
              <button onClick={() => scrollTo('projects')} className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                Check out my work <ChevronRight size={18} />
              </button>
              <button onClick={() => scrollTo('contact')} className="px-6 py-3 bg-transparent border border-slate-300 hover:border-violet-500 hover:text-violet-600 text-slate-700 font-medium rounded-lg transition-colors">
                Contact me
              </button>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100"><span className="text-violet-500 font-mono text-2xl mr-2">#</span>projects</h2>
              <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white/50 border border-slate-200 rounded-xl overflow-hidden hover:border-violet-300 transition-colors flex flex-col"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10"></div>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-violet-600 bg-violet-100 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">{project.title}</h3>
                    <p className="text-sm text-slate-600 mb-6 flex-grow">{project.desc}</p>
                    <div className="flex gap-4 mt-auto">
                      <a href={project.link} className="text-sm font-medium text-slate-700 hover:text-violet-600 flex items-center gap-1 transition-colors">
                        Live Demo <ExternalLink size={14} />
                      </a>
                      <a href="#" className="text-sm font-medium text-slate-700 hover:text-violet-600 flex items-center gap-1 transition-colors">
                        Source <Github size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100"><span className="text-violet-500 font-mono text-2xl mr-2">#</span>skills</h2>
              <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/50 border border-slate-200 rounded-xl p-6 hover:border-violet-300 transition-colors"
                >
                  <div 
                    className="flex items-center gap-3 mb-4 text-slate-900 cursor-pointer"
                    onClick={() => toggleCategory(skillGroup.category)}
                  >
                    <div className="p-2 bg-slate-100 rounded-lg text-violet-600">
                      {skillGroup.icon}
                    </div>
                    <h3 className="font-bold text-lg">{skillGroup.category}</h3>
                    <ChevronDown 
                      className={`ml-auto transition-transform ${expandedCategories.includes(skillGroup.category) ? 'rotate-180' : ''}`} 
                      size={18} 
                    />
                  </div>
                  <AnimatePresence>
                    {expandedCategories.includes(skillGroup.category) && (
                      <motion.ul 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-2 overflow-hidden"
                      >
                        {skillGroup.items.map(item => (
                          <li key={item} className="text-slate-600 flex items-center gap-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500/50"></span>
                            {item}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100"><span className="text-violet-500 font-mono text-2xl mr-2">#</span>about-me</h2>
              <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-slate-400 leading-relaxed">
                <p>
                  Hello! I'm Rehan, a self-taught full-stack developer based in India. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                </p>
                <p>
                  My journey in web development started with a curiosity about how websites work. Fast-forward to today, and I've had the privilege of building various projects, from study planners like <em>ExamFlow</em> to cultural applications like <em>Tafseel Al Quran</em>.
                </p>
                <p>
                  I'm deeply committed to <strong>Purpose-Driven Development</strong>. Beyond technical complexity, I believe in building platforms that matter, technology that empowers and educates.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto relative group">
                  <div className="absolute inset-0 border-2 border-violet-500 rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                  <div className="absolute inset-0 bg-slate-800 rounded-xl overflow-hidden relative z-10">
                    <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80" alt="Rehan Ahmad" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-violet-500/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="font-mono text-violet-400 mb-4">What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
            <p className="text-slate-400 mb-10">
              I'm currently looking for new freelance opportunities or full-time roles. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:rehan515ahmad@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-violet-500 text-violet-400 hover:bg-violet-500/10 font-medium rounded-lg transition-colors">
              <Mail size={18} /> Say Hello
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors"><Github size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors"><Twitter size={20} /></a>
        </div>
        <p className="text-slate-500 font-mono text-sm">
          Designed & Built by Rehan Ahmad
        </p>
      </footer>
    </div>
  );
};

export default App;

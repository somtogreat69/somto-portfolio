
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AUTOMATION_PROJECTS, MOBILE_APPS } from './constants';
import { Project } from './types';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { 
  Zap, 
  Code2, 
  Cpu, 
  Smartphone, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone,
  ArrowRight,
  ChevronDown,
  Check,
  Terminal,
  Activity
} from 'lucide-react';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // --- PASTE THIS BLOCK AT LINE 27 ---
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.currentTarget);

    try {
      // Using the AJAX endpoint prevents the redirect
      await fetch("https://formsubmit.co/ajax/somtogreat69@gmail.com", {
        method: "POST",
        body: formData,
      });
      setFormStatus('success');
      e.currentTarget.reset(); 
    } catch (error) {
      console.error("Error submitting form", error);
      setFormStatus('idle');
    }
  };
  // -----------------------------------
  const handleViewLogic = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200 bg-slate-950">
      {/* Engineering Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center font-black text-slate-950 group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.4)]">S</div>
            <span className="font-bold text-white tracking-tighter">SOMTO GREAT</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <button onClick={() => scrollToSection('automation')} className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px] mono">01. Automation</button>
            <button onClick={() => scrollToSection('mobile')} className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px] mono">02. Mobile Apps</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px] mono">03. Hire Me</button>
          </div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/20 rounded-lg text-xs font-bold uppercase tracking-widest transition-all hover:glow-blue"
          >
            Start Project
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-cyan-500/20 blur-[180px] rounded-full" />
          <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-emerald-500/10 blur-[180px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
              Somto Great<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Automation Architect
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
              Specializing in <span className="text-white font-semibold">AI Agents</span>, Custom Automation <span className="text-white font-semibold mono">(Make/n8n/zapier)</span>, and high-performance Mobile App Development.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 bg-slate-900/40 backdrop-blur-md border-l-4 border-cyan-500 rounded-r-2xl mb-10 max-w-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-5"><Terminal size={80} /></div>
              <h3 className="text-cyan-500 font-bold uppercase tracking-widest text-[10px] mb-2 mono">Mission Objective</h3>
              <p className="text-slate-200 italic font-medium text-xl leading-snug">
                "My mission is simple: to turn your vision into a digital experience that drives results."
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('automation')}
                className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-3 group"
              >
                Automate Your Business <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('mobile')}
                className="px-10 py-5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-700 flex items-center gap-2"
              >
                View Mobile Apps
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl group">
              <img 
                src="/somto-portfolio/somto.jpg" 
                alt="Somto Great" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-800 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i*123}`} alt="client" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">50+ Global Clients</p>
                    <p className="text-cyan-400 text-[10px] font-bold uppercase mono">High Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tech Floaties */}
           
          </motion.div>
        </div>

        <div className="mt-24 flex justify-center">
           <motion.button 
             animate={{ y: [0, 8, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             onClick={() => scrollToSection('automation')} 
             className="text-slate-700 hover:text-cyan-400 transition-colors p-2"
           >
              <ChevronDown size={40} strokeWidth={1} />
           </motion.button>
        </div>
      </section>

      {/* AI Automation Portfolio */}
      <section id="automation" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-cyan-500/50" />
              <span className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px] mono">The Logic Engine</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              AI & Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Automation</span>
            </h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                Complex systems simplified into seamless logic. These scenarios eliminate manual overhead, allowing your business to scale without the headcount.
              </p>
             
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AUTOMATION_PROJECTS.map((project, idx) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onViewLogic={handleViewLogic}
                className={idx === 3 ? "md:col-span-2" : idx === 4 ? "md:col-span-1 lg:col-span-1" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Development Portfolio */}
      <section id="mobile" className="py-32 bg-slate-900/10 border-y border-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-24">
            <span className="text-emerald-400 text-xs font-bold tracking-[0.5em] uppercase mono mb-6 flex items-center gap-3">
              <Smartphone size={18} /> High Fidelity Prototypes
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">Mobile Engineering</h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              Performance-first mobile solutions that don't compromise on aesthetics. Built with Flutter and scaled with modern backend architectures.
            </p>
          </div>

          {MOBILE_APPS.map((app) => (
            <div key={app.id} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative flex justify-center"
              >
                {/* iPhone Mockup Frame */}
                <div className="relative w-[300px] h-[620px] bg-slate-950 rounded-[3.5rem] border-[12px] border-slate-800 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-slate-800 rounded-b-3xl z-20" />
                  <img src={app.image} alt={app.name} className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Glowing Backlight */}
                <div className="absolute -z-10 w-80 h-80 bg-emerald-500/10 blur-[120px] rounded-full top-1/2 -translate-y-1/2" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div>
                  <h3 className="text-6xl font-black text-white mb-4 tracking-tighter">{app.name}</h3>
                  <div className="h-1 w-20 bg-emerald-500 mb-6" />
                  <p className="text-emerald-400 font-bold text-xl mono tracking-wide">{app.tagline}</p>
                </div>
                
                <p className="text-slate-300 text-xl leading-relaxed bg-slate-900/60 backdrop-blur-sm p-8 rounded-3xl border border-slate-800">
                  {app.overview}
                </p>

                <div className="space-y-6">
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Core Features
                  </h4>
                  <ul className="grid grid-cols-1 gap-5">
                    {app.features.map((feature, i) => (
                      <li key={i} className="flex gap-4 text-slate-400 group">
                        <div className="mt-1 w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[10px] font-bold text-emerald-400 mono shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                          {i+1}
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-10 border-t border-slate-800">
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mono mb-6">Development Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {app.techStack.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-slate-900 text-emerald-400 border border-emerald-500/10 rounded-xl text-xs font-bold mono shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Interaction Form */}
      <section id="contact" className="py-32 bg-slate-950 relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Tell me your <span className="text-cyan-400">bottleneck.</span></h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Every manual process is a growth leak. Let's engineer a solution that works while you sleep.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-emerald-500" />
       <form onSubmit={handleFormSubmit} className="space-y-8">
  {/* HIDDEN CONFIGURATION (Crucial for FormSubmit) */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_subject" value="New Project Inquiry - Somto Portfolio" />

  {/* Note: Change the _next link above to your live website URL (e.g. https://yourname.github.io/portfolio) once you host it! */}

  {/* 1. Name Input */}
  <div className="space-y-3">
    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mono ml-1">Identity / Full Name</label>
    <input 
      type="text" 
      name="name" 
      placeholder="E.g. Elon Musk"
      required
      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-5 text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500 transition-all focus:ring-4 focus:ring-cyan-500/10"
    />
  </div>

  {/* 2. Email Input */}
  <div className="space-y-3">
    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mono ml-1">Communication / Email</label>
    <input 
      type="email" 
      name="email" 
      placeholder="name@visionary.com"
      required
      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-5 text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500 transition-all focus:ring-4 focus:ring-cyan-500/10"
    />
  </div>

  {/* 3. Service Dropdown */}
  <div className="space-y-3">
    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mono ml-1">Project Classification</label>
    <div className="relative">
      <select 
        name="service_domain" 
        className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-cyan-500 transition-all appearance-none cursor-pointer hover:border-slate-700"
      >
        <option>I need Automation Systems</option>
        <option>I need a Mobile App</option>
        <option>Full Stack Overhaul</option>
        <option>AI Strategy Consultation</option>
        <option>Other</option>
      </select>
      {/* Custom Arrow Icon */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
        <ChevronDown size={20} />
      </div>
    </div>
  </div>

  {/* 4. Message Input */}
  <div className="space-y-3">
    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mono ml-1">Technical Brief / App Idea</label>
    <textarea 
      name="message" 
      rows={6}
      placeholder="Describe your manual bottleneck or the core functionality of your app idea..."
      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-5 text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500 transition-all resize-none focus:ring-4 focus:ring-cyan-500/10"
    ></textarea>
  </div>

  {/* Submit Button */}
  <button 
            type="submit" 
            disabled={formStatus !== 'idle'}
            className={`w-full py-5 rounded-2xl font-bold text-slate-950 text-lg transition-all flex items-center justify-center gap-3 tracking-wide
              ${formStatus === 'success' 
                ? 'bg-emerald-500 cursor-default' 
                : 'bg-gradient-to-r from-cyan-500 to-emerald-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] group'
              }
              ${formStatus === 'sending' ? 'opacity-80 cursor-wait' : ''}
            `}
          >
            {formStatus === 'idle' && (
              <>
                INITIATE PROJECT PROTOCOL
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}

            {formStatus === 'sending' && (
              <>
                <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                SENDING REQUEST...
              </>
            )}

            {formStatus === 'success' && (
              <>
                <Check size={20} />
                REQUEST SENT
              </>
            )}
          </button>

</form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-24 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 lg:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center font-black text-slate-950 shadow-lg shadow-cyan-500/30">S</div>
                <span className="font-bold text-white tracking-tighter text-2xl">SOMTO GREAT</span>
              </div>
              <p className="text-slate-400 max-w-md text-lg leading-relaxed">
                Architecting high-performance digital ecosystems. Engineering precision in every line of code, every automated trigger, and every pixel.
              </p>
              <div className="flex gap-5">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/great77", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/somtogreat69", label: "GitHub" },
                  
                ].map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 rounded-xl transition-all border border-slate-800 group" aria-label={social.label}>
                    <social.icon size={22} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mono">Direct Contact</h4>
              <ul className="space-y-6">
                <li className="group">
                  <a href="mailto:somtogreat69@gmail.com" className="flex items-center gap-4 text-slate-400 group-hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                      <Mail size={18} />
                    </div>
                    <span className="text-sm font-medium">somtogreat69@gmail.com</span>
                  </a>
                </li>
                <li className="group">
                  <a href="tel:+2347077336381" className="flex items-center gap-4 text-slate-400 group-hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                      <Phone size={18} />
                    </div>
                    <span className="text-sm font-medium">+234 7077336381</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mono">Operations Hub</h4>
              <div className="flex items-start gap-4 text-slate-400 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 transition-colors shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Gwarimpa FCT-Abuja</p>
                  <p className="text-sm text-slate-500">Federal Capital Territory, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
              <p className="text-slate-600 text-[10px] uppercase mono tracking-[0.2em]">All Systems Nominal // Global Deployment Active</p>
            </div>
            <p className="text-slate-600 text-[10px] uppercase mono">© 2024 Somto Great. Code by Precision.</p>
          </div>
        </div>
      </footer>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default App;

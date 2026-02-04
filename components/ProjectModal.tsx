
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { X, ArrowRight, Server, Wrench, ShieldCheck, Box } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const isBlue = project.color === 'blue';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full z-10"
            >
              <X size={20} />
            </button>

            <div className={`h-2 w-full ${isBlue ? 'bg-cyan-500' : 'bg-emerald-500'}`} />

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                <div className="flex-1">
                  <span className={`text-xs font-bold tracking-widest uppercase mono mb-4 block ${isBlue ? 'text-cyan-400' : 'text-emerald-400'}`}>
                    Case Study: {project.role}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                    {project.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <h4 className="flex items-center gap-2 text-slate-200 font-bold uppercase text-xs mono">
                        <ShieldCheck size={14} className={isBlue ? 'text-cyan-400' : 'text-emerald-400'} /> The Challenge
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{project.challenge}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="flex items-center gap-2 text-slate-200 font-bold uppercase text-xs mono">
                        <Box size={14} className={isBlue ? 'text-cyan-400' : 'text-emerald-400'} /> The Solution
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-64 space-y-4">
                   <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                      <h4 className="text-[10px] uppercase font-bold text-slate-500 mb-3 mono flex items-center gap-2">
                        <Wrench size={12} /> Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map(tool => (
                          <span key={tool} className="px-2 py-1 text-[11px] mono bg-slate-950 text-slate-300 rounded border border-slate-800">
                            {tool}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="flex items-center gap-2 text-xl font-bold text-white uppercase tracking-wider mono">
                  <Server size={20} className={isBlue ? 'text-cyan-400' : 'text-emerald-400'} /> 
                  Step-by-Step Build
                </h3>
                
                <div className="relative space-y-8 before:absolute before:left-3 md:before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
                  {project.workflow.map((step, idx) => (
                    <div key={idx} className="relative pl-10 md:pl-14 group">
                      <div className={`absolute left-0 top-1 w-6 md:w-8 h-6 md:h-8 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-colors ${isBlue ? 'bg-slate-900 border-cyan-500 text-cyan-400' : 'bg-slate-900 border-emerald-500 text-emerald-400'}`}>
                        {idx + 1}
                      </div>
                      <h5 className="text-white font-bold mb-1 group-hover:text-cyan-400 transition-colors uppercase text-sm tracking-wide">
                        {step.label}
                      </h5>
                      <p className="text-slate-400 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
{/* Bottom Right Video Button */}
{/* Watch Demo Button - Only shows if the project has a videoUrl */}
          {project.videoUrl && (
            <div className="mt-12 flex justify-end border-t border-slate-800 pt-6">
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${
                  isBlue ? 'from-cyan-600 to-blue-600' : 'from-emerald-600 to-green-600'
                } hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl shadow-lg shadow-cyan-900/20 transition-all group`}
              >
                <div className="p-1.5 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span className="font-bold text-sm tracking-wide">Watch Demo Video</span>
              </a>
            </div>
          )}
              <div className="mt-12 pt-12 border-t border-slate-800 flex justify-center">
                <button 
                  onClick={onClose}
                  className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-3 ${isBlue ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]' : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]'}`}
                >
                  Close Deep Dive <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;


import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ChevronRight, Cpu, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onViewLogic: (project: Project) => void;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewLogic, className }) => {
  const isBlue = project.color === 'blue';
  
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className={`relative group bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-slate-700 ${className} ${isBlue ? 'hover:glow-blue' : 'hover:glow-green'}`}
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        {isBlue ? <Cpu size={120} /> : <Layers size={120} />}
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase mono border ${isBlue ? 'border-cyan-500/30 text-cyan-400 bg-cyan-900/20' : 'border-emerald-500/30 text-emerald-400 bg-emerald-900/20'}`}>
            {project.role}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm line-clamp-3 mb-6">
          {project.challenge}
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, 3).map((tool) => (
            <span key={tool} className="text-[11px] mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && <span className="text-[11px] mono text-slate-500 px-1">+ more</span>}
        </div>

        <button 
          onClick={() => onViewLogic(project)}
          className={`flex items-center gap-2 text-sm font-semibold transition-all ${isBlue ? 'text-cyan-400 hover:text-cyan-300' : 'text-emerald-400 hover:text-emerald-300'}`}
        >
          View Logic <ChevronRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

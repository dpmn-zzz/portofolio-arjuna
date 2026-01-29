'use client';

import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiX, FiLayers } from "react-icons/fi";
import { useEffect } from "react";
import { ProjectProps } from "./ProjectCard";

interface ModalProps {
  project: ProjectProps;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ModalProps) {
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    // FIX: z-[110] -> z-110
    <div className="fixed inset-0 z-110 flex items-center justify-center p-4 sm:p-6">
      
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-pulse-slow"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* FIX: md:h-[600px] -> md:h-150 */}
      <div 
        className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:h-150 animate-fade-in-up"
        role="dialog"
        aria-modal="true"
      >
        
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10 md:hidden active:scale-95 transition-transform"
        >
            <FiX size={20} />
        </button>

        {/* Bagian KIRI: Gambar Besar */}
        <div className="w-full md:w-5/12 relative bg-gray-900 h-56 md:h-full border-b md:border-b-0 md:border-r border-white/5 shrink-0">
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-[#0a0a0a]/10"></div>
        </div>

        {/* Bagian KANAN: Detail */}
        <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col overflow-y-auto bg-[#0a0a0a]">
            
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                      {project.title}
                    </h2>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                        <FiLayers className="shrink-0" /> Project Detail
                    </span>
                </div>
                
                <button 
                    onClick={onClose}
                    className="hidden md:flex p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                >
                    <FiX size={28} />
                </button>
            </div>

            <div className="space-y-8 grow pr-2 custom-scrollbar">
                
                {/* Deskripsi */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2 after:content-[''] after:h-px after:bg-white/10 after:grow">
                      Tentang Project
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base">
                        {project.description}
                    </p>
                    <div className="mt-4 text-gray-400 text-sm leading-relaxed bg-gray-900/30 p-4 rounded-xl border border-white/5">
                        <p>
                          Project ini dikembangkan dengan fokus pada performa, skalabilitas, dan pengalaman pengguna (User Experience) yang mulus.
                        </p>
                    </div>
                </div>

                {/* Tech Stack */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2 after:content-[''] after:h-px after:bg-white/10 after:grow">
                      Teknologi yang Digunakan
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="px-3 py-1.5 bg-gray-900 border border-white/10 rounded-lg text-sm text-gray-300 font-medium hover:border-blue-500/30 hover:text-blue-300 transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                    href={project.github}
                    target="_blank"
                    className="flex-1 py-3.5 px-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 group"
                >
                    <FiGithub size={20} className="group-hover:scale-110 transition-transform" /> 
                    <span>Source Code</span>
                </Link>
                
                {project.demo !== "#" && (
                    <Link
                        href={project.demo}
                        target="_blank"
                        className="flex-1 py-3.5 px-4 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20 group"
                    >
                        <FiExternalLink size={20} className="group-hover:translate-x-1 transition-transform" /> 
                        <span>Live Demo</span>
                    </Link>
                )}
            </div>

        </div>
      </div>
    </div>
  );
}
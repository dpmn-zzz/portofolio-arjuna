'use client';

import { useRef } from 'react';
import { SiLaravel, SiPhp, SiMysql, SiPython, SiNextdotjs, SiTailwindcss, SiArduino, SiGithub } from "react-icons/si";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const skills = [
  { name: "Laravel", icon: <SiLaravel size={40} className="text-red-600" /> },
  { name: "PHP", icon: <SiPhp size={40} className="text-indigo-400" /> },
  { name: "MySQL", icon: <SiMysql size={40} className="text-blue-500" /> },
  { name: "Python", icon: <SiPython size={40} className="text-yellow-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-cyan-400" /> },
  { name: "Arduino", icon: <SiArduino size={40} className="text-teal-500" /> },
  { name: "Git/GitHub", icon: <SiGithub size={40} className="text-gray-200" /> },
];

export default function Skills() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Fungsi Scroll Kiri/Kanan
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
        const { current } = sliderRef;
        const scrollAmount = 300; // Jarak scroll
        
        if (direction === 'left') {
            current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gray-950 relative overflow-hidden">
      
      {/* --- Background Decoration --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient inline-block">
            Technical Stack
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
             Tools andalan yang saya gunakan untuk mengubah ide kompleks menjadi realitas digital.
          </p>
        </div>

        {/* --- SLIDER WRAPPER --- */}
        <div className="relative group/slider px-4 md:px-12">
            
            {/* Tombol Kiri */}
            <button 
                onClick={() => scroll('left')}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-full items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer"
                aria-label="Scroll Left"
            >
                <FiChevronLeft size={24} />
            </button>

            {/* Scrollable Area */}
            <div 
                ref={sliderRef}
                className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* Hide Scrollbar */}
                <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

                {skills.map((skill, index) => (
                    <div 
                        key={index}
                        // Ukuran Kartu Responsif
                        className="snap-center shrink-0 w-36 md:w-48 group/card"
                    >
                        <div className="glass-card p-6 rounded-2xl hover-card h-full flex flex-col items-center justify-center gap-5 cursor-default border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                            
                            {/* Icon Container */}
                            <div className="relative p-4 bg-gray-950/50 rounded-full border border-white/5 group-hover/card:scale-110 transition-transform duration-300">
                                <div className="absolute inset-0 bg-white/5 rounded-full blur-md opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    {skill.icon}
                                </div>
                            </div>
                            
                            {/* Nama Skill */}
                            <span className="font-semibold text-gray-400 group-hover/card:text-white transition-colors text-sm md:text-base">
                                {skill.name}
                            </span>
                        </div>
                    </div>
                ))}
                
                {/* Spacer Kanan */}
                <div className="w-2 shrink-0"></div>
            </div>

            {/* Tombol Kanan */}
            <button 
                onClick={() => scroll('right')}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-full items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer"
                aria-label="Scroll Right"
            >
                <FiChevronRight size={24} />
            </button>

        </div>

        {/* Swipe Hint (Mobile) - FIX: Menggunakan class standar -mt-2.5 */}
        <div className="md:hidden text-center text-gray-500 text-xs -mt-2.5 animate-pulse">
             &larr; Geser &rarr;
        </div>

      </div>
    </section>
  );
}
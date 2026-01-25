import { SiLaravel, SiPhp, SiMysql, SiPython, SiNextdotjs, SiTailwindcss, SiArduino, SiGithub } from "react-icons/si";

const skills = [
  { name: "Laravel", icon: <SiLaravel size={32} className="text-red-600" /> },
  { name: "PHP", icon: <SiPhp size={32} className="text-indigo-400" /> },
  { name: "MySQL", icon: <SiMysql size={32} className="text-blue-500" /> },
  { name: "Python", icon: <SiPython size={32} className="text-yellow-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} className="text-white" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={32} className="text-cyan-400" /> },
  { name: "Arduino", icon: <SiArduino size={32} className="text-teal-500" /> },
  { name: "Git/GitHub", icon: <SiGithub size={32} className="text-gray-200" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950 relative overflow-hidden">
      
      {/* --- Background Glow Decoration --- */}
      {/* FIX: Menggunakan class w-125 & h-125 sesuai saran Linter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          
          {/* Judul dengan .text-gradient */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient inline-block">
            Technical Stack
          </h2>
          
          {/* Garis Hiasan */}
          <div className="h-1 w-20 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
             Tools andalan yang saya gunakan untuk mengubah ide kompleks menjadi realitas digital.
          </p>
        </div>

        {/* Grid Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              // Menggunakan .glass-card dan .hover-card agar konsisten & smooth
              className="group glass-card p-6 rounded-2xl hover-card flex flex-col items-center justify-center gap-4 cursor-default"
            >
              {/* Icon Container */}
              <div className="p-4 bg-gray-950/50 rounded-full border border-white/5 group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-all duration-300">
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <span className="font-semibold text-gray-400 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
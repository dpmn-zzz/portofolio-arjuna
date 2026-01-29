import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

// Definisi Tipe Data Project
// Kita export agar bisa dipakai di halaman lain (ProjectsPage & ProjectModal)
export interface ProjectProps {
  id?: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  demo: string;
}

interface CardProps {
  project: ProjectProps;
  onClick: () => void; // Fungsi trigger saat kartu diklik
}

export default function ProjectCard({ project, onClick }: CardProps) {
  return (
    <div 
      onClick={onClick}
      className="group glass-card rounded-2xl overflow-hidden hover-card h-full flex flex-col cursor-pointer relative"
    >
      
      {/* --- Bagian Gambar (Aspect Video 16:9) --- */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-950 border-b border-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay "Lihat Detail" (Muncul saat Hover) */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-medium flex items-center gap-2 backdrop-blur-md shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                Lihat Detail <FiArrowRight />
            </span>
        </div>
      </div>

      {/* --- Bagian Konten Teks --- */}
      <div className="p-6 flex flex-col grow">
        
        {/* Judul */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>
        
        {/* Deskripsi Singkat (Maks 2 Baris) */}
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed grow">
          {project.description}
        </p>

        {/* Mini Tech Stack (Max 3 items agar rapi) */}
        <div className="flex flex-wrap items-center gap-2 mt-auto">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="text-[11px] font-medium px-2.5 py-1 bg-white/5 text-gray-400 rounded-lg border border-white/5 group-hover:border-blue-500/20 group-hover:text-gray-300 transition-colors"
            >
              {tech}
            </span>
          ))}
          
          {/* Indikator sisa teknologi (jika lebih dari 3) */}
          {project.techStack.length > 3 && (
            <span className="text-[10px] font-medium px-2 py-1 text-gray-500">
                +{project.techStack.length - 3} Lainnya
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Definisi Tipe Data
interface ProjectProps {
  id?: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    // Wrapper Utama: 
    // - 'glass-card' & 'hover-card' dari globals.css
    // - 'h-full flex flex-col' agar tinggi kartu seragam
    <div className="group glass-card rounded-2xl overflow-hidden hover-card h-full flex flex-col">
      
      {/* --- Bagian Gambar (Rasio 16:9) --- */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-950 border-b border-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          // UPDATE: duration-500 agar zoom lebih snappy, selaras dengan hover card
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay Gelap + Tombol Action (Muncul saat Hover) */}
        <div className="absolute inset-0 bg-gray-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          
          {/* Tombol GitHub */}
          <Link
            href={project.github}
            target="_blank"
            className="p-3 bg-gray-900/80 rounded-full text-white hover:text-blue-400 hover:bg-black border border-white/10 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
            title="Lihat Kode Source"
          >
            <FiGithub size={22} />
          </Link>
          
          {/* Tombol Live Demo (Hanya jika link tersedia) */}
          {project.demo !== "#" && (
            <Link
              href={project.demo}
              target="_blank"
              className="p-3 bg-gray-900/80 rounded-full text-white hover:text-blue-400 hover:bg-black border border-white/10 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              title="Lihat Live Demo"
            >
              <FiExternalLink size={22} />
            </Link>
          )}
        </div>
      </div>

      {/* --- Bagian Konten Teks --- */}
      <div className="p-6 flex flex-col grow">
        
        {/* Judul Project */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        {/* Deskripsi (Dibatasi 3 baris agar rapi) */}
        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-200 group-hover:bg-blue-500/10 transition-colors duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
        
      </div>
    </div>
  );
}
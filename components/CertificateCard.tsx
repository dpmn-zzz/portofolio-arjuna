import Image from "next/image";
import { FiArrowRight, FiAward } from "react-icons/fi";

// Definisi Tipe Data (Diupdate agar sesuai dengan data lengkap untuk Modal)
export interface CertificateProps {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
  description: string;     // Tambahan untuk Modal
  credentialLink: string;  // Tambahan untuk Modal
}

interface CardProps {
  certificate: CertificateProps;
  onClick: () => void; // Prop wajib untuk trigger Modal
}

export default function CertificateCard({ certificate, onClick }: CardProps) {
  return (
    <div 
      onClick={onClick}
      className="group glass-card rounded-2xl overflow-hidden hover-card h-full flex flex-col cursor-pointer relative"
    >
      
      {/* --- Bagian Gambar (Aspect 4:3) --- */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-900 border-b border-white/5">
        <Image 
          src={certificate.image} 
          alt={certificate.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100" 
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
        
        {/* Judul Sertifikat */}
        <h3 className="font-bold text-lg text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
          {certificate.title}
        </h3>
        
        {/* Footer: Penerbit & Tahun */}
        <div className="mt-auto flex justify-between items-end text-sm">
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs mb-1 uppercase tracking-wider flex items-center gap-1">
               <FiAward className="text-blue-500" /> Penerbit
            </span>
            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
              {certificate.issuer}
            </span>
          </div>
          
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-400 group-hover:bg-blue-500/10 group-hover:text-blue-300 group-hover:border-blue-500/30 transition-all duration-300">
            {certificate.year}
          </span>
        </div>
      </div>
    </div>
  );
}
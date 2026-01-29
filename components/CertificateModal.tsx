'use client';

import Image from "next/image";
import Link from "next/link";
import { FiX, FiAward, FiCheckCircle, FiExternalLink } from "react-icons/fi";
import { useEffect } from "react";
import { CertificateProps } from "./CertificateCard";

interface ModalProps {
  certificate: CertificateProps;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: ModalProps) {
  
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
    <div className="fixed inset-0 z-110 flex items-center justify-center p-4 sm:p-6">
      
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-pulse-slow"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* FIX: md:h-[500px] -> md:h-125 */}
      <div 
        className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:h-125 animate-fade-in-up"
        role="dialog"
        aria-modal="true"
      >
        
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10 md:hidden active:scale-95 transition-transform"
        >
            <FiX size={20} />
        </button>

        {/* KIRI: Gambar */}
        <div className="w-full md:w-5/12 relative bg-gray-900 h-64 md:h-full border-b md:border-b-0 md:border-r border-white/5 shrink-0">
            <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
            />
        </div>

        {/* KANAN: Detail */}
        <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col overflow-y-auto bg-[#0a0a0a]">
            
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {certificate.title}
                    </h2>
                    <div className="flex items-center gap-3">
                        <span className="text-blue-400 text-sm font-semibold flex items-center gap-1">
                            <FiAward /> {certificate.issuer}
                        </span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-400 text-sm">{certificate.year}</span>
                    </div>
                </div>
                
                <button 
                    onClick={onClose}
                    className="hidden md:flex p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                    title="Tutup (Esc)"
                >
                    <FiX size={28} />
                </button>
            </div>

            <div className="space-y-6 grow pr-2 custom-scrollbar">
                
                <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2 after:content-[''] after:h-px after:bg-white/10 after:grow">
                      Deskripsi Kompetensi
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base">
                        {certificate.description}
                    </p>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-start gap-3">
                    <FiCheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                    <div>
                        <h4 className="text-green-400 font-bold text-sm mb-1">Terverifikasi</h4>
                        <p className="text-green-300/80 text-xs">
                            Kredensial ini diterbitkan oleh lembaga resmi dan validitasnya dapat dipertanggungjawabkan.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 shrink-0">
                {certificate.credentialLink !== "#" ? (
                    <Link
                        href={certificate.credentialLink}
                        target="_blank"
                        className="w-full py-3.5 px-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 group"
                    >
                        <span>Lihat Kredensial Asli</span> 
                        <FiExternalLink className="group-hover:translate-x-1 transition-transform"/>
                    </Link>
                ) : (
                    <button disabled className="w-full py-3.5 px-4 rounded-xl bg-white/5 text-gray-500 font-bold flex items-center justify-center gap-2 cursor-not-allowed border border-white/5">
                        Link Tidak Tersedia
                    </button>
                )}
            </div>

        </div>
      </div>
    </div>
  );
}
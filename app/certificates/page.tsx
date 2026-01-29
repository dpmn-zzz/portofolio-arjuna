'use client';

import { useState, useRef } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificateCard, { CertificateProps } from "@/components/CertificateCard";
import CertificateModal from "@/components/CertificateModal";
import { certificates } from "../../data/certificates"; // Import data
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<CertificateProps | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
        const { current } = sliderRef;
        const scrollAmount = 400;
        
        if (direction === 'left') {
            current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
  };

  return (
    // FIX: Ditambahkan 'pt-24' agar konten tidak tertutup Navbar Fixed
    <main className="relative bg-gray-950 min-h-screen text-white selection:bg-blue-500 selection:text-white flex flex-col justify-between overflow-hidden pt-24">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>
      
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow delay-700"></div>
      
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. KONTEN UTAMA */}
      <div className="grow pb-20 z-10 flex flex-col justify-center min-h-[60vh]">
        
        {/* Spacer manual <div> sudah DIHAPUS karena sudah pakai pt-24 di main */}
        
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header Section */}
          <div className="text-center mb-12 relative animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient inline-block">
              Sertifikasi & Penghargaan
            </h1>
            <div className="h-1 w-24 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg relative z-10 leading-relaxed">
              Bukti formal kompetensi, komitmen terhadap pembelajaran berkelanjutan, dan pencapaian profesional saya di bidang teknologi.
            </p>
          </div>

          {/* --- SLIDER WRAPPER --- */}
          <div className="relative group/slider animate-fade-in-up delay-200">
            
            {/* Tombol Kiri */}
            {certificates.length > 0 && (
              <button 
                  onClick={() => scroll('left')}
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-14 h-14 bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-full items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer"
              >
                  <FiChevronLeft size={28} />
              </button>
            )}

            {/* Scroll Area */}
            <div 
                ref={sliderRef}
                className="flex overflow-x-auto gap-6 pb-12 pt-4 px-4 snap-x snap-mandatory min-h-75"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

                {certificates.length > 0 ? (
                  certificates.map((cert) => (
                      <div 
                          key={cert.id}
                          className="snap-center shrink-0 w-[85vw] sm:w-100 md:w-95 h-120 transform transition-transform duration-300"
                      >
                          <CertificateCard 
                            certificate={cert} 
                            onClick={() => setSelectedCert(cert)} 
                          />
                      </div>
                  ))
                ) : (
                  <div className="w-full flex flex-col items-center justify-center text-gray-500 italic py-10 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <p>Belum ada sertifikat yang ditampilkan.</p>
                  </div>
                )}
                <div className="w-4 shrink-0"></div>
            </div>

            {/* Tombol Kanan */}
            {certificates.length > 0 && (
              <button 
                  onClick={() => scroll('right')}
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-14 h-14 bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-full items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer"
              >
                  <FiChevronRight size={28} />
              </button>
            )}
          </div>

          {/* Mobile Hint */}
          {certificates.length > 0 && (
            <div className="md:hidden text-center text-gray-500 text-sm -mt-5 animate-pulse">
               &larr; Geser untuk melihat lainnya &rarr;
            </div>
          )}

        </div>
      </div>

      <Footer />

      {/* MODAL */}
      {selectedCert && (
        <CertificateModal 
            certificate={selectedCert} 
            onClose={() => setSelectedCert(null)} 
        />
      )}
      
    </main>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

// --- DATA DUMMY SERTIFIKAT ---
const certificates = [
  { 
    id: 1, 
    title: "Sertifikat Kompetensi IT (BNSP)", 
    issuer: "Badan Nasional Sertifikasi Profesi", 
    year: "2024", 
    image: "/images/Profile-juna.jpg" 
  },
  { 
    id: 2, 
    title: "Belajar Dasar Pemrograman Web", 
    issuer: "Dicoding Indonesia", 
    year: "2023", 
    image: "/images/Profile-juna.jpg" 
  },
  { 
    id: 3, 
    title: "Memulai Pemrograman dengan Python", 
    issuer: "Dicoding Indonesia", 
    year: "2023", 
    image: "/images/Profile-juna.jpg" 
  },
  { 
    id: 4, 
    title: "IT Essentials & Networking Basics", 
    issuer: "Cisco Networking Academy", 
    year: "2022", 
    image: "/images/Profile-juna.jpg" 
  },
];

export default function CertificatesPage() {
  return (
    <main className="relative bg-gray-950 min-h-screen text-white selection:bg-blue-500 selection:text-white flex flex-col justify-between overflow-hidden">
      
      {/* --- BACKGROUND DECORATION (Static) --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>
      
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow delay-700"></div>
      
      {/* 1. NAVBAR (STATIS - Diam di tempat) */}
      <div className="z-50 relative">
        <Navbar />
      </div>

      {/* 2. WRAPPER KONTEN (ANIMASI - Bergerak masuk) */}
      <div className="animate-fade-in-up grow z-10">
        
        {/* Spacer Block (Agar konten tidak tertutup Navbar fixed) */}
        <div className="h-24 md:h-32 w-full bg-transparent" aria-hidden="true"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient inline-block">
              Sertifikasi & Penghargaan
            </h1>
            <div className="h-1 w-24 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg relative z-10 leading-relaxed">
              Bukti formal kompetensi, komitmen terhadap pembelajaran berkelanjutan, dan pencapaian profesional saya di bidang teknologi.
            </p>
          </div>

          {/* Grid Certificates */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                // Class animasi per-item dihapus agar menyatu dengan animasi page
                className="group glass-card rounded-2xl overflow-hidden hover-card"
              >
                {/* Bagian Gambar Sertifikat */}
                <div className="relative aspect-4/3 overflow-hidden bg-gray-900 border-b border-white/5">
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" 
                  />
                  {/* Efek Shine saat hover */}
                  <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Bagian Teks Keterangan */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex justify-between items-end text-sm">
                    <div className="flex flex-col">
                       <span className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Penerbit</span>
                       <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{cert.issuer}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-400 group-hover:bg-blue-500/10 group-hover:text-blue-300 group-hover:border-blue-500/30 transition-all duration-300">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. FOOTER (STATIS - Diam di tempat) */}
      <Footer />
      
    </main>
  );
}
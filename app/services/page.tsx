import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiMonitor, FiCpu, FiDatabase, FiSettings } from "react-icons/fi";

// Data Services
const services = [
  {
    icon: <FiMonitor size={40} className="text-blue-400" />,
    title: "Full Stack Web Dev",
    description: "Pembuatan aplikasi web modern yang responsif, cepat, dan SEO-friendly menggunakan teknologi Next.js (React) untuk Frontend dan Laravel untuk Backend."
  },
  {
    icon: <FiCpu size={40} className="text-purple-400" />,
    title: "AI & Machine Learning",
    description: "Implementasi solusi cerdas seperti klasifikasi data, prediksi, atau computer vision sederhana menggunakan Python dan algoritma Machine Learning."
  },
  {
    icon: <FiDatabase size={40} className="text-green-400" />,
    title: "Backend & API System",
    description: "Perancangan RESTful API yang aman, manajemen database MySQL yang efisien, serta integrasi sistem pihak ketiga untuk kebutuhan bisnis Anda."
  },
  {
    icon: <FiSettings size={40} className="text-red-400" />,
    title: "IT Support & Consultation",
    description: "Berbekal pengalaman sebagai IT Support, saya menyediakan jasa konsultasi infrastruktur jaringan, troubleshooting hardware, dan maintenance sistem."
  }
];

export default function ServicesPage() {
  return (
    <main className="relative bg-gray-950 min-h-screen text-white selection:bg-blue-500 selection:text-white flex flex-col justify-between overflow-hidden">
      
      {/* --- BACKGROUND DECORATION (Static) --- */}
      {/* 1. Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>
      
      {/* 2. Ambient Glow (Konsisten w-125 h-125) */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow delay-700"></div>
      
      {/* 1. NAVBAR (STATIS - Diam di tempat) */}
      <div className="z-50 relative">
        <Navbar />
      </div>

      {/* 2. WRAPPER KONTEN (ANIMASI - Bergerak masuk) */}
      <div className="animate-fade-in-up grow z-10">
        
        {/* Spacer Block */}
        <div className="h-24 md:h-32 w-full bg-transparent" aria-hidden="true"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient inline-block">
              Layanan Profesional
            </h1>
            <div className="h-1 w-24 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg relative z-10 leading-relaxed">
              Menggabungkan keahlian teknis Software Engineering dan IT Support untuk memberikan solusi digital terbaik bagi Anda.
            </p>
          </div>

          {/* Grid Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                // Menggunakan 'glass-card' dan 'hover-card' dari globals.css
                className="group glass-card p-8 rounded-2xl hover-card flex flex-col"
              >
                {/* Icon Wrapper */}
                <div className="mb-6 bg-gray-950/50 w-20 h-20 rounded-full flex items-center justify-center border border-white/10 group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
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
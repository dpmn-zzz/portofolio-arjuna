import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen text-white selection:bg-blue-500 selection:text-white overflow-x-hidden flex flex-col justify-between">
      
      {/* 1. NAVBAR (STATIS - Diam di tempat) */}
      <div className="z-50 relative">
        <Navbar />
      </div>
      
      {/* 2. WRAPPER KONTEN (ANIMASI - Bergerak masuk) */}
      {/* Semua konten halaman masuk di sini agar bergerak bersamaan */}
      <div className="animate-fade-in-up grow">
        
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section className="py-20 bg-gray-950 relative">
          {/* Dekorasi Garis Gradient Halus */}
          <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-blue-900/50 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Container "Box" About - Updated to use glass-card & hover-card */}
            <div className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden hover-card">
              
              {/* Efek Glow di pojok dengan animasi pulse */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] animate-pulse-slow"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] animate-pulse-slow delay-500"></div>

              <div className="relative text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                  Tentang <span className="text-gradient">Saya</span>
                </h2>
                
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify md:text-center">
                  <p>
                    Hai! Saya <strong className="text-white">Arjuna Satria</strong>. Perjalanan saya di dunia teknologi dimulai dari peran <strong className="text-blue-400">IT Support</strong>, di mana saya belajar bahwa teknologi bukan hanya soal kode, tapi soal <em className="text-gray-400">solusi yang bisa diandalkan</em>.
                  </p>
                  <p>
                    Transformasi saya menjadi <strong className="text-purple-400">Full Stack Developer</strong> didorong oleh rasa penasaran untuk menciptakan sesuatu dari nol. Saya memadukan ketangguhan logika Backend (Laravel) dengan interaktivitas Frontend modern (Next.js).
                  </p>
                  <p>
                    Di waktu luang, saya melatih logika dengan eksperimen <strong className="text-white">Artificial Intelligence</strong> & Computer Vision, karena saya percaya masa depan ada pada sinergi antara Software & Data.
                  </p>
                </div>

                {/* Hiasan Garis Bawah */}
                <div className="mt-10 flex justify-center gap-2">
                   <span className="w-16 h-1 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                   <span className="w-4 h-1 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                   <span className="w-2 h-1 bg-gray-600 rounded-full"></span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <Skills />
      </div>

      {/* 3. FOOTER (STATIS - Diam di tempat) */}
      <Footer />
      
    </main>
  );
}
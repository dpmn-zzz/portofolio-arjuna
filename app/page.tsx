import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen text-white selection:bg-blue-500 selection:text-white overflow-x-hidden flex flex-col justify-between">
      
      {/* 1. NAVBAR */}
      <div className="z-50 relative">
        <Navbar />
      </div>
      
      {/* 2. WRAPPER KONTEN */}
      <div className="animate-fade-in-up grow">
        
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section className="py-20 bg-gray-950 relative">
          {/* Dekorasi Garis */}
          <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-blue-900/50 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* WRAPPER UTAMA: Flexbox untuk membagi Foto & Teks */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              
              {/* --- BAGIAN KIRI: FOTO DENGAN BORDER NGIKUTIN FOTO --- */}
              <div className="relative shrink-0 group">
                
                {/* 1. Efek Glow di belakang foto (FIX: blur-[40px] -> blur-2xl) */}
                <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full group-hover:bg-blue-600/30 transition-all duration-500"></div>
                
                {/* 2. Frame/Border Pembungkus */}
                <div className="relative w-fit h-fit p-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm rotate-3 group-hover:rotate-0 transition-transform duration-500 ease-out">
                    <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                        <Image 
                            src="/images/Profile-juna.jpg" // Pastikan nama file sesuai
                            alt="Arjuna Satria"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Hiasan kotak kecil di pojok */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gray-900 border border-white/10 rounded-xl flex items-center justify-center shadow-xl animate-bounce-slow z-20">
                     <span className="text-2xl">💻</span>
                </div>

              </div>

              {/* --- BAGIAN KANAN: TEKS --- */}
              <div className="relative text-center md:text-left max-w-2xl">
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Tentang <span className="text-gradient">Saya</span>
                </h2>
                
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
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
                <div className="mt-8 flex justify-center md:justify-start gap-2">
                    <span className="w-16 h-1 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                    <span className="w-4 h-1 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />
      </div>

      {/* 3. FOOTER */}
      <Footer />
      
    </main>
  );
}
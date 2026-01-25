import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-950 text-white overflow-hidden">
      
      {/* Background decoration (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>

      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Kolom KIRI: Teks */}
        <div className="flex-1 text-center md:text-left space-y-8 z-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Halo, Saya
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Arjuna Satria
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-400 font-medium">
              Mahasiswa Teknik Informatika & <br />
              <span className="text-gradient font-bold">
                Full Stack Developer
              </span>
            </h2>
          </div>
          
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed">
            Membangun aplikasi web modern yang <strong className="text-white">cepat</strong>, <strong className="text-white">aman</strong>, dan <strong className="text-white">scalable</strong> menggunakan ekosistem Laravel & Next.js.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link 
              href="/projects" 
              className="px-8 py-3.5 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              Lihat Project
            </Link>
            
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-full font-medium transition-all backdrop-blur-sm w-full sm:w-auto text-center"
            >
              Kontak Saya
            </Link>
          </div>
        </div>

        {/* Kolom KANAN: Foto Profil */}
        <div className="flex-1 flex justify-center md:justify-end relative z-10">
          
          {/* Glow Effect Belakang Foto (FIXED: Menggunakan w-75 h-75) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-blue-500/20 rounded-full blur-[80px] animate-pulse-slow"></div>
          
          {/* Foto dengan animasi melayang (float) */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl animate-float">
            <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-gray-900">
              <Image
                src="/images/Profile-juna.jpg" 
                alt="Foto Profil Arjuna Satria"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
import Link from "next/link";
// Import Image dihapus karena tidak lagi digunakan
// import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-950 text-white overflow-hidden">
      
      {/* Background decoration (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>

      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>

      {/* Container Utama: Diubah agar fokus di tengah (Centered) */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Kolom Teks (Sekarang menjadi satu-satunya konten) */}
        <div className="space-y-8 z-10">
          <div className="space-y-4">
            
            {/* Badge */}
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
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Membangun aplikasi web modern yang <strong className="text-white">cepat</strong>, <strong className="text-white">aman</strong>, dan <strong className="text-white">scalable</strong> menggunakan ekosistem Laravel & Next.js.
          </p>
          
          {/* Buttons: Centered */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

        {/* --- BAGIAN FOTO & BORDER TELAH DIHAPUS --- */}

      </div>
    </section>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
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

      {/* 2. WRAPPER KONTEN (ANIMASI) */}
      <div className="grow pb-20 z-10">
        
        {/* Spacer Block */}
        <div className="h-24 md:h-32 w-full bg-transparent" aria-hidden="true"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16 relative animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient inline-block">
              Portofolio Project
            </h1>
            <div className="h-1 w-24 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg relative z-10 leading-relaxed">
              Berikut adalah koleksi hasil karya saya, mencakup pengembangan Website (Laravel/Next.js) dan eksperimen Artificial Intelligence (Python).
            </p>
          </div>

          {/* Grid Project dengan Staggered Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              // Wrapper div untuk menangani animasi muncul berurutan (Staggered)
              <div 
                key={project.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }} // Delay bertingkat
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Call to Action (CTA) Section */}
          <div className="text-center border-t border-white/5 pt-16 relative animate-fade-in-up delay-500">
             {/* Efek Glow kecil di tengah garis */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-blue-500/50 blur-lg"></div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Punya Ide Menarik?</h3>
            <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto">
              Mari kita diskusikan bagaimana teknologi bisa membantu mewujudkan visi Anda menjadi kenyataan.
            </p>
            
            <a 
              href="/contact" 
              className="inline-block px-8 py-3.5 bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-full hover:bg-gray-800 hover:border-blue-500/50 transition-all text-white font-medium hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-1 group"
            >
              <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold group-hover:text-white transition-all">
                Mulai Diskusi Project
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* 3. FOOTER (STATIS - Diam di tempat) */}
      <Footer />
    </main>
  );
}
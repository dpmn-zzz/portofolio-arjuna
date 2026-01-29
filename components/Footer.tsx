import Link from 'next/link';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-sm relative overflow-hidden">
      
      {/* Dekorasi Glow Halus di Footer (Optional) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Bagian Atas: Grid 4 Kolom --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Kolom 1: Brand & Deskripsi */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white tracking-wider block group">
              PORTOFOLIO <span className="text-gradient group-hover:opacity-80 transition-opacity">ARJUNA</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Membangun solusi digital yang estetik dan fungsional. Fokus pada pengembangan Web Modern (Next.js) dan Eksperimen AI.
            </p>
            <div className="flex items-center gap-2 text-gray-500 mt-4">
              <FiMapPin className="text-blue-500" />
              <span>Bogor, Indonesia</span>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h3 className="text-white font-bold mb-6 text-base border-b border-white/10 pb-2 inline-block">Menu</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Layanan', path: '/services' },
                { name: 'Project Portfolio', path: '/projects' },
                { name: 'Sertifikat', path: '/certificates' },
                { name: 'Hubungi Saya', path: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.path} 
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:pl-2 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Layanan */}
          <div>
            <h3 className="text-white font-bold mb-6 text-base border-b border-white/10 pb-2 inline-block">Layanan</h3>
            <ul className="space-y-3">
              {[
                "Full Stack Web Development",
                "Machine Learning & AI",
                "Backend API Development",
                "IT Support & Networking",
                "Database Optimization"
              ].map((item, idx) => (
                <li key={idx} className="text-gray-400 hover:text-gray-200 transition-colors cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Social Media & Email */}
          <div>
            <h3 className="text-white font-bold mb-6 text-base border-b border-white/10 pb-2 inline-block">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://github.com/dpmn-zzz" 
                target="_blank" 
                className="w-10 h-10 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/arjuna-satria-b61936390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                className="w-10 h-10 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/cngkt.men?igsh=MW94ZG5pZHNvb2dkeA==" 
                className="w-10 h-10 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E1306C] hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
            </div>
            
            <a 
              href="mailto:arjnsatria666@gmail.com" 
              className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all border border-white/10 rounded-xl px-4 py-3 w-full bg-gray-900/50 hover:bg-gray-900 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              <div className="bg-blue-500/10 p-2 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                <FiMail />
              </div>
              <span className="text-sm">arjnsatria666@gmail.com</span>
            </a>
          </div>

        </div>

        {/* --- Bagian Bawah: Copyright --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-center md:text-left text-xs">
            &copy; {currentYear} Arjuna Satria. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-xs">
             <span className="hover:text-blue-400 cursor-pointer transition-colors">Privacy Policy</span>
             <span className="hover:text-blue-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
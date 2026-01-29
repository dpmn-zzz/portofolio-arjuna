'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiSend, FiCheckCircle, FiLoader } from "react-icons/fi";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xaqjeoqk");

  return (
    <main className="relative bg-gray-950 min-h-screen text-white selection:bg-blue-500 selection:text-white flex flex-col justify-between overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow delay-700"></div>
      
      {/* 1. NAVBAR */}
      <div className="z-50 relative">
        <Navbar />
      </div>

      {/* 2. KONTEN UTAMA */}
      <div className="animate-fade-in-up grow z-10">
        
        <div className="h-24 md:h-32 w-full bg-transparent" aria-hidden="true"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient inline-block">
              Hubungi Saya
            </h1>
            <div className="h-1 w-24 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg relative z-10 leading-relaxed">
              Tertarik berkolaborasi di project baru atau sekadar ingin berdiskusi seputar teknologi? 
              Jangan ragu untuk menghubungi saya.
            </p>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[80px] -z-10"></div>

            {/* --- KOLOM KIRI: Info Kontak --- */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Saya selalu terbuka untuk peluang freelance, kerja sama project, atau tawaran pekerjaan full-time. 
                  Silakan hubungi melalui channel berikut:
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-5 group cursor-default">
                    <div className="p-4 bg-gray-950/50 rounded-2xl text-blue-400 border border-white/10 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-all shadow-lg hover-card">
                      <FiMail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200 text-lg group-hover:text-blue-400 transition-colors">Email</h4>
                      <a href="mailto:arjnsatria666@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        arjnsatria666@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Lokasi */}
                  <div className="flex items-start gap-5 group cursor-default">
                    <div className="p-4 bg-gray-950/50 rounded-2xl text-purple-400 border border-white/10 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all shadow-lg hover-card">
                      <FiMapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200 text-lg group-hover:text-purple-400 transition-colors">Lokasi</h4>
                      <p className="text-gray-400">Bogor, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sosmed */}
              <div className="pt-8 border-t border-white/10">
                <h4 className="font-semibold text-gray-200 mb-5">Ikuti Saya</h4>
                <div className="flex gap-4">
                  {[
                    { href: "https://github.com/dpmn-zzz", icon: <FiGithub size={22} />, title: "GitHub" },
                    { href: "https://www.linkedin.com/in/arjuna-satria-b61936390", icon: <FiLinkedin size={22} />, title: "LinkedIn" },
                    { href: "https://www.instagram.com/cngkt.men", icon: <FiInstagram size={22} />, title: "Instagram" }
                  ].map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.href}
                      target="_blank" 
                      className="p-3 bg-gray-950 border border-white/10 rounded-full text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10"
                      title={social.title}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* --- KOLOM KANAN: Form (LOGIKA FORMSPREE) --- */}
            {/* FIX: Ganti min-h-[400px] jadi min-h-100 */}
            <div className="bg-gray-950/30 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-sm flex flex-col justify-center min-h-100">
              
              {/* JIKA SUKSES */}
              {state.succeeded ? (
                <div className="text-center animate-fade-in-up py-10">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                        <FiCheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Pesan Terkirim!</h3>
                    <p className="text-gray-400 max-w-xs mx-auto mb-6">
                        Terima kasih telah menghubungi saya. Pesan Anda telah masuk ke email saya dan akan saya balas secepatnya.
                    </p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-sm font-medium transition-colors cursor-pointer"
                    >
                        Kirim Pesan Lain
                    </button>
                </div>
              ) : (
                
                /* JIKA BELUM */
                <>
                    <h3 className="text-xl font-bold text-white mb-6">Kirim Pesan</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        
                        <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nama Lengkap</label>
                        <input 
                            id="name"
                            type="text" 
                            name="name" 
                            required
                            className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-5 py-3 text-white focus:border-blue-500 transition-colors placeholder-gray-600 focus:bg-gray-900 focus:ring-1 focus:ring-blue-500"
                            placeholder="Masukkan nama anda" 
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                        </div>

                        <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input 
                            id="email"
                            type="email" 
                            name="email"
                            required
                            className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-5 py-3 text-white focus:border-blue-500 transition-colors placeholder-gray-600 focus:bg-gray-900 focus:ring-1 focus:ring-blue-500"
                            placeholder="email@contoh.com" 
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                        </div>

                        <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Pesan</label>
                        <textarea 
                            id="message"
                            name="message"
                            required
                            rows={4} 
                            className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-5 py-3 text-white focus:border-blue-500 transition-colors placeholder-gray-600 resize-none focus:bg-gray-900 focus:ring-1 focus:ring-blue-500"
                            placeholder="Tulis pesan atau tawaran project disini..."
                        ></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                        </div>

                        <button 
                        type="submit" 
                        disabled={state.submitting}
                        className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20 transform hover:-translate-y-1 flex items-center justify-center gap-2 group hover:shadow-blue-500/40 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                        {state.submitting ? (
                            <> <FiLoader className="animate-spin" /> Mengirim... </>
                        ) : (
                            <> <FiSend className="group-hover:translate-x-1 transition-transform" /> Kirim Pesan </>
                        )}
                        </button>

                    </form>
                </>
              )}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
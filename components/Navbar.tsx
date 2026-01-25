'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Efek: Deteksi scroll untuk mengubah background navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Helper: Style Link Desktop dengan Underline Animasi
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href} 
        className={`relative text-sm font-medium transition-colors duration-300 ${
          isActive ? 'text-white' : 'text-gray-400 hover:text-white'
        }`}
      >
        {children}
        {/* Garis Bawah Animasi */}
        {/* FIX: Mengganti bg-gradient-to-r menjadi bg-linear-to-r */}
        <span className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 hover:w-full'
        }`}></span>
      </Link>
    );
  };

  // Helper: Style Link Mobile
  const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href} 
        onClick={closeMenu}
        className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
          isActive 
            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
            : 'text-gray-400 hover:text-white hover:bg-white/5'
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav 
      // FIX: Mengganti z-[100] menjadi z-100 (Canonical Class)
      className={`fixed w-full z-100 top-0 transition-all duration-500 border-b ${
        scrolled || isOpen 
          ? 'bg-gray-950/70 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="shrink-0">
            <Link href="/" onClick={closeMenu} className="group flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 group-hover:scale-105 transition-all duration-300">
                AS
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                PORTOFOLIO<span className="text-gradient"> ARJUNA</span>
              </span>
            </Link>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/services">Layanan</NavLink>
              <NavLink href="/projects">Project</NavLink>
              <NavLink href="/certificates">Sertifikat</NavLink>
              
              {/* Tombol CTA Spesial */}
              <Link 
                href="/contact" 
                className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white text-sm font-semibold transition-all backdrop-blur-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5"
              >
                Hubungi Saya
              </Link>
            </div>
          </div>

          {/* TOMBOL HAMBURGER (MOBILE) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU DROPDOWN MOBILE */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden border-b border-white/5 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-8 space-y-2 bg-gray-950/80 backdrop-blur-xl">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/services">Layanan</MobileNavLink>
          <MobileNavLink href="/projects">Project</MobileNavLink>
          <MobileNavLink href="/certificates">Sertifikat</MobileNavLink>
          
          <div className="pt-6 mt-4 border-t border-white/10">
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className="block w-full text-center px-6 py-3.5 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg shadow-blue-500/20 active:scale-95 transition-transform hover:shadow-blue-500/40"
            >
              Hubungi Saya
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
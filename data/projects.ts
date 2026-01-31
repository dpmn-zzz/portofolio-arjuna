// File: data/projects.ts

// 1. Definisikan Type/Interface
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  github: string;
  demo: string;
}

// 2. Export data project
export const projects: Project[] = [
  {
    id: 1,
    title: "POS System Esteh Indonesia",
    description: "Aplikasi kasir (Point of Sales) untuk manajemen bisnis franchise Esteh. Fitur mencakup manajemen stok, laporan penjualan real-time, dan manajemen karyawan.",
    techStack: ["Laravel 12", "Livewire", "MySQL", "Tailwind CSS", "Chart.js", "Blade"],
    image: "/images/pos-esteh.png", 
    github: "https://github.com/dpmn-zzz/pos-esteh-laravel-12-",
    demo: "#",
  },
  {
    id: 2,
    title: "Cafe POS & Self-Ordering System",
    description: "Sistem Kasir dan Self-Ordering berbasis Web dengan fitur Scan QR Code untuk pemesanan mandiri dari meja. Terintegrasi dengan Payment Gateway Midtrans (QRIS) dan Notifikasi Real-time menggunakan Firebase (FCM).",
    techStack: ["Native PHP", "MySQL", "Tailwind CSS", "Vite", "Midtrans API", "Firebase FCM"],
    image: "/images/cafe-order.png", // Pastikan lu punya screenshot project ini di folder public/images
    github: "https://github.com/ArjunaSatria/cafe-pos-system", // Sesuaikan dengan link repo lu tadi
    demo: "#",
  },
  {
  id: 3,
  title: "Dwi Medika - Klinik Management System",
  description: "Sistem informasi manajemen klinik terintegrasi dengan 3 hak akses (Admin, Dokter, Pasien). Memiliki fitur antrean medis real-time, notifikasi WhatsApp otomatis via Fonnte API, dan sistem pembayaran terintegrasi Midtrans.",
  techStack: ["Native PHP", "MySQL", "Tailwind CSS", "Fonnte WA API", "Midtrans API", "Chart.js"],
  image: "/images/klinik-management.png", // Jangan lupa naruh screenshot dashboard cakep tadi di sini
  github: "https://github.com/dpmn-zzz/klinik_pmk",
  demo: "#",
}
];
**### Tahap 1: Requirement \& Analysis** 



Tujuan: Menentukan apa yang mau dibuat, teknologinya apa, dan isinya apa.



Kita sudah kunci spesifikasi teknisnya tadi:



&nbsp;- Tech Stack: Next.js (Framework), React (Library), Tailwind CSS (Styling).

&nbsp;- Target: Responsive 3 device (Mobile, Tablet, Desktop).

&nbsp;- Infrastructure: Vercel (Hosting), GitHub (Repository), Custom Domain.

&nbsp;- Performance: Static Site Generation (Anti-crash).



Tugas Data (Content Gathering):

Karena ini portofolio, konten adalah raja. Berdasarkan data yang gw tau soal lu, ini draft isinya:



1\. Headline: "Arjuna Satria - Informatics Engineering Student \& Tech Enthusiast".



2\. Highlight Skill:

&nbsp;Web Dev: PHP, Laravel, MySQL.

&nbsp;Data/AI: Python, Machine Learning (YOLO, Naive Bayes, Computer Vision).

&nbsp;Hardware: Arduino, IoT.



3\. Featured Projects (Showcase):

&nbsp;Project 1: POS System "Esteh" Business (Menunjukkan kemampuan Fullstack \& Bisnis logic).

&nbsp;Project 2: Book Classification App (Menunjukkan kemampuan AI/Naive Bayes).

&nbsp;Project 3: Motion Detection System (Menunjukkan kemampuan Computer Vision).

&nbsp;Project 4: Building Collapse Analysis (Menunjukkan kemampuan analisis kritis/Critical Thinking).

---



**### Tahap 2: UI/UX Design \& Prototyping**



Tujuan: Memvisualisasikan layout sebelum ditulis kodenya (biar gak bongkar pasang).



Di industri, biasanya ada UI Designer pakai Figma. Karena lu solo fighter, lu bisa skip bikin high-fidelity design, tapi WAJIB punya Wireframe (sketsa kasar) di kertas.



Rancangan Layout Responsive:



1\. Mobile (HP):

&nbsp;Menu: Hamburger button (garis tiga) di pojok kanan atas.

&nbsp;Project: List vertikal (atas ke bawah). Satu kartu project memenuhi lebar layar.





2\. Tablet:

&nbsp;Project: Grid 2 kolom.





3\. Desktop (Laptop):

&nbsp;Menu: Bar horizontal di atas (Home, About, Projects, Contact).

&nbsp;Project: Grid 3 kolom. Ada efek hover (kursor diarahkan, kartu project membesar sedikit).

---



**### Tahap 3: Environment Setup (Persiapan Dapur)**



Tujuan: Menyiapkan alat tempur.



Ini langkah teknis pertama. Di industri, kita setup Repository dulu.



1\. Install Node.js: Versi LTS terbaru.

2\. Git Init: Buat repository di GitHub dengan nama `arjuna-portfolio`.

3\. Initialize Project: Jalankan perintah `npx create-next-app@latest`.

4\. Clean Up: Hapus file bawaan Next.js yang gak perlu biar project bersih.



---



**### Tahap 4: Development (Slicing \& Integration)**



Tujuan: Mengubah desain menjadi kode.



Di tahap ini kita membagi pekerjaan menjadi komponen kecil (Atomic Design). Jangan tulis semua kode dalam satu file!



Urutan Pengerjaan:



1\. Base Setup: Setting font (misal: Poppins atau Inter) dan warna tema di `tailwind.config.js`.

2\. Components (Pecahan Kecil):

&nbsp;Bikin komponen `<Navbar />`.

&nbsp;Bikin komponen `<Footer />`.

&nbsp;Bikin komponen `<ProjectCard />` (biar bisa dipakai ulang untuk project Esteh, AI, dll).

&nbsp;Bikin komponen `<Button />`.





3\. Page Construction (Perakitan):

&nbsp;Susun komponen-komponen tadi di halaman `page.js` (Home).





4\. Responsive Adjustment:

&nbsp;Tambahkan class Tailwind `md:` dan `lg:` untuk mengatur tampilan tablet dan laptop.



---



**### Tahap 5: Quality Assurance (Testing)**



Tujuan: Memastikan website bebas bug sebelum diluncurkan.



Sebelum pamer ke orang, cek dulu:



1\. Responsive Check: Buka Chrome DevTools (tekan F12), ganti mode ke Mobile/Tablet. Pastikan gak ada tulisan yang nabrak atau gambar gepeng.

2\. Performance Check: Jalankan Lighthouse di Chrome. Pastikan skor Performance, Accessibility, dan SEO di atas 90 (hijau). Karena pakai Next.js, biasanya ini gampang dapet 100.

3\. Broken Link: Cek apakah tombol kontak/sosmed (LinkedIn/GitHub) berfungsi.



---



**### Tahap 6: Deployment (CI/CD)**



Tujuan: Go Online.



Ini bagian paling seru. Kita pakai metode CI/CD (Continuous Integration/Continuous Deployment).



1\. Connect akun GitHub ke Vercel.

2\. Import repository `arjuna-portfolio`.

3\. Klik "Deploy".

4\. Setiap kali lu ada update project baru dan lu melakukan `git push` ke GitHub, Vercel akan otomatis meng-update website lu yang sedang live. Lu gak perlu upload file manual kayak jaman dulu pakai FTP.



---






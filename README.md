# Portofolio React — Template Profesional & Elegan

Template portofolio satu halaman (single-page) berbasis React. Didesain minimal, elegan, dan rendah warna — cocok untuk software engineer, designer, atau profesional lain yang ingin tampilan yang bersih tanpa terkesan ramai.

## ✨ Fitur

- **Section lengkap**: Hero, Tentang, Keahlian, Proyek, Sertifikasi, Kontak
- **Desain elegan & minim warna**: palet putih hangat + navy-charcoal + aksen bronze tipis
- **Animasi scroll**: elemen muncul halus (fade-up) saat discroll, garis "tanda tangan" yang menggambar sendiri di tiap judul section
- **Sepenuhnya responsif**: menyesuaikan dari desktop sampai mobile, termasuk menu hamburger
- **Menghormati preferensi pengguna**: animasi otomatis nonaktif jika browser di-set `prefers-reduced-motion`
- **Tanpa dependency berat**: hanya butuh `react`, `react-dom`, dan `lucide-react` untuk ikon

## 🛠️ Teknologi

- [React](https://react.dev/) (Vite)
- CSS murni (tanpa Tailwind/library UI eksternal)
- [Lucide React](https://lucide.dev/) — ikon

## 📁 Struktur Berkas

```
src/
├── App.jsx          # entry point, memanggil komponen Portfolio
├── Portfolio.jsx     # komponen utama (semua logic & konten)
├── index.css         # semua styling (warna, tipografi, animasi, responsif)
└── main.jsx           # bootstrap React (bawaan Vite)
```

## 🚀 Instalasi

1. **Clone repository ini**
   ```bash
   git clone https://github.com/username-anda/nama-repo.git
   cd nama-repo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan mode development**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:5173` di browser.

4. **Build untuk produksi**
   ```bash
   npm run build
   ```
   Hasilnya ada di folder `dist/`, siap di-deploy.

## ✏️ Kustomisasi

Semua konten (nama, role, tagline, bio, skill, proyek, sertifikat, email, link sosial) ada dalam satu object `DATA` di bagian paling atas `src/Portfolio.jsx`. Cukup edit nilai-nilainya — **tidak perlu menyentuh kode JSX atau CSS di bawahnya**.

```js
const DATA = {
  name: "Nama Anda",
  role: "Jabatan / Peran Anda",
  tagline: "...",
  email: "anda@email.com",
  github: "https://github.com/username-anda",
  linkedin: "https://linkedin.com/in/username-anda",
  cvUrl: "/cv-anda.pdf",
  // ...dan seterusnya
};
```

Untuk mengganti palet warna atau font, edit variabel CSS di bagian atas `src/index.css`:

```css
.pf-root {
  --bg: #FAFAF8;
  --ink: #1C2430;
  --accent: #9C6B30;
  /* ... */
}
```

### Menambahkan foto profil

Ganti isi `.avatar-placeholder` (yang saat ini menampilkan inisial) dengan tag `<img>` yang menunjuk ke foto Anda, lalu sesuaikan CSS `.avatar-placeholder` sesuai kebutuhan.

### Menambahkan gambar proyek

Ganti `.project-media` (saat ini berupa gradient placeholder) dengan `<img>` ke gambar/screenshot proyek Anda.

## 🌐 Deploy

Bisa di-deploy gratis ke:

- **[Vercel](https://vercel.com/)** — import repo GitHub, otomatis terdeteksi sebagai project Vite
- **[Netlify](https://netlify.com/)** — build command `npm run build`, publish directory `dist`
- **GitHub Pages** — tambahkan `vite-plugin-gh-pages` atau deploy folder `dist` secara manual

## 📄 Lisensi

Bebas digunakan dan dimodifikasi untuk keperluan pribadi maupun komersial.

---

Dibuat dengan React + Vite.

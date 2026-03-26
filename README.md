# Pintar Dagang 📈

**Pintar Dagang** adalah aplikasi kalkulator bisnis cerdas yang dirancang khusus untuk membantu pelaku UMKM mengelola aspek finansial usaha mereka dengan lebih presisi. Aplikasi ini memfasilitasi perhitungan margin keuntungan, penetapan harga jual yang ideal, serta pelaporan laba rugi sederhana.

> **Slogan:** Hitung Tepat, Bisnis Sehat.

---

## ✨ Fitur Utama

- **Penentu Harga (Pricing Mode):** Membantu menentukan harga jual ideal berdasarkan modal bahan baku, kemasan, biaya operasional tetap, dan target margin keuntungan.
- **Analisis Laba Rugi (Profit & Loss Mode):** Menghitung profitabilitas secara real-time berdasarkan volume penjualan dan total biaya produksi (HPP).
- **Penyimpanan Lokal:** Data transaksi dan kalkulasi disimpan secara otomatis di browser menggunakan `localStorage`, sehingga data tetap aman tanpa perlu login.
- **Antarmuka Responsif:** Dioptimalkan untuk penggunaan di perangkat mobile maupun desktop, memudahkan input data di mana saja.

---

## 🛠️ Stack Teknologi

Aplikasi ini dibangun dengan teknologi modern untuk performa dan skalabilitas yang baik:

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router).
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/) untuk keamanan tipe data.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) untuk desain antarmuka.
- **Icons:** [Lucide React](https://lucide.dev/) untuk elemen visual.

---

## 🚀 Cara Menjalankan Proyek

1. **Clone repositori ini:**

   ```bash
   git clone [git@github.com:fitrifityanto/pintar-dagang.git](git@github.com:fitrifityanto/pintar-dagang.git)
   ```

2. **Masuk ke direktori proyek:**

   ```bash
   cd pintar-dagang
   ```

3. **Instal dependensi:**

   ```bash
   npm install
   # atau jika menggunakan pnpm/yarn
   pnpm install
   ```

4. **Jalankan server pengembangan:**

   ```bash
   npm run dev
   ```

5. **Akses di browser:**
   Buka `http://localhost:3000` untuk melihat aplikasi.

---

## 📂 Struktur Proyek

```text
app/
├── calculator/      # Halaman utama aplikasi (Logic & State)
├── layout.tsx       # Konfigurasi layout global & metadata
└── page.tsx         # Landing page / Hero section
components/
├── PricingMode.tsx  # Komponen kalkulasi strategi harga
├── ProfitLossMode.tsx # Komponen kalkulasi laba rugi
└── ProductList.tsx  # Komponen daftar riwayat kalkulasi
```

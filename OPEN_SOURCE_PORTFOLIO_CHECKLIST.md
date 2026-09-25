# Open Source Portfolio Checklist

Dokumen ini dipakai sebagai roadmap untuk mengubah proyek admin dashboard ini menjadi portofolio frontend yang rapi, reusable, dan siap dikembangkan menjadi open source.

## Tujuan

- Menjadi portofolio frontend developer React yang kuat
- Menunjukkan kemampuan component architecture
- Menyediakan komponen reusable yang bisa diekstrak ke package terpisah
- Menjaga repo utama tetap enak dilihat sebagai demo project

## Tahap 1 — Fondasi

- [ ] Tentukan scope komponen yang benar-benar reusable
- [ ] Pisahkan komponen demo dan komponen inti
- [ ] Rapikan penamaan folder dan file
- [ ] Hilangkan `console.log` dari komponen final
- [ ] Kurangi penggunaan `any`
- [ ] Konsistenkan tipe props pada semua komponen
- [ ] Pastikan komponen penting sudah punya default value

## Tahap 2 — Kualitas Komponen

- [ ] Rapikan `Button`
- [ ] Rapikan `Input`
- [ ] Rapikan `Modal`
- [ ] Rapikan `Checkbox`
- [ ] Rapikan `RadioButton`
- [ ] Rapikan `Pagination`
- [ ] Rapikan komponen chart
- [ ] Pastikan API props konsisten antar komponen
- [ ] Pastikan styling tidak terlalu bergantung pada project internal
- [ ] Buat komponen mudah dikustom tanpa ubah banyak kode

## Tahap 3 — Struktur Open Source

- [ ] Buat entry point `src/index.ts`
- [ ] Siapkan build output ke `dist`
- [ ] Siapkan `package.json` untuk package publik
- [ ] Tambahkan `README.md` yang menjelaskan cara install dan pakai
- [ ] Tambahkan `LICENSE`
- [ ] Tambahkan `CONTRIBUTING.md`
- [ ] Tambahkan changelog sederhana
- [ ] Pastikan package bisa di-import dari project lain

## Tahap 4 — Demo dan Dokumentasi

- [ ] Buat halaman demo untuk tiap komponen utama
- [ ] Tampilkan contoh pemakaian yang jelas
- [ ] Tambahkan screenshot atau preview visual
- [ ] Tulis contoh kode singkat di README
- [ ] Jelaskan kapan komponen dipakai
- [ ] Jelaskan prop utama tiap komponen

## Tahap 5 — Theme dan Design System

- [ ] Tentukan sistem warna utama
- [ ] Tentukan skema dark mode dan light mode
- [ ] Buat token warna yang konsisten
- [ ] Pertimbangkan theme switcher
- [ ] Pastikan semua komponen mengikuti theme yang sama
- [ ] Pastikan hasil visual tetap bagus tanpa kustomisasi tambahan

## Tahap 6 — Kesiapan Recruiter

- [ ] Pastikan UI terlihat rapi dan konsisten
- [ ] Pastikan struktur project mudah dibaca
- [ ] Pastikan ada fitur nyata, bukan hanya halaman demo
- [ ] Pastikan portfolio punya cerita yang jelas
- [ ] Siapkan deskripsi project untuk CV dan GitHub
- [ ] Siapkan screenshot utama untuk README atau profil

## Urutan Kerja yang Disarankan

1. Rapikan `Button`, `Input`, dan `Modal`
2. Buat demo page yang stabil
3. Pindahkan komponen reusable ke package terpisah
4. Tambahkan dokumentasi dan entry point
5. Buat theme system minimal
6. Tambahkan komponen lain satu per satu
7. Siapkan publish ke npm

## Target Akhir

- Repo ini terlihat seperti produk yang dirancang serius
- Komponen inti bisa dipakai ulang di project lain
- Portfolio menunjukkan skill frontend engineering, bukan hanya UI
- Project punya potensi untuk berkembang ke arah open source seperti shadcn/ui atau daisyUI


# Take Home Test – Frontend Engineer

Proyek ini merupakan implementasi dari Take Home Test untuk posisi **Frontend Engineer**, menggunakan teknologi modern seperti **React + TypeScript**, **Vite**, dan **Tailwind CSS**.  
Aplikasi ini menampilkan dashboard sederhana yang berisi data user berupa **dummy data**, lengkap dengan fitur pencarian, filter role, sorting nama, pagination, serta halaman detail user.

---

## 🚀 Tech Stack

| Teknologi            | Keterangan                               |
| -------------------- | ---------------------------------------- |
| **React JS**         | Library utama untuk UI                   |
| **TypeScript**       | Static typing untuk kode yang lebih aman |
| **Vite**             | Build tool cepat untuk React             |
| **Tailwind CSS**     | Styling utility-first                    |
| **React Router DOM** | Routing halaman                          |
| **UI-Avatars API**   | Avatar otomatis berdasarkan nama user    |

---

## ✨ Fitur Utama

### 🔐 1. Halaman Login

- Login sederhana menggunakan email & password statis
- Menyimpan status login menggunakan `localStorage`
- Redirect otomatis ke dashboard setelah login

### 🏠 2. Dashboard

Dashboard terdiri dari komponen berikut:

#### 📚 Summary Cards

- Menampilkan total user, transaksi, pendapatan, dan user baru

#### 📊 Chart

- Menampilkan chart dari Summary Cards

#### 🔎 Search

- Mencari user berdasarkan nama

#### 🏷️ Filter Role

- Filter user berdasarkan role: `Admin`, `Manager`, `User`

#### 🔽 Sorting Nama

- Sorting berdasarkan nama (A → Z / Z → A)

#### 🗂️ Grid Card User

- Menampilkan user dalam bentuk card
- Menampilkan foto avatar, nama, role, email, tanggal bergabung
- Setiap card memiliki tombol **Lihat Detail**

#### 📄 Pagination

- Pagination otomatis dengan batas **maksimal 12 nomor**
- Jika halaman banyak, pagination akan menampilkan model:

  1 2 3 ... 10 11 12 ... 30

### 👤 3. Halaman Detail User

Menampilkan detail lengkap user, meliputi:

- Nama
- Email
- Role
- Nomor Telepon
- Alamat
- Deskripsi
- Departemen
- Jenis Kelamin
- Tanggal lahir
- dan lain-lain

Terdapat tombol **Kembali** untuk kembali ke dashboard.

## 📦 Instalasi & Menjalankan Project

### 1. Clone repository

```sh
git clone https://github.com/MaulanaHidayatulloh/TakeHomeTest-FrontendEngineer
```

### 2. Masuk ke folder project

```sh
cd TakeHomeTest-FrontendEngineer
```

### 3. Install dependencies

```sh
npm install
```

### 4. Jalankan project

```sh
npm run dev
```

Aplikasi dapat diakses di:

```sh
http://localhost:5173
```

## 🔑 Akun Login

Untuk keperluan testing:

```sh
Email: admin@gmail.com
Password: admin123
```

## 📝 Catatan

- Semua data user menggunakan dummy data dari file users.ts
- Tidak ada backend (pure frontend)
- UI dibuat menggunakan Tailwind CSS
- Avatar otomatis menggunakan API: https://ui-avatars.com

---

# 👨‍💻 Developer

---

#### Maulana Hidayatulloh Mujanah

#### Frontend Engineer

#### GitHub: https://github.com/MaulanaHidayatulloh

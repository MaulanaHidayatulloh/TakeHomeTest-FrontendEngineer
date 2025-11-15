import { useParams, useNavigate } from "react-router-dom";
import { users } from "../data/users";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DetailUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <div className="p-6 text-red-500">User tidak ditemukan.</div>;
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen ml-64 pt-18">
        <Header />

        {/* Paling Atas */}
        <div className="relative bg-yellow-500 text-white px-6 py-10 rounded-bl-4xl mb-1 overflow-hidden">
          {/* Tombol Kembali */}
          <button
            className="text-white text-2xl mb-4 flex items-center gap-1 hover:underline"
            onClick={() => navigate(-1)}
          >
            ← Kembali
          </button>

          {/* Judul */}
          <h1 className="text-5xl font-bold">Detail Informasi</h1>

          <p className="mt-1 text-base tracking-wide">
            {user.role?.toUpperCase() || "USER DETAIL"}
          </p>
        </div>

        <div className="p-6">
          {/* Profil Info */}
          <div className="bg-white shadow p-6 rounded-xl mb-5">
            <div className="flex items-center gap-4">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user.name
                )}&size=150&background=random`}
                className="w-28 h-28 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-gray-600 mt-1 font-bold">{user.role}</p>
                <p className="text-gray-400">{user.status}</p>
              </div>
            </div>
          </div>
          {/* Proses Pekerjaan + Cuaca */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow p-6 rounded-xl lg:col-span-2">
              <h2 className="font-semibold mb-4">Proses Pekerjaan</h2>

              <div className="mb-3">
                <p className="text-sm mb-1 font-medium">
                  Kemajuan: {user.progress}%
                </p>
                <div className="w-full h-4 bg-gray-200 rounded-full border">
                  <div
                    className="h-4 bg-green-500 rounded-full border"
                    style={{ width: `${user.progress}%` }}
                  ></div>
                </div>
              </div>

              <ul className="text-sm mt-4 space-y-1 text-gray-700">
                <li>Target Selesai: {user.targetCompletion}</li>
                <li>Realisasi Selesai: {user.realizationCompleted}</li>
              </ul>
            </div>

            {/* Cuaca */}
            <div className="bg-white shadow p-6 rounded-xl flex flex-col items-center text-center">
              <h2 className="font-semibold mb-3">Cuaca Hari Ini</h2>

              {/* ICON CUACA */}
              <div className="text-gray-700 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-14 h-14"
                >
                  <path d="M12 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zm6.36 2.64a1 1 0 0 1 0 1.41l-.7.7a1 1 0 1 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 0zM4 13a4 4 0 0 1 7.9-1h.1a5 5 0 1 1 0 10H8a5 5 0 0 1-4-9zm4 7h4a3 3 0 1 0 0-6h-1a1 1 0 0 1-.96-.73A2 2 0 1 0 8 16H7a3 3 0 0 0 1 6zM6.34 7.05a1 1 0 0 1 0 1.41l-.7.7A1 1 0 0 1 4.23 7.76l.7-.7a1 1 0 0 1 1.41 0z" />
                </svg>
              </div>

              {/* SUHU */}
              <p className="text-3xl font-bold text-gray-800">29°C</p>

              {/* KETERANGAN */}
              <p className="text-gray-600 text-sm mt-1">Sebagian Berawan</p>
            </div>
          </div>

          {/* Detail Informasi + Lokasi Kerja */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
            {/* Detail Informasi */}
            <div className="bg-white shadow p-6 rounded-xl">
              <h2 className="font-bold mb-4">Detail Informasi</h2>

              <div className="text-gray-700 space-y-3">
                {/* EMAIL */}
                <div className="grid grid-cols-3 border-b pb-2">
                  <span className="font-semibold">Email</span>
                  <span className="col-span-2">: {user.email}</span>
                </div>
                {/* Nomor HP */}
                <div className="grid grid-cols-3 border-b pb-2">
                  <span className="font-semibold">Nomor Telepon</span>
                  <span className="col-span-2">: {user.phone}</span>
                </div>
                {/* Alamat */}
                <div className="grid grid-cols-3 border-b pb-2">
                  <span className="font-semibold">Alamat</span>
                  <span className="col-span-2">: {user.address}</span>
                </div>
                {/* jenis Kelamin */}
                <div className="grid grid-cols-3 border-b pb-2">
                  <span className="font-semibold">Jenis Kelamin</span>
                  <span className="col-span-2">: {user.gender}</span>
                </div>
                {/* Tanggal Lahir */}
                <div className="grid grid-cols-3 border-b pb-2">
                  <span className="font-semibold">Tanggal Lahir</span>
                  <span className="col-span-2">: {user.birthDate}</span>
                </div>
                {/* Departemen*/}
                <div className="grid grid-cols-3 border-b pb-2">
                  <span className="font-semibold">departemen</span>
                  <span className="col-span-2">: {user.department}</span>
                </div>
                {/* Jenis Kontrak */}
                <div className="grid grid-cols-3 border-b pb-2">
                  <span className="font-semibold">Jenis Kontrak</span>
                  <span className="col-span-2">: {user.contractType}</span>
                </div>
                {/* PIC */}
                <div className="grid grid-cols-3 border-b pb-2">
                  <span className="font-semibold">PIC</span>
                  <span className="col-span-2">: {user.pic}</span>
                </div>
                {/* Tanggal Bergabung */}
                <div className="grid grid-cols-3 border-b pb-2">
                  <span className="font-semibold">Tanggal Bergabung</span>
                  <span className="col-span-2">: {user.createdAt}</span>
                </div>
                {/* Deskripsi */}
                <div className="grid grid-cols-3 border-b pb-2">
                  <span className="font-semibold">Deskripsi</span>
                  <span className="col-span-2">: {user.bio}</span>
                </div>
              </div>
            </div>

            {/* Lokasi Kerja */}
            <div className="bg-white shadow p-6 rounded-xl">
              <h2 className="font-semibold mb-4">Lokasi Kerja</h2>
              <div className="flex gap-4">
                {/* MAP */}
                <iframe
                  src={user.projectLocation.mapImage}
                  className="w-2/3 h-112 rounded-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Lokasi, Lintang & Bujur */}
                <div className="w-1/3 flex flex-col text-gray-700 space-y-2">
                  <p>
                    <strong>Lokasi:</strong> {user.projectLocation.location}
                  </p>
                  <p>
                    <strong>Lintang:</strong> {user.projectLocation.latitude}°
                  </p>
                  <p>
                    <strong>Bujur:</strong> {user.projectLocation.longitude}°
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

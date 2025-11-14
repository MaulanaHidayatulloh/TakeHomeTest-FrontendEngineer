import { useParams, useNavigate } from "react-router-dom";
import { users } from "../data/users";

export default function DetailUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Cari user by ID
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <div className="p-6 text-red-500">User tidak ditemukan.</div>;
  }

  return (
    <div className="p-6">
      <button
        className="mb-4 text-blue-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Kembali
      </button>

      <div className="bg-white shadow p-6 rounded-xl max-w-xl">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              user.name
            )}&size=150&background=random`}
            className="w-28 h-28 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.role}</p>
          </div>
        </div>

        <div className="space-y-3">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Nomor Telepon:</strong> {user.phone}
          </p>
          <p>
            <strong>Alamat:</strong> {user.address}
          </p>
          <p>
            <strong>Tanggal Gabung:</strong> {user.createdAt}
          </p>
          <p>
            <strong>Deskripsi:</strong> {user.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

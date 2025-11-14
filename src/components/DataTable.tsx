import { useState } from "react";
import { users } from "../data/users";
import { useNavigate } from "react-router-dom";

export default function DataGrid() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [roleFilter, setRoleFilter] = useState("all");
  const [sortName, setSortName] = useState<"asc" | "desc">("asc");
  const navigate = useNavigate();

  const perPage = 8;

  // SORTIR BERDASARKAN NAMA
  const sorted = [...users].sort((a, b) => {
    if (sortName === "asc") {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });

  // FITUR SEARCH + FILTER ROLE
  const filtered = sorted.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase());
    const matchesRole =
      roleFilter === "all" ? true : u.role.toLowerCase() === roleFilter;

    return matchesSearch && matchesRole;
  });

  // PAGINATION
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const pages = Math.ceil(filtered.length / perPage);

  // WARNA ROLE
  const roleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "admin":
        return "bg-red-100 text-red-700 border-red-300";
      case "manager":
        return "bg-green-100 text-green-700 border-green-300";
      case "user":
        return "bg-blue-100 text-blue-700 border-blue-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  // TOGGLE SORT NAMA
  const togglesortName = () => {
    setSortName(sortName === "asc" ? "desc" : "asc");
  };

  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      {/* BAGIAN ATAS */}
      <div className="flex items-center justify-between mb-4">
        {/* FITUR SEARCH */}
        <div className="relative w-3/3 mr-3">
          <span className="absolute inset-y-0 left-3 flex items-center">
            🔍
          </span>
          <input
            type="text"
            placeholder="Cari Nama..."
            className="w-full pl-10 pr-4 py-2 border rounded-xl bg-white shadow-sm"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* FITUR ROLE + SORT */}
        <div className="flex items-center gap-3">
          <select
            className="border rounded-xl px-3 py-2 shadow-sm bg-white"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="all">Semua Role</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="user">User</option>
          </select>

          {/* TOMBOL SORT BERDASARKAN NAMA */}
          <button
            onClick={togglesortName}
            className="border rounded-xl p-2 shadow-sm bg-white hover:bg-gray-100"
          >
            {sortName === "asc" ? "▼" : "▲"}
          </button>
        </div>
      </div>

      {/* GRID CARD */}
      <div className="grid grid-cols-4 gap-4">
        {paginated.map((u) => (
          <div
            key={u.id}
            className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition"
          >
            <div className="flex gap-4">
              {/* FOTO PROFILE */}
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  u.name
                )}&background=random&size=128`}
                alt="Avatar"
                className="w-20 h-20 rounded-full"
              />

              {/* USER INFO */}
              <div className="flex-1">
                <h2 className="font-bold text-lg">{u.name}</h2>

                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded border ${roleColor(
                    u.role
                  )}`}
                >
                  {u.role}
                </span>

                <p className="text-sm text-gray-600 mt-2">{u.email}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Tanggal Gabung: {u.createdAt}
                </p>
              </div>
            </div>

            {/* LIHAT DETAIL */}
            <button
              onClick={() => navigate(`/detail/${u.id}`)}
              className="mt-4 w-full py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Lihat Detail
            </button>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 mt-4">
        {(() => {
          const maxVisible = 12;
          let start = 1;
          let end = pages;

          if (pages > maxVisible) {
            const half = Math.floor(maxVisible / 2);

            if (page <= half) {
              start = 1;
              end = maxVisible;
            } else if (page >= pages - half) {
              start = pages - maxVisible + 1;
              end = pages;
            } else {
              start = page - half;
              end = page + half;
            }
          }

          const buttons = [];
          for (let p = start; p <= end; p++) {
            buttons.push(
              <button
                key={p}
                className={`px-3 py-1 rounded border ${
                  page === p ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            );
          }

          return (
            <div className="flex items-center gap-2">
              {start > 1 && (
                <>
                  <button
                    className="px-3 py-1 rounded border"
                    onClick={() => setPage(1)}
                  >
                    1
                  </button>
                  <span className="px-2 text-gray-500">...</span>
                </>
              )}

              {buttons}

              {end < pages && (
                <>
                  <span className="px-2 text-gray-500">...</span>
                  <button
                    className="px-3 py-1 rounded border"
                    onClick={() => setPage(pages)}
                  >
                    {pages}
                  </button>
                </>
              )}
            </div>
          );
        })()}
      </div>
    </div>
  );
}

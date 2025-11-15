import { useState, useRef, useEffect } from "react";

export default function Header() {
  const logout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/";
  };

  const userName = localStorage.getItem("userName") || "User";

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-64 right-0 z-10 flex justify-between items-center bg-white p-4 shadow">
      <h1 className="text-xl font-semibold">Selamat Datang, {userName}</h1>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-3 cursor-pointer"
        >
          {/* Foto profil */}
          <img
            src="https://ui-avatars.com/api/?name=Admin+Maulana&background=black"
            alt="Profile"
            className="w-10 h-10 rounded-full border"
          />
          {/* Nama */}
          <span className="font-medium">{userName}</span>

          <span
            className={`text-black-600 transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow rounded border">
            <button
              onClick={logout}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Keluar
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

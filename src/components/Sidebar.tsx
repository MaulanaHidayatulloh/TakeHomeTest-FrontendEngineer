import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "bg-yellow-500 font-semibold text-white" : "";

  return (
    <aside className="w-64 bg-white shadow h-screen p-5 pr-0 fixed left-0 z-20">
      <h2 className="text-xl font-bold mb-6">Logo Perusahaan</h2>

      <nav className="space-y-3 border-t pt-3">
        <Link
          to="/dashboard"
          className={`block p-2 rounded-l-lg hover:bg-yellow-500 ${isActive(
            "/dashboard"
          )}`}
        >
          Dashboard
        </Link>

        <Link
          to="/users"
          className={`block p-2 rounded-l-lg hover:bg-yellow-500 ${isActive(
            "/users"
          )}`}
        >
          Users
        </Link>

        <Link
          to="/reports"
          className={`block p-2 rounded-l-lg hover:bg-yellow-500 ${isActive(
            "/reports"
          )}`}
        >
          Reports
        </Link>
      </nav>
    </aside>
  );
}

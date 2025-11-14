import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow h-screen p-5">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <nav className="space-y-3">
        <Link className="block p-2 hover:bg-gray-100 rounded" to="/dashboard">
          Dashboard
        </Link>
        <button className="block p-2 hover:bg-gray-100 rounded w-full text-left">
          Users
        </button>
        <button className="block p-2 hover:bg-gray-100 rounded w-full text-left">
          Reports
        </button>
      </nav>
    </aside>
  );
}

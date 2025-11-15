import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DataUser from "../components/DataUser";

export default function Users() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen ml-64">
        <Header />

        <div className="pt-18">
          {/* Paling Atas */}
          <div className="relative bg-yellow-500 text-white px-6 py-17 rounded-bl-4xl mb-1 overflow-hidden">
            <h1 className="text-5xl font-bold">Users</h1>
          </div>
          {/* Isi Konten */}
          <div className="p-6 pt-0">
            <DataUser />
          </div>
        </div>
      </div>
    </div>
  );
}

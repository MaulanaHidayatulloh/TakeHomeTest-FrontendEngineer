import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import DataTable from "../components/DataTable";
import { stats } from "../data/stats";
import DashboardCharts from "../components/DashboardCharts";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen ml-64">
        <Header />

        <div className="pt-18">
          {/* Paling Atas */}
          <div className="relative bg-yellow-500 text-white px-6 py-17 rounded-bl-4xl mb-1 overflow-hidden">
            <h1 className="text-5xl font-bold">Dashboard</h1>
          </div>
          {/* Isi Konten */}
          <div className="p-6">
            <div className="grid grid-cols-4 gap-4">
              {stats.map((s) => (
                <SummaryCard key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
            {/* Chart */}
            <DashboardCharts />

            {/* Data User */}
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
}

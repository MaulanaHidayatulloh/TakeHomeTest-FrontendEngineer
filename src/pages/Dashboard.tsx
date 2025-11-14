import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import DataTable from "../components/DataTable";
import { stats } from "../data/stats";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />

        <div className="p-6">
          <div className="grid grid-cols-4 gap-4">
            {stats.map((s) => (
              <SummaryCard key={s.label} label={s.label} value={s.value} />
            ))}
          </div>

          <DataTable />
        </div>
      </div>
    </div>
  );
}

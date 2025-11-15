import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import {
  monthlyRevenue,
  monthlyUsers,
  monthlyTransactions,
  newUsersNovember,
} from "../data/chartData";

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* 1. CHART PENDAPATAN */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Pendapatan (2025)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyRevenue}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis
              tickFormatter={(v) => `Rp ${(v / 1_000_000).toFixed(0)} jt`}
            />
            <Tooltip
              formatter={(v: number) => `Rp ${v.toLocaleString("id-ID")}`}
            />
            <Bar dataKey="value" fill="blue" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 2. CHART TOTAL USER */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Total User (2025)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyUsers}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip formatter={(v: number) => `${v} user`} />
            <Bar dataKey="value" fill="green" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 3. CHART TRANSAKSI */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Jumlah Transaksi (2025)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyTransactions}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip formatter={(v: number) => `${v} transaksi`} />
            <Bar dataKey="value" fill="orange" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 4. CHART USER BARU BULAN NOVEMBER */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">
          User Baru - November 2025
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={newUsersNovember}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip formatter={(v: number) => `${v} user`} />
            <Bar dataKey="value" fill="red" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

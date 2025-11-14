type Props = {
  label: string;
  value: string | number;
};

export default function SummaryCard({ label, value }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-gray-600">{label}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}

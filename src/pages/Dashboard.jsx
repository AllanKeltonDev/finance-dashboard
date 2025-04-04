// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { fetchData } from "../services/api";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center">Carregando...</p>;

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Resumo Financeiro</h2>
      <div className="mb-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {data.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded-lg shadow-md ${
              item.amount < 0 ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            }`}
          >
            <p className="font-semibold">{item.title}</p>
            <p className="text-lg">R$ {item.amount.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

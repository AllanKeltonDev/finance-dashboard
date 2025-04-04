// src/components/Sidebar.jsx
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-5 flex flex-col">
      <Link to="/" className="mb-4 hover:text-gray-400">Dashboard</Link>
      <Link to="/transactions" className="mb-4 hover:text-gray-400">Transações</Link>
      <Link to="/reports" className="mb-4 hover:text-gray-400">Relatórios</Link>
    </aside>
  );
};

export default Sidebar;

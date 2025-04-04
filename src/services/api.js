// src/services/api.js
export const fetchData = async () => {
  // Dados simulados – substitua por chamada a API real, se necessário
  return [
    { id: 1, title: "Receita", amount: 5000 },
    { id: 2, title: "Despesas", amount: -3000 },
    { id: 3, title: "Investimentos", amount: 1500 }
  ];
};

import React from 'react'
import Titulo from './titulo';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: "Receitas", value: 15010 },
  { name: "Despesas", value: 2010 },
  { name: "Investimentos", value: 1010 }
];

const COLORS = ["#00C49F", "#FFBB28", "#0088FE","#FF8042" ];

const GraficosPizza = () => {
  return (
    <div className='w-full md:w-1/3 flex flex-col items-center bg-white dark:bg-transparent'>
      <Titulo titulo= 'Resumo'/>

      <ResponsiveContainer width={"100%"} height={500}>
        <PieChart width={500} height={400}>
          <Tooltip />
          <Legend />
          <Pie data={data} innerRadius={110} outerRadius={180} fill="#8884d8" paddingAngle={5} dataKey={ "value"}>
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>  
          ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

    </div>
  )
}

export default GraficosPizza;
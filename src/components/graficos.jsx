import React from 'react'
import Titulo from './titulo';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  { label: "January", renda: 5000, despesa: 3000 ,investimento: 2000 },
  { label: "February", renda: 5200, despesa: 3200 ,investimento: 2100 },
  { label: "March", renda: 5500, despesa: 3500 ,investimento: 2200 },
  { label: "April", renda: 4800, despesa: 2900 ,investimento: 2300 },
  { label: "May", renda: 5100, despesa: 3100 ,investimento: 2400 },
  { label: "June", renda: 5300, despesa: 3300 ,investimento: 2500 },
  { label: "July", renda: 5400, despesa: 3400 ,investimento: 2600 },
  { label: "August", renda: 5600, despesa: 3600 ,investimento: 2200 },
  { label: "September", renda: 5700, despesa: 3700 ,investimento: 2700 },
  { label: "October", renda: 5900, despesa: 3900 ,investimento: 2800 },
  { label: "November", renda: 6000, despesa: 4000 ,investimento: 2900 },
  { label: "December", renda: 6200, despesa: 4200 ,investimento: 3300 },
];

const Graficos = () => {
  return (
    <div className='w-full md:w-2/3'>
      <Titulo titulo="Gráficos de Receitas e Despesas" />
      
      <ResponsiveContainer width={"100%"} height={500} className='mt-5'>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray= "3 3" />
          <YAxis />
          <XAxis />
          <Legend />
          <Line type='monotone' dataKey={"renda"} stroke='#82ca9d'/>
          <Line type='monotone' dataKey={"despesa"} stroke='#Fa4abb'/>
          <Line type='monotone' dataKey={"investimento"} stroke='#111abb'/>
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Graficos;
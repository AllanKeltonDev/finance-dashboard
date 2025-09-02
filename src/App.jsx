import Contas from "./components/contas";
import Estatisticas from "./components/estatisticas";
import Graficos from "./components/graficos";
import GraficosPizza from "./components/graficosPizza";
import Info from "./components/info";
import Navbar from "./components/navbar";
import Transacoes from "./components/transacoes";
import useStore from "./store";
import { ThemeContext } from "./context";
import { useState } from "react";


const App = () => {
 
  const [theme, setTheme] = useState('dark');

  const textColor = theme === "dark" ? "bg-white" : "bg-black";

  return ( 
  
  <ThemeContext.Provider value={{theme, setTheme}}>

  <main>

{/* Nessa div temos a barra de navegação da parte superior */}
        <div className={`w-full px-6 md:px-20 ${textColor} dark:bg-slate-900`}>
             <Navbar />
            

{/* Nessa div temos as informacoes gerais do dashboard, como o saldo total, despesas e receitas. */}
          <div className="px-0 md:px-5 2xl:px-20">
              <Info titulo='Dashboard'
              subTitulo='Controle de receitas e despesas'/>
              
              <Estatisticas />
            
            
{/* Aqui temos os gráficos pizza e de barras que mostram as despesas e receitas por categoria. */}
            <div className="w-full flex flex-col-reverse md:flex-row items-center gap-10">
              <Graficos />
              <GraficosPizza />
            </div> 

{/* Nessa div teremos o hist[orico de transações, onde serão listadas todas as transações realizadas. E saldos das contas*/}
            <div className="flex flex-col-reverse md:flex-row gap-0 md:gap-10 2xl:gap-20">
              <Transacoes />
              <Contas />
            </div>
          </div>
        </div>
         </main>
  </ThemeContext.Provider>
         );
}

export default App;
import React, { useState} from 'react';// Importando o React e o useState para gerenciar o estado do componente.
import Avatar from "../assets/avatar.png"; // Importa a imagem do avatar do usuário.
import { RiCurrencyLine } from "react-icons/ri";// Importa a biblioteca de ícones React Icons e o ícone específico RiCurrencyLine.
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'; // Importa o ícone de seta para baixo do Material Design Icons, embaixo do e-mail do usuário
import { ThemeContext } from '../context'; 
import { useContext } from 'react'; // Importa o hook useContext para acessar o contexto do tema.

const links = ["Dashboard", "Transações", "Contas", "Configurações"]; 

const Navbar = () => {
  const [selecionar, setSelecionar] = useState(0);

const context = useContext(ThemeContext); 

const textColor = context.theme === "dark" ? "text-white" : "text-black"; // Define a cor do texto com base no tema atual.

  console.log(context); // Exibe o valor do contexto no console, útil para depuração.
  return (
    // Div que envolve a barra de navegação.
  <div className='w-full flex items-center justify-between py-6'>

{/* Div que envolve o logo e o nome do aplicativo. */}
    <div className='flex items-center gap-2 cursor-pointer'>


{/* Div que armazena o ícone do aplicativo ao lado de Minhas Finanças. */}
      <div className='w-10 md:w-12 md:h-12 flex items-center justify-center bg-blue-400 dark:bg-blue-800 rounded-xl'>
        <RiCurrencyLine className=' text-amber-50 text-3xl hover:animate-spin rotate-5'/>
      </div>
     {/* Div que exibe o nome do aplicativo. */}
      <span className={`text-xl font-bold ${textColor} dark:text-white`}>Minhas Finanças</span>
    </div>

    {/* Div que contém os links de navegação. */}
    <div className='hidden md:flex items-center gap-6'>
      {links.map((link, index) => (
        <div key={index} className={`${index === selecionar ? "bg-gray-600 dark:bg-slate-800 text-white ": "text-gray-700 dark:text-gray-400" }px-6 py-2 rounded-full`} onClick={() => setSelecionar(index)}>
          <a href='#'>{link}</a>
        </div>
      ))}
    </div>
    
    <div className='flex items-center gap-10 2xl:gap-20'>   

    <div><button onClick={() => context.setTheme(context.theme === "dark" ? "light": "dark")}>Tema</button></div>
    
      <div className='flex items-center gap-2' >
        <img src={Avatar} alt="Usuário" className='w-10 md:w-12 h-10 md:h-12 rounded-full object-cover cursor-pointer' />
        <div className='hidden md:block '>
        <p className='text-lg font-medium text-black dark:text-gray-400'>Allan Kelton</p>
        <span className='text-sm text-gray-700 dark:text-gray-500'>allankeltonsilva@gmail.com</span>
        </div>
        <MdOutlineKeyboardArrowDown className='hidden md:block text-2xl text-gray-600 dark:text-gray-300 cursor-pointer'/>

      

      </div>
    </div>
  </div> // Abriga o nome e foto do usuário 
  );
};

export default Navbar;

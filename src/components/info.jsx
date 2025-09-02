import React from 'react'
import { IoFilterSharp, IoSearchOutline } from 'react-icons/io5';

const Info = ({titulo, subTitulo}) => {
  return(

  <div className='flex flex-col md:flex-row md:items-center justify-between py-8'>


    <div className='mb-6'>
      <h1 className='text-4xl font-semibold text-black dark:text-gray-200 mb-2'>{titulo}</h1>

      <span className='text-gray-600 dark:text-gray-500'>{subTitulo}</span>
    </div>

    <div className='flex items-center gap-4 md:gap-10 2xl:gap-20'>
      <div className='flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-md p-2'>
        <IoSearchOutline className='text-xl text-gray-600 dark:text-gray-500'/>
        <input type="text" placeholder='Pesquisar' className='bg-transparent outline-none text-gray-700 dark:text-gray-500'/>
      </div>
      <button className='flex items-center gap-2 bg-blue-400 dark:bg-blue-800 py-2 px-4 rounded text-white cursor-pointer'>
        <IoFilterSharp size={24}/>
        <span className='text-base'>Filtrar Por</span>
      </button>
    </div>


  </div> 
  )
}

export default Info;

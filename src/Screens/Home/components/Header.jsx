import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-8 mt-3 border  rounded-2xl shadow-purple-600 shadow-lg p-4  items-center justify-between'>
        <button className='btn btn-primary hover:scale-110 btn-sm md:btn-md'>
            + New Ideas

        </button>
        <h2 className='font-bold text-sm md:text-2xl'>
            Top 20 ideas
        </h2>
        <div>
            <img className='mt-3 ' src='src\assets\logo.svg' alt='kk'/>
        </div>
        <h2 className='font-bold bg-purple-600 rounded-2xl p-3 text-white text-sm hidden md:block'>
            By Nihil
        </h2>
    </div>
  )
}

export default Header
import React, { useState } from 'react'
import HomeScreen from './Screens/Home/HomeScreen'
import { ThemeContext } from './context/ThemeContex'
import { createBrowserRouter } from 'react-router-dom'

const App = () => {
  const [theme,setheme] = useState('dark')
  const router=createBrowserRouter(
    [
      {
        path:'/',
        element:<HomeScreen/>
      },{
        path:'/about',
        element:<h1>About</h1>
      }
    ]
  )

  return (
    <ThemeContext.Provider value={{theme,setheme}}>
    <div
    data-theme={theme}
  
    >
    <div className='max-w-2xl w-full items-center '>
    <HomeScreen/>
    </div>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContex'

const Hero = () => {
    const {theme,setheme}= useContext(ThemeContext)
  return (
    <div className='my-5 flex flex-col items-center gap-5'>
        <h2 className='text-xl  font-bold text-center '>
            Top 20 Productive Ideas for Your Startup
        </h2>
        <h2 className='text-center my-3'>
            <strong className=' text-secondary'>
            Like your Favroite ideas,
                </strong> Write your best ideas 
                <strong className=' text-primary'>
                , No account needed
                </strong>
        </h2>
        <div>
        <select 
        onChange={(event)=>setheme(event.target.value)}
        
        className="select select-secondary w-full max-w-xs">
  <option disabled selected>Select Theme</option>
  <option>light</option>
  <option>dark</option>
  <option>cupcake</option>
  <option>bumblebee</option>
  <option>emerald</option>
  <option>corporate</option>
  <option>synthwave</option>
  <option>retro</option>
  <option>luxury</option>
</select>














        </div>
    </div>
  )
}

export default Hero
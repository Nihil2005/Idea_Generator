import React from 'react'
import Header from '../Home/components/Header'
import { ChevronLeft, Info, Send } from 'lucide-react'

const AddNewScreen = () => {
  return (
    <div>
        <Header/>

        <button className='btn mt-7 btn-accent'>
            <ChevronLeft/>
            Back
        </button>
        <h2 className='font-bold text-xl mt-5'>
            From Concept to Creation : Empowerning your Startup
        </h2>
        <div className='flex flex-col mt-7 gap-2'>
            <label>
                Your Idea *
            </label>
            <textarea className="textarea textarea-borderd border-primary shadow-lg shadow-purple-700" placeholder="Your Idea"></textarea>

        </div>

        <div className='flex flex-col mt-7 gap-2'>
            <label className='flex justify-between text-sm'>
                Your Username  *
                <span className='flex items-center gap-2'>
                  <Info/>  No Account Needed
                </span>
            </label>
            <input type="text" placeholder="User Name" className="input  w-full input-bordered border-purple-500 shadow-lg shadow-purple-600" />
        </div>

        <button className='btn w-full btn-primary mt-9 rounded-full text-white text-xl'>
            Send
            <Send/>
        </button>
    </div>
  )
}

export default AddNewScreen
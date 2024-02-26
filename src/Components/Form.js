
import React from 'react'

const Form = () => {
  return (
    <div className='h-screen bg-black flex justify-center items-center'>
        <label className='relative'>
            <input type='text' className='h-20 w-96 transition duration-300 focus:border-blue-500 border-white border-opacity-50 border-2 outline-none rounded-xl px-6 focus:text-white text-4xl bg-black '/>
            <span className='text-4xl text-white text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-300 input-text'>Input</span>
        </label>
    </div>
  )
}

export default Form
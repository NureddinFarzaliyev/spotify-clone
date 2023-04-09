import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Input = () => {
    return (
        <div className='absolute top-4 left-40 font-font-light cursor-pointer z-20'>
            <input type="text" placeholder='What do you want to listen to?' className='px-10 w-80 h-9 mt-[-5px] rounded-full' />
            <FiSearch className='absolute top-1 left-2 text-xl ' />
        </div>
    )
}

export default Input
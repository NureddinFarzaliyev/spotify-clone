import React from 'react'
import { Albums } from '../images'

const BrowseCard = ({ text }) => {

    const colors = ["bg-blue-900", "bg-yellow-700", "bg-amber-600", "bg-violet-800", "bg-violet-700", "bg-indigo-900", "bg-blue-500", "bg-red-900", "bg-blue-800", "bg-yellow-600", "bg-lime-800", "bg-emerald-700", "bg-green-400", "bg-green-900"]
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let randomImg = Albums[Math.floor(Math.random() * Albums.length)]

    return (
        <div className={`h-56 w-56 overflow-hidden relative ${randomColor} rounded-lg text-white font-font-black cursor-pointer text-xl p-5`}>
            <div>{text}</div>
            <img src={randomImg} alt="" className='absolute h-28 shadow-lg rotate-[30deg] bottom-[-1rem] right-[-1rem]' />
        </div>
    )
}

export default BrowseCard
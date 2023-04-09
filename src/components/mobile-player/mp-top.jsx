import React from 'react'

import { Albums } from '../images'
import { BsPlayFill } from 'react-icons/bs'
import { AiFillHeart, AiOutlinePause } from 'react-icons/ai'

const MpTop = () => {

    const pauseHandler = () => {
        document.querySelector('.playButton').classList.toggle('hidden')
        document.querySelector('.pauseButton').classList.toggle('hidden')
    }

    return (
        <div className='mb-2 shadow-xl mx-auto rounded w-[95vw] bg-[#171F2A] h-12 p-1 px-3 flex justify-between'>
            <div className='text-white font-font-light items-center flex'>
                <img src={Albums[0]} className='h-10' />
                <h1 className='ml-2'>Nightmare</h1>
            </div>
            <div className='text-white flex items-center'>
                <AiFillHeart className='text-xl' />
                <div className='text-3xl ml-2'>
                    <AiOutlinePause className='pauseButton hidden' onClick={pauseHandler} />
                    <BsPlayFill className='playButton' onClick={pauseHandler} />
                </div>
            </div>
        </div>
    )
}

export default MpTop
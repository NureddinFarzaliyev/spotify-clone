import React from 'react'
import { redirect } from 'react-router-dom'

import { Images } from '../images'
import { AiFillHome, AiFillPlusSquare, AiFillHeart } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { BsFillBookmarkFill } from 'react-icons/bs'


const NavTop = () => {

    const SecondButton = ({ content, image }) => {
        return (
            <div className='flex items-center mt-3 text-gray-text font-font-medium cursor-pointer transition duration-200 hover:text-white'>
                <div className='mr-1 w-8'>{image}</div>
                <p className='mt-1 ml-1 text-sm font-font-bold'>{content}</p>
            </div>
        )
    }

    const clickHandler = () => {
        redirect('/')
    }

    return (
        <div className='text-white'>
            {/* Logo */}
            <div className=' flex items-center justify-start mb-6'>
                <img src={Images.Logo} alt="logo" height='50' width='50' />
                <p className='font-font-medium text-2xl ml-2'>Spotify</p>
            </div>

            {/* Buttons 1 */}
            <button onClick={clickHandler} className='mt-4 cursor-pointer text-gray-text hover:text-white transition duration-300'>
                <div className='font-font-medium flex items-centers'>
                    <AiFillHome className='text-2xl mr-3' />
                    <p className='mt-1'>Home</p>
                </div>
            </button>
            <div className='mt-4 cursor-pointer text-gray-text hover:text-white transition duration-300'>
                <div className='font-font-medium flex items-centers'>
                    <FiSearch className='text-2xl mr-3' />
                    <p className='mt-1'>Search</p>
                </div>
            </div>
            <div className='mt-4 cursor-pointer text-gray-text hover:text-white transition duration-300'>
                <div className='font-font-medium flex items-centers'>
                    <svg className='mr-3' fill='#B3B3B3' role="img" height="24" width="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-encore-id="icon"><path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path></svg>
                    <p className='mt-1'>Your Library</p>
                </div>
            </div>

            {/* Buttons 2 */}
            <div className='mt-10'>
                <SecondButton content="Create Playlist" image={<AiFillPlusSquare className='bg-black border-none ml-[-1px] text-[2rem] text-gray-text rounded-sm overflow-hidden' />} />
                <SecondButton content="Liked Songs" image={<AiFillHeart className='bg-purple-900 ml-[2px] h-[1.65rem] w-[1.65rem] border-none p-1 text-gray-text rounded-sm overflow-hidden' />} />
                <SecondButton content="Your Episodes" image={<BsFillBookmarkFill className='bg-green-900 ml-[2px] h-[1.65rem] w-[1.65rem] border-none p-1 text-green-600 rounded-sm overflow-hidden' />} />
            </div>
        </div>
    )
}

export default NavTop
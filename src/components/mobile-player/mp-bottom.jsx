import React from 'react'
import { Link } from 'react-router-dom'
import './mp.css'

import { AiFillHome } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { BsSpotify } from 'react-icons/bs'

const MpBottom = () => {


    const libraryHandler = () => {
        const element = document.querySelector('.libwarn')
        element.classList.toggle('hidden')
    }

    return (
        <div className='flex mpbwrapper justify-around items-center bg-bg-1 py-2 shadow-2xl text-white w-[100vw]'>
            <Link to='/'>
                <div className='flex flex-col items-center justify-center text-3xl'>
                    <AiFillHome />
                    <p className='text-sm font-font-light mt-1'>Home</p>
                </div>
            </Link>

            <Link to='/search'>
                <div className='flex flex-col items-center justify-center text-3xl'>
                    <FiSearch />
                    <p className='text-sm font-font-light mt-1'>Search</p>
                </div>
            </Link>

            <Link>
                <div className='flex flex-col items-center justify-center text-3xl' onClick={libraryHandler}>
                    <svg role="img" fill='white' height="24" width="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-encore-id="icon"><path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path></svg>
                    <p className='text-sm font-font-light mt-1'>Your Library</p>
                </div>
            </Link>

            <div className='flex flex-col items-center justify-center text-2xl'>
                <BsSpotify />
                <p className='text-sm font-font-light mt-1'>Get App</p>
            </div>

            <div className='bg-[#0D72EA] absolute bottom-20 rounded-lg p-3 w-96 h-36 right-5 hidden libwarn'>
                <div className='font-font-medium text-xl'>Enjoy Your Library</div>
                <div>See your saved songs, podcasts, artists and playlists in the Spotify App</div>
                <div className='flex justify-end gap-3 mt-3 mb-3'>
                    <button>Not Now</button>
                    <button className='bg-white p-1 rounded text-[#0D72EA] px-4'>Get App</button>
                </div>
            </div>
        </div>
    )
}

export default MpBottom
import React from 'react'

import { AiFillCaretDown, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { MdOpenInNew } from 'react-icons/md'
import { Images } from '../images'
import './top-nav.css'

const HomeNav = () => {

    const profileMenuHandler = () => {
        document.querySelector('.profileMenu').classList.toggle('hidden')
    }

    return (
        <div className='absolute z-10 w-[70vw] ml-[30vw] top-0 lg:w-[82vw] px-10 lg:ml-[18vw] flex h-16 justify-between items-center'>
            <div className='flex justify-center mt-10 items-center'>
                <div>
                    <div className='goBackButton bg-bg-1 text-lg cursor-pointer text-white w-7 h-7 rounded-full flex items-center justify-center' >
                        <AiOutlineLeft />
                    </div>
                    <div className='goBack h-8 pt-1 rounded-md mt-3 ml-[-25px] w-24 text-center bg-bg-3 shadow-2xl text-gray-text font-font-medium'>Go Back</div>
                </div>
                <div className='ml-[-30px]'>
                    <div className='goForwardButton bg-bg-3 text-lg cursor-pointer text-gray-text w-7 h-7 rounded-full flex items-center justify-center' >
                        <AiOutlineRight />
                    </div>
                    <div className='goForward h-8 flex pt-1 rounded-md mt-3 ml-[-25px] w-24 text-center bg-bg-3 shadow-2xl text-gray-text font-font-medium'>Go Forward</div>
                </div>
            </div>

            <div className='flex cursor-pointer'>
                <div className='text-white cursor-pointer mr-1 hover:scale-105 hover:border-white font-font-bold text-sm px-3 rounded-full py-1 border-solid border-[1px] border-neutral-700'>Upgrade</div>
                <div onClick={profileMenuHandler} className='flex items-center justify-around rounded-full w-[13rem] hover:bg-bg-3 bg-bg-1 h-8 py-0.5 pl-0 px-0.5 text-white font-font-bold'>
                    <img src={Images.Pp} className="h-7 rounded-full" alt="profile-pic" />
                    <p className='text-sm font-font-bold'>NureddinFarzaliyev</p>
                    <AiFillCaretDown />
                </div>
                <div className='profileMenu absolute right-12 top-14 bg-bg-4 hidden shadow-xl px-2 py-3 text-md rounded text-white font-font-light'>
                    <div className='cursor-pointer hover:bg-bg-3 px-2 rounded-sm py-1 flex items-center justify-between h-8'>Account <MdOpenInNew /> </div>
                    <div className='cursor-pointer hover:bg-bg-3 px-2 rounded-sm mt-2 flex items-center justify-between h-8'>Profile</div>
                    <div className='cursor-pointer hover:bg-bg-3 px-2 rounded-sm flex items-center justify-between mt-2 h-8'>Upgrade to Premium <MdOpenInNew className='ml-2' /></div>
                    <div className='cursor-pointer hover:bg-bg-3 px-2 rounded-sm mt-2 flex items-center justify-between h-8'>Settings</div>
                    <hr className='mt-4' />
                    <div className='cursor-ponter mt-2 hover:bg-bg-3 px-2 rounded-sm flex items-center justify-between h-8' >Log out</div>
                </div>
            </div>
        </div>
    )
}

export default HomeNav
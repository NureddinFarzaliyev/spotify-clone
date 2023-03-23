import React from 'react'
import { Images } from '../images'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BsPip } from 'react-icons/bs'
import { BiShuffle, BiSkipPrevious, BiSkipNext, BiPause, BiPlay, BiVolumeFull } from 'react-icons/bi'
import { ImLoop } from 'react-icons/im'
import { TbMicrophone2 } from 'react-icons/tb'
import { MdDevices, MdOutlineQueue } from 'react-icons/md'
import './player.css'

const Player = () => {

    const pauseHandler = () => {
        document.querySelector('.playButton').classList.toggle('hidden')
        document.querySelector('.pauseButton').classList.toggle('hidden')
    }

    const playerButtonHandler = (item) => {
        document.querySelector(`.${item}`).classList.toggle('text-green-600')
    }

    const likeHandler = () => {
        document.querySelector('.disliked').classList.toggle('hidden')
        document.querySelector('.liked').classList.toggle('hidden')
    }

    return (
        <div className='hidden lg:block lg:absolute bottom-0 h-24 w-[100vw] bg-bg-3 border-t-2 border-t-neutral-800'>
            <div className='flex items-center justify-between px-5 h-[100%]'>
                <div className='flex items-center h-[100%] w-72'>
                    <div>
                        <img src={Images.Album1} alt="" className='h-20' />
                    </div>
                    <div className='flex justify-center ml-3 flex-col h-20'>
                        <h2 className='font-font-light text-white'>Nightmare</h2>
                        <p className='font-font-light text-gray-text text-[10px]'>Avenged Sevenfold</p>
                    </div>
                    <div className='h-20 flex justify-center items-center ml-5 text-lg'>
                        <AiOutlineHeart onClick={likeHandler} className='heartIcon disliked text-white' />
                        <div className='absolute top-[-4px] text-base hidden heartText bg-bg-4 px-3 py-1 rounded text-white'>Save to Your Library</div>
                        <AiFillHeart onClick={likeHandler} className='hidden text-green-600 heartIcon liked' />
                        <div className='absolute top-[-4px] hidden text-base heartText bg-bg-4 px-3 py-1 rounded text-white'>Remove from Your Library</div>
                        <BsPip className='text-white ml-3' />
                    </div>
                </div>

                <div className='flex-col flex items-center w-72'>
                    <div className='flex items-center w-60 justify-around text-xl cursor-pointer text-gray-text'>
                        <button className='shuffle' onClick={(event) => playerButtonHandler("shuffle")}>
                            <BiShuffle />
                        </button>
                        <div className='flex w-32 justify-between items-center'>
                            <BiSkipPrevious className='text-4xl' />
                            <div onClick={pauseHandler} className='text-3xl h-[1.9rem] bg-white text-black rounded-full flex justify-center items-center'><BiPlay className='playButton' /><BiPause className='hidden pauseButton' /></div>
                            <BiSkipNext className='text-4xl' />
                        </div>
                        <button className='loop' onClick={(event) => playerButtonHandler("loop")}>
                            <ImLoop />
                        </button>
                    </div>
                    <div className='mt-2'>
                        <input type="range" name="" id="" className='bg-red-900 w-[30rem] ml-0' />
                    </div>
                </div>


                <div className='w-72 text-gray-text flex items-center justify-center'>
                    <div className='flex w-16 justify-between'>
                        <TbMicrophone2 className='cursor-pointer hover:text-white' />
                        <MdOutlineQueue className='cursor-pointer hover:text-white' />
                        <MdDevices className='cursor-pointer hover:text-white' />
                    </div>
                    <div className='flex volume items-center ml-5'>
                        <BiVolumeFull />
                        <input type="range" className='w-20 ml-1 h-0' />
                    </div>
                </div>

            </div>




        </div>
    )
}

export default Player
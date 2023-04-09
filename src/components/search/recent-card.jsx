import React from 'react'
import { RxCross1 } from 'react-icons/rx'

const RecentCard = ({ name, author, image }) => {
    return (
        <div className='bg-bg-3 relative hover:bg-bg-4 transition cursor-pointer rounded-md max-w-[12rem] min-h-64 p-5'>
            <div>
                <img src={image} alt="" className='h-40 rounded' />
            </div>
            <div>
                <div className='text-white text-md mt-4 font-font-medium'>{name}</div>
                <div className='text-gray-text text-sm font-font-light'>{author}</div>
            </div>
            <div className='bg-[rgba(0,0,0,.5)] p-1 rounded-full hover:scale-110 top-3 right-3 absolute text-white text-lg'>
                <RxCross1 />
            </div>
        </div>
    )
}

export default RecentCard
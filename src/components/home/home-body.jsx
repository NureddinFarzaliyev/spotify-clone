import React from 'react'

import Slider from './slider'

const HomeBody = () => {
    return (
        <div className='mt-16'>
            <div className='mt-4 flex justify-between mr-6'>
                <h2 className='text-white font-font-black text-2xl'>Your Playlists</h2>
                <a href="#" className='text-gray-text opacity-60 hover:underline font-font-black'>Show all</a>
            </div>
            <Slider a='1' b='6' c='2' d='0' />
            <div className='mt-4 flex justify-between mr-6'>
                <h2 className='text-white font-font-black text-2xl'>Top Mixes</h2>
                <a href="#" className='text-gray-text opacity-60 hover:underline font-font-black'>Show all</a>
            </div>
            <Slider a='4' b='1' c='3' d='9' />
            <div className='mt-4 flex justify-between mr-6'>
                <h2 className='text-white font-font-black text-2xl'>Your Playlists</h2>
                <a href="#" className='text-gray-text opacity-60 hover:underline font-font-black'>Show all</a>
            </div>
            <Slider a='2' b='5' c='7' d='8' />
            <div className='mt-4 flex justify-between mr-6'>
                <h2 className='text-white font-font-black text-2xl'>Your Playlists</h2>
                <a href="#" className='text-gray-text opacity-60 hover:underline font-font-black'>Show all</a>
            </div>
            <Slider a='3' b='4' c='6' d='5' />
        </div>
    )
}

export default HomeBody
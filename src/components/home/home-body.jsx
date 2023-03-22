import React from 'react'

import Slider from './slider'

const HomeBody = () => {
    return (
        <div className='mt-16'>
            <h2 className='text-white font-font-black text-2xl mt-4'>Your Playlists</h2>
            <Slider a='1' b='6' c='2' d='0' />
            <h2 className='text-white font-font-black text-2xl mt-6'>Made for NureddinFarzaliyev</h2>
            <Slider a='4' b='1' c='3' d='9' />
            <h2 className='text-white font-font-black text-2xl mt-6'>Recently Played</h2>
            <Slider a='2' b='5' c='7' d='8' />
            <h2 className='text-white font-font-black text-2xl mt-6'>Your Top Mixes</h2>
            <Slider a='3' b='4' c='6' d='5' />
        </div>
    )
}

export default HomeBody
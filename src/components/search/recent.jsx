import React from 'react'
import { Albums } from '../images'

import RecentCard from './recent-card'

const Recent = () => {
    return (
        <div>
            <h1 className='text-white font-font-black text-2xl'>Recent Searches</h1>
            <div className='justify-between mt-5 hidden lg:flex lg:gap-5'>
                <RecentCard name={'Avenged Sevenfold'} author={'Avenged Sevenfold'} image={Albums[2]} />
                <RecentCard name={'Nightmare'} author={'Avenged Sevenfold'} image={Albums[0]} />
                <RecentCard name={'Sehnsucht'} author={'Rammstein'} image={Albums[4]} />
                <RecentCard name={'Puppe'} author={'Rammstein'} image={Albums[5]} />
                <RecentCard name={'Sevimişik Həyatı'} author={'Adestra'} image={Albums[8]} />
            </div>
        </div>
    )
}

export default Recent
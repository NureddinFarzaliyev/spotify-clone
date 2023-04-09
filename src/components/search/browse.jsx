import React from 'react'
import './search.css'

import BrowseCard from './browse-card'

const Browse = () => {

    const Column = ({ t1, t2, t3 }) => {
        return (
            <div className='flex gap-5 mt-5 browse-column'>
                <BrowseCard text={t1} />
                <BrowseCard text={t2} />
                <BrowseCard text={t3} />
                <BrowseCard text={t1} />
                <BrowseCard text={t2} className='opacity-0' />
            </div>
        )
    }

    return (
        <div>
            <h1 className='text-white bg- font-font-black text-2xl mt-5'>Browse All</h1>
            <div>
                <Column t1={"Podcasts"} t2={'Live Events'} t3={"New Releases"} />
                <Column t1={"Made for you"} t2={'New releases'} t3={"Pop"} />
                <Column t1={"Rock"} t2={'Rap'} t3={"Hip-hop"} />
                <Column t1={"Mood"} t2={'Charts'} t3={"Podcasts"} />
                <Column t1={"Netflix"} t2={'Dance'} t3={"Techno"} />
                <Column t1={"Death Metal"} t2={'Metal'} t3={"Chill"} />
            </div>
        </div>
    )
}

export default Browse
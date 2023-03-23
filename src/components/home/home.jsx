import React from 'react'

import HomeTop from './home-top'
import HomeBody from './home-body'

const Home = () => {
    return (
        <div className='pt-20 h-[100vh] pb-32 overflow-scroll lg:absolute z-[0] top-0 right-0 w-[100vw] lg:w-[82vw] px-10 bg-bg-2'>
            <HomeTop />
            <HomeBody />
        </div>
    )
}

export default Home
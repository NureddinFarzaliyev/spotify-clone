import React from 'react'

import NavTop from './nav-top'
import NavBottom from './nav-bottom'

const Nav = () => {
    return (
        <div className='hidden lg:block nav-wrapper p-6 bg-bg-1 h-[100vh] w-[30vw] lg:w-[18vw] overflow-hidden'>
            <NavTop />
            <hr className='mt-4 border-gray-900' />
            <NavBottom />
        </div>
    )
}

export default Nav
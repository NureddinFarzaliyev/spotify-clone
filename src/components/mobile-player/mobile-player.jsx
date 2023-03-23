import React from 'react'

import MpTop from './mp-top'
import MpBottom from './mp-bottom'

const MobilePlayer = () => {
    return (
        <div className='absolute bottom-0 lg:hidden'>
            <MpTop />
            <MpBottom />
        </div>
    )
}

export default MobilePlayer
import React from 'react'

import Libnav from './libnav'
import Content from './content'

const Library = () => {
    return (
        <div className='pt-20 h-[100vh] pb-32 overflow-scroll lg:absolute top-0 right-0 w-[100vw] lg:w-[82vw] px-10 bg-bg-2'>
            <Libnav />
            <Content />
        </div>
    )
}

export default Library
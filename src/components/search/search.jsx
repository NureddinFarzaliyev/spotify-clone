import React from 'react'

import Input from './input'
import Recent from './recent'
import Browse from './browse'

const Search = () => {
    return (
        <div className='pt-20 h-[100vh] pb-32 overflow-scroll lg:absolute top-0 right-0 w-[100vw] lg:w-[82vw] px-10 bg-bg-2'>
            <Input />
            <Recent />
            <Browse />
        </div>
    )
}

export default Search
import React from 'react'

const Libnav = () => {

    const Divel = ({ text, selected }) => {
        return (
            <div className={`${selected} px-3 py-[0.6rem] rounded w-24 flex text-center text-white font-font-medium cursor-pointer`}>
                <div className='mx-auto'>{text}</div>
            </div>
        )
    }


    return (
        <div className='absolute top-8 lg:top-4 lg:left-40 font-font-light z-20 flex gap-3'>
            <Divel text={"Playlists"} selected={'bg-bg-4'} />
            <Divel text={"Podcasts"} />
            <Divel text={"Artists"} />
            <Divel text={"Albums"} />
        </div>
    )
}

export default Libnav
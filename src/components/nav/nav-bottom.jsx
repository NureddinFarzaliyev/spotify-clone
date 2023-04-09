import React from 'react'

const NavBottom = () => {

    const PlaylistButton = ({ content }) => {
        return (
            <div className='hover:text-white overflow-hidden w-[100%] h-[1.25rem] cursor-default mt-2 text-sm font-font-medium'>
                {content}
            </div>
        )
    }

    return (
        <div className='h-[35%] w-[130%] ml-[-15%] mt-1 overflow-x-scroll px-7 text-gray-text'>
            <PlaylistButton content={'Favorite Opera & Musical'} />
            <PlaylistButton content={'Rockin'} />
            <PlaylistButton content={'Metal & Rock Favorites'} />
            <PlaylistButton content={'Favorite Opera & Musical'} />
            <PlaylistButton content={'Notre Dame de Paris'} />
            <PlaylistButton content={'The Best of Avenged Sevenfold'} />
            <PlaylistButton content={'The Phantom of The Opera 25th Anniversary'} />
            <PlaylistButton content={'Your Top Songs 2023'} />
            <PlaylistButton content={'Dark Academia Classical'} />
            <PlaylistButton content={'The Phantom of The Opera 25th Anniversary'} />
            <PlaylistButton content={'Favorite Opera & Musical'} />
            <PlaylistButton content={'Notre Dame de Paris'} />
        </div>
    )
}

export default NavBottom
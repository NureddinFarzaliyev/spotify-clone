import React from 'react'
import { Albums } from '../images'
import { AiFillPlayCircle } from 'react-icons/ai'
import './home.css'

const HomeTop = () => {

    const Playlist = ({ name, image }) => {
        return (
            <div className='flex shadow-xl transition-all duration-900 hover:bg-neutral-700 playlistMenuButton h-20 relative bg-bg-4 rounded-md items-center overflow-hidden cursor-pointer'>
                <img src={image} alt="" className='h-20' />
                <div className='text-white ml-2 font-font-medium'>{name}</div>
            </div>
        )
    }

    return (
        <div>
            <h1 className='text-white font-font-black text-3xl'>Good morning</h1>
            <div className='mt-6 playlistMenuContainer'>
                <Playlist name="Best of A7X" image={Albums[1]} />
                <Playlist name="Avenged Sevenfold" image={Albums[2]} />
                <Playlist name="The Stage" image={Albums[3]} />
                <Playlist name="Sehnsucht" image={Albums[4]} />
                <Playlist name="Rammstein" image={Albums[5]} />
                <Playlist name="Reise, Reise" image={Albums[6]} />
            </div>
        </div>
    )
}

export default HomeTop
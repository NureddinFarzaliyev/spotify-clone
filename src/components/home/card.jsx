import React from 'react'

const Card = ({ image, name, author }) => {
    return (
        <div className='bg-bg-3 p-4 rounded-md cursor-pointer hover:bg-bg-4 transition'>
            <img src={image} className="w-52 rounded-md" />
            <h1 className='mt-4 text-white font-font-medium'>{name}</h1>
            <p className='text-gray-text text-sm'>by {author}</p>
        </div>
    )
}

export default Card
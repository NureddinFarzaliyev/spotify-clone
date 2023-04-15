import React from 'react'

const Bigcard = () => {
    return (
        <div className='cursor-pointer flex flex-col pl-5 justify-around bg-gradient-to-tl from-[#8D8DE5] to-[#470DF5] w-[34rem] mr-[-.5rem] py-2 rounded'>
            <div className='text-white font-font-light mt-10'>
                Slipknot <span className='text-gray-text'>Custer</span> <span className='text-xs text-gray-text mr-2'>•</span>
                Rammstein <span className='text-gray-text'>Deutschland</span> <span className='text-xs text-gray-text mr-2'>•</span>
                Avenged Sevenfold <span className='text-gray-text'>Nobody</span> <span className='text-xs text-gray-text mr-2'>•</span>
                Slipknot <span className='text-gray-text'>The Devil in I</span> <span className='text-xs text-gray-text mr-2'>•</span>
                Avenged Sevenfold <span className='text-gray-text'>Nightmare</span> <span className='text-xs text-gray-text mr-2'>•</span>
                Rammstein <span className='text-gray-text'>Man Gegen Mann</span>
            </div>
            <div className='font-font-black text-white text-3xl mt-5'>Liked Songs</div>
            <div className='text-white font-font-medium'>154 liked songs</div>
        </div>
    )
}

export default Bigcard
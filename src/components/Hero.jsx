import React from 'react'
import Emojis from './canvas/Emojis'

const Hero = () => {
    return (
        <div className='flex w-screen top-0 left-0'>
            <div className='w-1/3  flex flex-col justify-center items-center gap-8 mb-32 ml-24 '>
                <h1 className="text-8xl flex  justify-center ">Emoji <span className='text-[#FAD426]'>3D</span></h1>
                <h1 className="text-8xl flex  justify-center ">World</h1>
            </div>

            <Emojis />

        </div>
    )
}

export default Hero
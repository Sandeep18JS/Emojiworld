import React from 'react'
import { Canvas } from '@react-three/fiber'
import Emoji from './Emoji'


const Emojis = () => {
    return (
        <div className='w-2/3 h-[580px] '>
            <Canvas
                shadows
                camera={{
                    fov: 35,
                    near: 0.1,
                    far: 100,
                    position: [0.2, 0.8, 3],

                }}>
                <Emoji />
            </Canvas>
        </div>
    )
}

export default Emojis
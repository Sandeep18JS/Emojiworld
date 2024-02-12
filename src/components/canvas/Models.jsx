import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Models = () => {
    const model = useGLTF('/Emojis/org.glb')
    model.scene.position.set(0, -0.2, 0)
    console.log(model.scene);
    model.scene.traverse((child) => {
        child.castShadow = true

    })
    model.scene.children.forEach((child) => {
        child.position.set(Math.random() * 2 - 1, 0.5, Math.random() * 2.0 - 1.0)
        child.userData.phase = Math.random() * Math.PI;
    })

    useFrame((state) => {
        model.scene.traverse((child) => {
            if ('phase' in child.userData) {
                child.position.y = Math.abs(Math.sin(state.clock.elapsedTime * 1.4 + child.userData.phase)) * 0.9
            }
        });
    })
    return <primitive object={model.scene} />
}
export default Models
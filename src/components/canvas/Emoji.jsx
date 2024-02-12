import { OrbitControls } from '@react-three/drei'
import Models from './models'



const Emoji = () => {
    return (
        <>
            <ambientLight intensity={0.8} />
            <directionalLight
                intensity={0.6}
                castShadow
                position={[2, 3, 3]}
                shadow-mapSize={[1024, 1024]}
                shadow-bias={0.001}
            />
            <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 4}
                maxAzimuthAngle={Math.PI / 4}
            />
            <Models />
            <mesh receiveShadow scale={6} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 0]}>
                <planeGeometry />
                <meshStandardMaterial color='#FFFFFF' />
            </mesh>

        </>
    )
}

export default Emoji
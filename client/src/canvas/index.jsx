import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, Environment } from "@react-three/drei";

import Shirt from './Shirt'
import CameraRig from './CameraRig'
const CanvasModule = () => {

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <Environment preset="city" />
            
            <CameraRig>
                <Center>
                    <Shirt />
                </Center>
            </CameraRig>
        </Canvas>
    )
}

export default CanvasModule

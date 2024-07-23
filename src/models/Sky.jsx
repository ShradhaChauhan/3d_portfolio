import { useGLTF } from '@react-three/drei';
import skyScreen from '../assets/3d/sky.glb';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Sky = ({isRotating}) => {
    const skyRef = useRef();
    const sky = useGLTF(skyScreen);

    useFrame((_, delta) => {
      if (isRotating) {
        skyRef.current.rotation.y += 0.25 * delta;
      }
    });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky

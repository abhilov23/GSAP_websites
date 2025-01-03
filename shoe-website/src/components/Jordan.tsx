import { useGLTF } from '@react-three/drei'
import { JordanGLTF } from '../typings';

export const Jordan = () => {
  const {nodes, materials} = useGLTF("/air_jordan_1.glb") as JordanGLTF;

  return <>
  <group>
    <mesh geometry={nodes.shoe_shoe_0.geometry}/>
  </group>
  </>;
}


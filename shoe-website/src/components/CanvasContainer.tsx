
import { Canvas } from "@react-three/fiber"
import {Jordan} from "./Jordan" // Assuming Jordan component is defined in a separate file
import { OrbitControls } from "@react-three/drei"

function CanvasContainer() {
  return (
    <>
      <Canvas>
        <OrbitControls/>
        <Jordan />
      </Canvas>
    </>
  )
}

export default CanvasContainer

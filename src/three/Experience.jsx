import { Canvas } from "@react-three/fiber"
import { CameraControls } from "@react-three/drei"
import { Panorama } from "./Panorama"

export function Experience() {
  return (
    <div className="webgl">
      <Canvas flat camera={{ position: [-5, 0, 5], fov: 40 }}>
        <color attach="background" args={["#e5ece8"]} />

        <CameraControls maxDistance={50} />

        <Panorama />

      </Canvas>
    </div>
  )
}

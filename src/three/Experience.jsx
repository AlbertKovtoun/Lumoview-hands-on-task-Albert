import { Canvas } from "@react-three/fiber"
import { CameraControls } from "@react-three/drei"
import { Panorama } from "./Panorama"
import { BlurredFaces } from "./BlurredFaces"

export function Experience() {
  return (
    <div className="webgl">
      <Canvas flat camera={{ position: [-5, 0, 5], fov: 50 }}>
        <color attach="background" args={["#e5ece8"]} />

        <CameraControls maxDistance={20} />

        <Panorama />

        <BlurredFaces />
      </Canvas>
    </div>
  )
}

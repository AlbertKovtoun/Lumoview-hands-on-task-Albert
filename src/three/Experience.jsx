import { Canvas } from "@react-three/fiber"
import { OrbitControls, CameraControls } from "@react-three/drei"

export function Experience() {
  return (
    <div className="webgl">
      <Canvas flat camera={{ position: [2, 0, 2], fov: 50 }}>
        <color attach="background" args={["#e5ece8"]} />

        {/* <OrbitControls makeDefault /> */}
        <CameraControls makeDefault />

        <ambientLight intensity={0.2} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </Canvas>
    </div>
  )
}

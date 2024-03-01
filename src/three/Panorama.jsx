import * as THREE from "three"
import { useTexture } from "@react-three/drei"

export function Panorama() {
  console.log("Panorama Loaded!")

  const panoramaTexture = useTexture("images/panorama-opt.jpg")

  return (
    <>
      <mesh>
        <sphereGeometry args={[100, 64, 32]} />
        <meshBasicMaterial map={panoramaTexture} side={THREE.BackSide} />
      </mesh>

      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
    </>
  )
}

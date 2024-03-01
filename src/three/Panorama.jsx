import * as THREE from "three"
import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import { useControls } from "leva"

import panoramaVertexShader from "../../src/shaders/panoramaShader/vertex.glsl?raw"
import panoramaFragmentShader from "../../src/shaders/panoramaShader/fragment.glsl?raw"

export function Panorama() {
  console.log("Panorama Loaded!")

  const panoramaTexture = useTexture("images/panorama-opt.jpg")
  const panoramaTextureBlurred = useTexture("images/panorama-opt-blurred.jpg")

  const { mixValue } = useControls({
    mixValue: {
      value: 1, // initial value
      min: 0, // minimum
      max: 1, // maximum
      step: 0.01, // increment step
      label: "Blur Strength",
      onChange: (value) => {
        if(panoramaMaterialRef.current) {
          panoramaMaterialRef.current.uniforms.uMixValue.value = value
        }
      }
    },
  })

  const panoramaMaterialRef = useRef()

  return (
    <>
      <mesh>
        <sphereGeometry args={[100, 64, 32]} />
        <shaderMaterial
          ref={panoramaMaterialRef}
          vertexShader={panoramaVertexShader}
          fragmentShader={panoramaFragmentShader}
          uniforms={{
            uPanoramaTexture: { value: panoramaTexture },
            uPanoramaTextureBlurred: { value: panoramaTextureBlurred },
            uMixValue: { value: mixValue },
          }}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  )
}

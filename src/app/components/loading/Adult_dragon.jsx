import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Dragon(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/dragon/adult_dragon.glb')
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {
    actions["cyclewalk"].play()
    mixer.timeScale = 2
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.258}>
          <group name="Root">
            <group name="Ossos" position={[0, 0.041, -0.015]}>
              <primitive object={nodes.Ossos_rootJoint} />
              <group name="Cube" position={[0, -0.063, 1.194]} scale={0.507} />
              <skinnedMesh name="Cube_0" geometry={nodes.Cube_0.geometry} material={materials.Material} skeleton={nodes.Cube_0.skeleton} />
            </group>
            <group name="Lamp" position={[15.333, 12.533, 17.243]} rotation={[-0.268, 0.602, 1.932]} scale={2.644}>
              <group name="Lamp_1" />
            </group>
            <group name="Lamp001" position={[-15.333, 12.533, 17.243]} rotation={[-0.268, 0.602, 1.932]} scale={2.644}>
              <group name="Lamp001_1" />
            </group>
            <group name="Lamp002" position={[-15.333, -12.342, 17.243]} rotation={[-0.268, 0.602, 1.932]} scale={2.644}>
              <group name="Lamp002_1" />
            </group>
            <group name="Lamp003" position={[15.333, -12.342, 17.243]} rotation={[-0.268, 0.602, 1.932]} scale={2.644}>
              <group name="Lamp003_1" />
            </group>
            <group name="Lamp004" position={[15.333, -12.342, -12.763]} rotation={[-0.268, 0.602, 1.932]} scale={2.644}>
              <group name="Lamp004_1" />
            </group>
            <group name="Lamp005" position={[-15.333, -12.342, -12.763]} rotation={[-0.268, 0.602, 1.932]} scale={2.644}>
              <group name="Lamp005_1" />
            </group>
            <group name="Lamp006" position={[-15.333, 12.533, -12.763]} rotation={[-0.268, 0.602, 1.932]} scale={2.644}>
              <group name="Lamp006_1" />
            </group>
            <group name="Lamp007" position={[15.333, 12.533, -12.763]} rotation={[-0.268, 0.602, 1.932]} scale={2.644}>
              <group name="Lamp007_1" />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/dragon/adult_dragon.glb')

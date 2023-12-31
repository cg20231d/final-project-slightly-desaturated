/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

export default function YoungKorrigan(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./models/young-korrigan/model.gltf"
  );
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    actions["course_jeune"].play()
    mixer.timeScale = 2.5;
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0.3, 0.2, 0]} scale={0.25}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.Jeune.geometry}
          material={materials["color_main.003"]}
          skeleton={nodes.Jeune.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/young-korrigan/model.gltf");

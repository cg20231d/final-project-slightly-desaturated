/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from 'react'
import {
    useGLTF,
    useAnimations
} from '@react-three/drei'


export default function KorriganWolf(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('./models/KorriganWolf/model.gltf')
    const { actions, mixer } = useAnimations(animations, group)


    useEffect(() => {
        actions["course_cavalier"].play()
        actions["course_loup"].play()
        mixer.timeScale = 2
    })
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[0, 1, 0,]} scale={0.15} >
                <primitive object={nodes.root} />
                <skinnedMesh geometry={nodes.Cavalier.geometry} material={materials['color_main.015']} skeleton={nodes.Cavalier.skeleton} />
            </group>
            <group scale={0.61} >
                <primitive object={nodes.spine004} />
                <skinnedMesh geometry={nodes.Loup.geometry} material={materials['color_main.002']} skeleton={nodes.Loup.skeleton} />
            </group>

        </group>
    )
}

useGLTF.preload('./models/KorriganWolf/model.gltf')
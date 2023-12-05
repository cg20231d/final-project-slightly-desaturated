import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Kelas(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/Kelas.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fauteille" position={[6.177, 3.165, -2.642]} rotation={[0, -1.332, 0]} scale={0.827}>
          <group name="ChairSeat_LP4" position={[0.026, -3.526, -0.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
            <mesh name="Mesh005" geometry={nodes.Mesh005.geometry} material={materials.Cuir} />
            <mesh name="Mesh005_1" geometry={nodes.Mesh005_1.geometry} material={materials.Base} />
            <mesh name="Mesh005_2" geometry={nodes.Mesh005_2.geometry} material={materials['Ombre GF']} />
            <mesh name="Mesh005_3" geometry={nodes.Mesh005_3.geometry} material={materials['Ombre N']} />
          </group>
          <group name="Leg_LP5003" position={[0, -3.332, 0]} rotation={[Math.PI / 2, 0, 0.705]} scale={0.03}>
            <mesh name="Mesh003" geometry={nodes.Mesh003.geometry} material={materials.Base} />
            <mesh name="Mesh003_1" geometry={nodes.Mesh003_1.geometry} material={materials['Ombre N']} />
          </group>
          <group name="Underside_LP" position={[0.024, -3.409, 0.046]} rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
            <mesh name="Mesh009" geometry={nodes.Mesh009.geometry} material={materials.Base} />
            <mesh name="Mesh009_1" geometry={nodes.Mesh009_1.geometry} material={materials['Ombre N']} />
          </group>
        </group>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="aac6d3af1717478786bd50f7c006ca5estlcleanermaterialmergergle">
            <mesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} position={[13.468, 7.613, 6.698]} scale={0.152} />
          </group>
        </group>
        <group name="Sketchfab_model001" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="aac6d3af1717478786bd50f7c006ca5estlcleanermaterialmerger">
            <mesh name="Object_2001" geometry={nodes.Object_2001.geometry} material={materials['Scene_-_Root.001']} position={[17.244, 11.681, 9.749]} scale={0.152} />
          </group>
        </group>
        <group name="Sketchfab_model002" position={[-23.585, 6.433, 1.866]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="aac6d3af1717478786bd50f7c006ca5estlcleanermaterialmerger001">
            <mesh name="Object_2002" geometry={nodes.Object_2002.geometry} material={materials['Scene_-_Root.002']} position={[27.901, 13.526, 0.487]} scale={0.152} />
          </group>
        </group>
        <group name="Sketchfab_model003" position={[-23.585, 6.433, 1.866]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="aac6d3af1717478786bd50f7c006ca5estlcleanermaterialmerger002">
            <mesh name="Object_2003" geometry={nodes.Object_2003.geometry} material={materials['Scene_-_Root.003']} position={[24.044, 6.494, 5.046]} scale={0.152} />
          </group>
        </group>
        <group name="Sketchfab_model004" position={[-35.427, 1.816, -1.271]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="aac6d3af1717478786bd50f7c006ca5estlcleanermaterialmerger003">
            <mesh name="Object_2004" geometry={nodes.Object_2004.geometry} material={materials['Scene_-_Root.004']} position={[17.265, -1.017, 6.603]} scale={0.23} />
          </group>
        </group>
        <group name="Sketchfab_model005" position={[-36.772, 1.275, -1.563]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="aac6d3af1717478786bd50f7c006ca5estlcleanermaterialmerger004">
            <mesh name="Object_2005" geometry={nodes.Object_2005.geometry} material={materials['Scene_-_Root.005']} position={[28.508, 5.333, 6.792]} scale={0.152} />
          </group>
        </group>
        <group name="Sketchfab_model006" position={[-30.301, 5.893, -7.77]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="aac6d3af1717478786bd50f7c006ca5estlcleanermaterialmerger005">
            <mesh name="Object_2006" geometry={nodes.Object_2006.geometry} material={materials['Scene_-_Root.006']} position={[26.317, 3.232, 5.229]} scale={0.152} />
          </group>
        </group>
        <group name="Sketchfab_model007" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="0531b0aee76e437286fa1480cfa5eaf0fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2007">
              <group name="RootNode">
                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={491.491}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_10_1" rotation={[-Math.PI / 2, 0, 0]} scale={72.086} />
                  </group>
                </group>
                <group name="Camera001" position={[748.113, 534.367, 650.764]} rotation={[3.127, 0.756, 2.69]} scale={100}>
                  <group name="Object_23" />
                </group>
                <group name="Icosphere001" rotation={[-Math.PI / 2, 0, 0]} scale={72.086} />
                <group name="Sun" position={[755.46, 898.84, 279.323]} rotation={[0.585, -0.547, -0.304]} scale={100}>
                  <group name="Object_20" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_21" />
                  </group>
                </group>
                <group name="Sun001" position={[755.46, 898.84, 279.323]} rotation={[-1.336, 0.374, 0.627]} scale={100}>
                  <group name="Object_17" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_18" />
                  </group>
                </group>
                <group name="Sun002" position={[755.46, 898.84, 279.323]} rotation={[0.304, -0.087, -1.384]} scale={100}>
                  <group name="Object_14_1" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_15_1" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model008" position={[-1.094, 1.85, -6.763]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
          <group name="lp_xmas_tree_w_presentsobjcleanermaterialmergergles" position={[-10.451, -6.476, -1.854]} scale={2.43}>
            <mesh name="Object_10001" geometry={nodes.Object_10001.geometry} material={materials.StandardC33C36} />
            <mesh name="Object_11001" geometry={nodes.Object_11001.geometry} material={materials.StandardC33C36} />
            <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.StandardC33C36} />
            <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.StandardDEB714} />
            <mesh name="Object_14001" geometry={nodes.Object_14001.geometry} material={materials.StandardDEB714} />
            <mesh name="Object_15001" geometry={nodes.Object_15001.geometry} material={materials.StandardF0EF00} />
            <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.StandardF19631} />
            <mesh name="Object_17001" geometry={nodes.Object_17001.geometry} material={materials.StandardF19631} />
            <mesh name="Object_18001" geometry={nodes.Object_18001.geometry} material={materials.StandardFFAE1F} />
            <mesh name="Object_2008" geometry={nodes.Object_2008.geometry} material={materials.Standard907763} />
            <mesh name="Object_3" geometry={nodes.Object_3.geometry} material={materials.Standard26B0AA} />
            <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Standard26B0AA} />
            <mesh name="Object_5001" geometry={nodes.Object_5001.geometry} material={materials.Standard477342} />
            <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Standard5646DD} />
            <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Standard5646DD} />
            <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Standard990386} />
            <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Standard990386} />
          </group>
        </group>
        <group name="Table" position={[0.814, 0.012, -3.548]} scale={0.599}>
          <mesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials['Haut Table']} />
          <mesh name="Cube001_2" geometry={nodes.Cube001_2.geometry} material={materials['Ombre 01']} />
          <mesh name="Cube001_3" geometry={nodes.Cube001_3.geometry} material={materials['Ombre 02']} />
          <mesh name="Cube001_4" geometry={nodes.Cube001_4.geometry} material={materials.Pied} />
          <mesh name="Cube001_5" geometry={nodes.Cube001_5.geometry} material={materials['Ombre FC']} />
        </group>
        <group name="Chaise" position={[-0.03, -0.229, -3.498]}>
          <mesh name="Cube002_1" geometry={nodes.Cube002_1.geometry} material={materials['Ombre 02']} />
          <mesh name="Cube002_2" geometry={nodes.Cube002_2.geometry} material={materials['Ombre 01']} />
          <mesh name="Cube002_3" geometry={nodes.Cube002_3.geometry} material={materials['Haut Table']} />
          <mesh name="Cube002_4" geometry={nodes.Cube002_4.geometry} material={materials.Pied} />
        </group>
        <group name="Bois">
          <mesh name="Cube003_1" geometry={nodes.Cube003_1.geometry} material={materials.Bois} />
          <mesh name="Cube003_2" geometry={nodes.Cube003_2.geometry} material={materials['Ombre bois  C']} />
          <mesh name="Cube003_3" geometry={nodes.Cube003_3.geometry} material={materials['Ombre F']} />
        </group>
        <group name="Base" position={[0.096, 0, 0]} scale={5.675}>
          <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials.Sol} />
          <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={materials['Mur C']} />
          <mesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={materials['Mur F']} />
          <mesh name="Plane_4" geometry={nodes.Plane_4.geometry} material={materials['RB C']} />
          <mesh name="Plane_5" geometry={nodes.Plane_5.geometry} material={materials['RB FC']} />
        </group>
        <group name="Cube001" position={[0, 0.336, 0.111]}>
          <mesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={materials['Material.023']} />
          <mesh name="Cube005_2" geometry={nodes.Cube005_2.geometry} material={materials['Material.025']} />
          <mesh name="Cube005_3" geometry={nodes.Cube005_3.geometry} material={materials['Material.002']} />
          <mesh name="Cube005_4" geometry={nodes.Cube005_4.geometry} material={materials['Material.003']} />
          <mesh name="Cube005_5" geometry={nodes.Cube005_5.geometry} material={materials.Tableau} />
        </group>
        <group name="Cube002" position={[-16.985, 3.242, 0.844]} scale={0.372}>
          <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={materials.Bois} />
          <mesh name="Cube004_2" geometry={nodes.Cube004_2.geometry} material={materials['Ombre bois  C']} />
          <mesh name="Cube004_3" geometry={nodes.Cube004_3.geometry} material={materials['Ombre F']} />
        </group>
        <group name="book_a001" position={[-17.54, 0.98, -3.335]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.022}>
          <mesh name="Cube028" geometry={nodes.Cube028.geometry} material={materials['Material.038']} />
          <mesh name="Cube028_1" geometry={nodes.Cube028_1.geometry} material={materials['Material.071']} />
          <mesh name="Cube028_2" geometry={nodes.Cube028_2.geometry} material={materials['Material.072']} />
          <mesh name="Cube028_3" geometry={nodes.Cube028_3.geometry} material={materials['Material.073']} />
          <mesh name="Cube028_4" geometry={nodes.Cube028_4.geometry} material={materials['Material.074']} />
          <mesh name="Cube028_5" geometry={nodes.Cube028_5.geometry} material={materials['Material.037']} />
          <mesh name="Cube028_6" geometry={nodes.Cube028_6.geometry} material={materials['Material.040']} />
        </group>
        <group name="Bueau" position={[1.628, 0, -3.907]} scale={0.74}>
          <mesh name="Cube006_1" geometry={nodes.Cube006_1.geometry} material={materials['Material.001']} />
          <mesh name="Cube006_2" geometry={nodes.Cube006_2.geometry} material={materials['Material.007']} />
          <mesh name="Cube006_3" geometry={nodes.Cube006_3.geometry} material={materials['Material.010']} />
          <mesh name="Cube006_4" geometry={nodes.Cube006_4.geometry} material={materials['Material.016']} />
        </group>
        <group name="book_a_open" position={[5.025, 1.871, -2.02]} rotation={[0, 0.234, 0]} scale={0.033}>
          <mesh name="Cube018" geometry={nodes.Cube018.geometry} material={materials['Material.044']} />
          <mesh name="Cube018_1" geometry={nodes.Cube018_1.geometry} material={materials['Material.045']} />
          <mesh name="Cube018_2" geometry={nodes.Cube018_2.geometry} material={materials['Material.046']} />
        </group>
        <group name="Plane" position={[-15.756, 3.696, -5.346]} rotation={[Math.PI / 2, 0, 0]} scale={[1.106, 1.106, 1.647]}>
          <mesh name="Plane003_1" geometry={nodes.Plane003_1.geometry} material={materials['Material.031']} />
          <mesh name="Plane003_2" geometry={nodes.Plane003_2.geometry} material={materials['Material.033']} />
        </group>
        <group name="Cylinder004" position={[1.244, 1.746, -3.98]} rotation={[0, -1.378, 0]} scale={0.991}>
          <mesh name="Cylinder006_1" geometry={nodes.Cylinder006_1.geometry} material={materials['Material.022']} />
          <mesh name="Cylinder006_2" geometry={nodes.Cylinder006_2.geometry} material={materials['Material.006']} />
          <mesh name="Cylinder006_3" geometry={nodes.Cylinder006_3.geometry} material={materials['Material.005']} />
          <mesh name="Cylinder006_4" geometry={nodes.Cylinder006_4.geometry} material={materials['Material.004']} />
        </group>
        <group name="Cylinder001" position={[-2.989, 1.746, 0.437]} rotation={[Math.PI, -1.019, Math.PI]} scale={0.991}>
          <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={materials['Material.022']} />
          <mesh name="Cylinder001_2" geometry={nodes.Cylinder001_2.geometry} material={materials['Material.006']} />
          <mesh name="Cylinder001_3" geometry={nodes.Cylinder001_3.geometry} material={materials['Material.005']} />
          <mesh name="Cylinder001_4" geometry={nodes.Cylinder001_4.geometry} material={materials['Material.004']} />
        </group>
        <group name="Cylinder002" position={[1.347, 1.746, 0.392]} rotation={[Math.PI, -1.416, Math.PI]} scale={0.991}>
          <mesh name="Cylinder002_1" geometry={nodes.Cylinder002_1.geometry} material={materials['Material.011']} />
          <mesh name="Cylinder002_2" geometry={nodes.Cylinder002_2.geometry} material={materials['Material.005']} />
          <mesh name="Cylinder002_3" geometry={nodes.Cylinder002_3.geometry} material={materials['Material.004']} />
        </group>
        <group name="Cylinder003" position={[1.347, 1.746, 3.396]} rotation={[0, -1.335, 0]} scale={0.833}>
          <mesh name="Cylinder003_1" geometry={nodes.Cylinder003_1.geometry} material={materials['Material.009']} />
          <mesh name="Cylinder003_2" geometry={nodes.Cylinder003_2.geometry} material={materials['Material.005']} />
          <mesh name="Cylinder003_3" geometry={nodes.Cylinder003_3.geometry} material={materials['Material.004']} />
        </group>
        <group name="Cylinder005" position={[-7.102, 1.746, -0.101]} rotation={[0, -1.214, 0]} scale={0.833}>
          <mesh name="Cylinder004_1" geometry={nodes.Cylinder004_1.geometry} material={materials['Material.012']} />
          <mesh name="Cylinder004_2" geometry={nodes.Cylinder004_2.geometry} material={materials['Material.005']} />
          <mesh name="Cylinder004_3" geometry={nodes.Cylinder004_3.geometry} material={materials['Material.004']} />
        </group>
        <group name="Cylinder006" position={[-2.841, 1.746, 4.057]} rotation={[Math.PI, -1.161, Math.PI]} scale={0.833}>
          <mesh name="Cylinder005_1" geometry={nodes.Cylinder005_1.geometry} material={materials['Material.008']} />
          <mesh name="Cylinder005_2" geometry={nodes.Cylinder005_2.geometry} material={materials['Material.005']} />
          <mesh name="Cylinder005_3" geometry={nodes.Cylinder005_3.geometry} material={materials['Material.004']} />
        </group>
        <group name="Cylinder007" position={[-11.274, 1.746, -4.127]} rotation={[0, -1.423, 0]} scale={0.833}>
          <mesh name="Cylinder007_1" geometry={nodes.Cylinder007_1.geometry} material={materials['Material.009']} />
          <mesh name="Cylinder007_2" geometry={nodes.Cylinder007_2.geometry} material={materials['Material.005']} />
        </group>
        <group name="Cylinder008" position={[-11.289, 1.746, -0.042]} rotation={[Math.PI, -1.378, Math.PI]} scale={0.833}>
          <mesh name="Cylinder008_1" geometry={nodes.Cylinder008_1.geometry} material={materials['Material.011']} />
          <mesh name="Cylinder008_2" geometry={nodes.Cylinder008_2.geometry} material={materials['Material.005']} />
        </group>
        <group name="book_a_open001" position={[0.925, 1.648, -3.013]} rotation={[0, -0.158, 0]} scale={0.033}>
          <mesh name="Cube007_1" geometry={nodes.Cube007_1.geometry} material={materials['Material.044']} />
          <mesh name="Cube007_2" geometry={nodes.Cube007_2.geometry} material={materials['Material.045']} />
          <mesh name="Cube007_3" geometry={nodes.Cube007_3.geometry} material={materials['Material.046']} />
        </group>
        <group name="book_a_open002" position={[-0.447, 0.852, 4.183]} rotation={[0, -0.523, 0]} scale={0.033}>
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials['Material.044']} />
          <mesh name="Cube008_2" geometry={nodes.Cube008_2.geometry} material={materials['Material.045']} />
          <mesh name="Cube008_3" geometry={nodes.Cube008_3.geometry} material={materials['Material.046']} />
        </group>
        <group name="book_a_open003" position={[1.02, 1.648, 0.287]} rotation={[0, 0.113, 0]} scale={0.033}>
          <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials['Material.044']} />
          <mesh name="Cube009_2" geometry={nodes.Cube009_2.geometry} material={materials['Material.045']} />
          <mesh name="Cube009_3" geometry={nodes.Cube009_3.geometry} material={materials['Material.046']} />
        </group>
        <group name="book_a_open004" position={[-3.664, 1.648, 0.001]} rotation={[0, -0.304, 0]} scale={0.033}>
          <mesh name="Cube010_1" geometry={nodes.Cube010_1.geometry} material={materials['Material.044']} />
          <mesh name="Cube010_2" geometry={nodes.Cube010_2.geometry} material={materials['Material.045']} />
          <mesh name="Cube010_3" geometry={nodes.Cube010_3.geometry} material={materials['Material.046']} />
        </group>
        <group name="book_a_open005" position={[-3.203, 1.648, 3.993]} rotation={[0, 0.02, 0]} scale={0.033}>
          <mesh name="Cube011" geometry={nodes.Cube011.geometry} material={materials['Material.044']} />
          <mesh name="Cube011_1" geometry={nodes.Cube011_1.geometry} material={materials['Material.045']} />
          <mesh name="Cube011_2" geometry={nodes.Cube011_2.geometry} material={materials['Material.046']} />
        </group>
        <group name="book_a_open006" position={[-7.588, 1.648, 0.545]} rotation={[0, -0.182, 0]} scale={0.033}>
          <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials['Material.044']} />
          <mesh name="Cube012_1" geometry={nodes.Cube012_1.geometry} material={materials['Material.045']} />
          <mesh name="Cube012_2" geometry={nodes.Cube012_2.geometry} material={materials['Material.046']} />
        </group>
        <group name="book_a_open007" position={[-11.701, 1.648, 0.626]} rotation={[0, -0.182, 0]} scale={0.033}>
          <mesh name="Cube013" geometry={nodes.Cube013.geometry} material={materials['Material.044']} />
          <mesh name="Cube013_1" geometry={nodes.Cube013_1.geometry} material={materials['Material.045']} />
          <mesh name="Cube013_2" geometry={nodes.Cube013_2.geometry} material={materials['Material.046']} />
        </group>
        <group name="book_a_open008" position={[-12.136, 1.648, -2.374]} rotation={[0, -0.313, 0]} scale={0.033}>
          <mesh name="Cube014" geometry={nodes.Cube014.geometry} material={materials['Material.044']} />
          <mesh name="Cube014_1" geometry={nodes.Cube014_1.geometry} material={materials['Material.045']} />
          <mesh name="Cube014_2" geometry={nodes.Cube014_2.geometry} material={materials['Material.046']} />
        </group>
        <group name="Circle" position={[-7.438, 2.338, 7.806]}>
          <mesh name="Circle001_1" geometry={nodes.Circle001_1.geometry} material={materials['Material.013']} />
          <mesh name="Circle001_2" geometry={nodes.Circle001_2.geometry} material={materials['Material.014']} />
          <mesh name="Circle001_3" geometry={nodes.Circle001_3.geometry} material={materials['Material.015']} />
        </group>
        <group name="Plane001" position={[-9.411, 0.417, -1.462]} rotation={[0, 0.336, 0]} scale={0.469}>
          <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={materials['Material.017']} />
          <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={materials['Material.018']} />
        </group>
        <group name="Plane002" position={[-1.645, 0.077, 2.488]} rotation={[0, -0.154, 0]} scale={0.469}>
          <mesh name="Plane002_1" geometry={nodes.Plane002_1.geometry} material={materials['Material.017']} />
          <mesh name="Plane002_2" geometry={nodes.Plane002_2.geometry} material={materials['Material.018']} />
        </group>
        <group name="Plane003" position={[5.919, 0.186, 1.417]} rotation={[Math.PI, -0.873, Math.PI]} scale={0.469}>
          <mesh name="Plane004_1" geometry={nodes.Plane004_1.geometry} material={materials['Material.017']} />
          <mesh name="Plane004_2" geometry={nodes.Plane004_2.geometry} material={materials['Material.018']} />
        </group>
        <group name="Cube003" position={[-16.985, 3.242, 5.114]} scale={0.372}>
          <mesh name="Cube015" geometry={nodes.Cube015.geometry} material={materials.Bois} />
          <mesh name="Cube015_1" geometry={nodes.Cube015_1.geometry} material={materials['Ombre bois  C']} />
          <mesh name="Cube015_2" geometry={nodes.Cube015_2.geometry} material={materials['Ombre F']} />
        </group>
        <group name="Circle001" position={[-17.711, 2.327, 1.737]} rotation={[Math.PI / 2, 0, -0.802]} scale={0.409}>
          <mesh name="Circle002" geometry={nodes.Circle002.geometry} material={materials['Material.051']} />
          <mesh name="Circle002_1" geometry={nodes.Circle002_1.geometry} material={materials['Material.079']} />
          <mesh name="Circle002_2" geometry={nodes.Circle002_2.geometry} material={materials['Material.080']} />
          <mesh name="Circle002_3" geometry={nodes.Circle002_3.geometry} material={materials['Material.019']} />
        </group>
        <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials['Material.020']} position={[4.744, 1.878, -1.398]} rotation={[0, 0.435, 0]} scale={[0.39, 0.275, 0.275]} />
        <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials['Material.021']} position={[4.744, 1.904, -1.398]} rotation={[0, 0.825, 0]} scale={[0.39, 0.275, 0.275]} />
        <group name="clock_main" position={[7.695, 6.727, 0.761]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.261}>
          <mesh name="Circle003" geometry={nodes.Circle003.geometry} material={materials['Material.027']} />
          <mesh name="Circle003_1" geometry={nodes.Circle003_1.geometry} material={materials['Material.029']} />
          <mesh name="Circle003_2" geometry={nodes.Circle003_2.geometry} material={materials['Material.028']} />
          <mesh name="Circle003_3" geometry={nodes.Circle003_3.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={materials['Material.034']} position={[-0.945, 0.135, -3.551]} scale={0.532} />
        <group name="Cube004" position={[5.812, 7.285, 5.541]} scale={[1, 1, 0.066]}>
          <mesh name="Cube021" geometry={nodes.Cube021.geometry} material={materials['Material.035']} />
          <mesh name="Cube021_1" geometry={nodes.Cube021_1.geometry} material={materials['Material.036']} />
          <mesh name="Cube021_2" geometry={nodes.Cube021_2.geometry} material={materials['Material.039']} />
          <mesh name="Cube021_3" geometry={nodes.Cube021_3.geometry} material={materials['Material.041']} />
        </group>
        <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials['Material.042']} position={[7.885, 2.338, -5.605]} scale={0.118} />
        <mesh name="Windows2001" geometry={nodes.Windows2001.geometry} material={materials['Material.031']} position={[-9.759, 4.724, -5.572]} scale={[4, 2, 0.112]} />
        <mesh name="Object" geometry={nodes.Object.geometry} material={materials['Material.031']} position={[-0.232, 4.724, -5.572]} scale={[4, 2, 0.112]} />
        <mesh name="Object001" geometry={nodes.Object001.geometry} material={materials['Material.024']} position={[-0.232, 4.724, -5.572]} scale={[4, 2, 0.112]} />
        <group name="Table001" position={[0.814, 0.012, -0.019]} scale={0.599}>
          <mesh name="Cube016" geometry={nodes.Cube016.geometry} material={materials['Haut Table.001']} />
          <mesh name="Cube016_1" geometry={nodes.Cube016_1.geometry} material={materials['Ombre 01.001']} />
          <mesh name="Cube016_2" geometry={nodes.Cube016_2.geometry} material={materials['Ombre 02.001']} />
          <mesh name="Cube016_3" geometry={nodes.Cube016_3.geometry} material={materials['Pied.001']} />
          <mesh name="Cube016_4" geometry={nodes.Cube016_4.geometry} material={materials['Ombre FC.001']} />
        </group>
        <group name="Chaise001" position={[-0.025, -0.228, -0.002]}>
          <mesh name="Cube017" geometry={nodes.Cube017.geometry} material={materials['Ombre 02.002']} />
          <mesh name="Cube017_1" geometry={nodes.Cube017_1.geometry} material={materials['Ombre 01.002']} />
          <mesh name="Cube017_2" geometry={nodes.Cube017_2.geometry} material={materials['Haut Table.002']} />
          <mesh name="Cube017_3" geometry={nodes.Cube017_3.geometry} material={materials['Pied.002']} />
        </group>
        <group name="Table002" position={[0.814, 0.012, 3.638]} scale={0.599}>
          <mesh name="Cube019" geometry={nodes.Cube019.geometry} material={materials['Haut Table.003']} />
          <mesh name="Cube019_1" geometry={nodes.Cube019_1.geometry} material={materials['Ombre 01.003']} />
          <mesh name="Cube019_2" geometry={nodes.Cube019_2.geometry} material={materials['Ombre 02.003']} />
          <mesh name="Cube019_3" geometry={nodes.Cube019_3.geometry} material={materials['Pied.003']} />
          <mesh name="Cube019_4" geometry={nodes.Cube019_4.geometry} material={materials['Ombre FC.002']} />
        </group>
        <group name="Chaise002" position={[-0.025, -0.228, 3.655]}>
          <mesh name="Cube020" geometry={nodes.Cube020.geometry} material={materials['Ombre 02.004']} />
          <mesh name="Cube020_1" geometry={nodes.Cube020_1.geometry} material={materials['Ombre 01.004']} />
          <mesh name="Cube020_2" geometry={nodes.Cube020_2.geometry} material={materials['Haut Table.004']} />
          <mesh name="Cube020_3" geometry={nodes.Cube020_3.geometry} material={materials['Pied.004']} />
        </group>
        <group name="Table003" position={[-3.548, 0.012, 3.638]} scale={0.599}>
          <mesh name="Cube023" geometry={nodes.Cube023.geometry} material={materials['Haut Table.005']} />
          <mesh name="Cube023_1" geometry={nodes.Cube023_1.geometry} material={materials['Ombre 01.005']} />
          <mesh name="Cube023_2" geometry={nodes.Cube023_2.geometry} material={materials['Ombre 02.005']} />
          <mesh name="Cube023_3" geometry={nodes.Cube023_3.geometry} material={materials['Pied.005']} />
          <mesh name="Cube023_4" geometry={nodes.Cube023_4.geometry} material={materials['Ombre FC.003']} />
        </group>
        <group name="Table004" position={[-3.548, 0.012, -0.019]} scale={0.599}>
          <mesh name="Cube026" geometry={nodes.Cube026.geometry} material={materials['Haut Table.006']} />
          <mesh name="Cube026_1" geometry={nodes.Cube026_1.geometry} material={materials['Ombre 01.006']} />
          <mesh name="Cube026_2" geometry={nodes.Cube026_2.geometry} material={materials['Ombre 02.006']} />
          <mesh name="Cube026_3" geometry={nodes.Cube026_3.geometry} material={materials['Pied.006']} />
          <mesh name="Cube026_4" geometry={nodes.Cube026_4.geometry} material={materials['Ombre FC.004']} />
        </group>
        <group name="Table005" position={[-3.548, 0.012, -3.548]} scale={0.599}>
          <mesh name="Cube027" geometry={nodes.Cube027.geometry} material={materials['Haut Table.007']} />
          <mesh name="Cube027_1" geometry={nodes.Cube027_1.geometry} material={materials['Ombre 01.007']} />
          <mesh name="Cube027_2" geometry={nodes.Cube027_2.geometry} material={materials['Ombre 02.007']} />
          <mesh name="Cube027_3" geometry={nodes.Cube027_3.geometry} material={materials['Pied.007']} />
          <mesh name="Cube027_4" geometry={nodes.Cube027_4.geometry} material={materials['Ombre FC.005']} />
        </group>
        <group name="Chaise003" position={[-4.387, -0.228, 3.655]}>
          <mesh name="Cube029" geometry={nodes.Cube029.geometry} material={materials['Ombre 02.008']} />
          <mesh name="Cube029_1" geometry={nodes.Cube029_1.geometry} material={materials['Ombre 01.008']} />
          <mesh name="Cube029_2" geometry={nodes.Cube029_2.geometry} material={materials['Haut Table.008']} />
          <mesh name="Cube029_3" geometry={nodes.Cube029_3.geometry} material={materials['Pied.008']} />
        </group>
        <group name="Chaise004" position={[-4.387, -0.228, -0.002]}>
          <mesh name="Cube030" geometry={nodes.Cube030.geometry} material={materials['Ombre 02.009']} />
          <mesh name="Cube030_1" geometry={nodes.Cube030_1.geometry} material={materials['Ombre 01.009']} />
          <mesh name="Cube030_2" geometry={nodes.Cube030_2.geometry} material={materials['Haut Table.009']} />
          <mesh name="Cube030_3" geometry={nodes.Cube030_3.geometry} material={materials['Pied.009']} />
        </group>
        <group name="Chaise005" position={[-4.393, -0.229, -3.498]}>
          <mesh name="Cube031" geometry={nodes.Cube031.geometry} material={materials['Ombre 02.007']} />
          <mesh name="Cube031_1" geometry={nodes.Cube031_1.geometry} material={materials['Ombre 01.007']} />
          <mesh name="Cube031_2" geometry={nodes.Cube031_2.geometry} material={materials['Haut Table.007']} />
          <mesh name="Cube031_3" geometry={nodes.Cube031_3.geometry} material={materials['Pied.007']} />
        </group>
        <group name="Table006" position={[-7.556, 0.012, -3.548]} scale={0.599}>
          <mesh name="Cube032" geometry={nodes.Cube032.geometry} material={materials['Haut Table.010']} />
          <mesh name="Cube032_1" geometry={nodes.Cube032_1.geometry} material={materials['Ombre 01.010']} />
          <mesh name="Cube032_2" geometry={nodes.Cube032_2.geometry} material={materials['Ombre 02.010']} />
          <mesh name="Cube032_3" geometry={nodes.Cube032_3.geometry} material={materials['Pied.010']} />
          <mesh name="Cube032_4" geometry={nodes.Cube032_4.geometry} material={materials['Ombre FC.006']} />
        </group>
        <group name="Table007" position={[-7.556, 0.012, -0.019]} scale={0.599}>
          <mesh name="Cube033" geometry={nodes.Cube033.geometry} material={materials['Haut Table.011']} />
          <mesh name="Cube033_1" geometry={nodes.Cube033_1.geometry} material={materials['Ombre 01.011']} />
          <mesh name="Cube033_2" geometry={nodes.Cube033_2.geometry} material={materials['Ombre 02.011']} />
          <mesh name="Cube033_3" geometry={nodes.Cube033_3.geometry} material={materials['Pied.011']} />
          <mesh name="Cube033_4" geometry={nodes.Cube033_4.geometry} material={materials['Ombre FC.007']} />
        </group>
        <group name="Table008" position={[-7.556, 0.012, 3.638]} scale={0.599}>
          <mesh name="Cube034" geometry={nodes.Cube034.geometry} material={materials['Haut Table.012']} />
          <mesh name="Cube034_1" geometry={nodes.Cube034_1.geometry} material={materials['Ombre 01.012']} />
          <mesh name="Cube034_2" geometry={nodes.Cube034_2.geometry} material={materials['Ombre 02.012']} />
          <mesh name="Cube034_3" geometry={nodes.Cube034_3.geometry} material={materials['Pied.012']} />
          <mesh name="Cube034_4" geometry={nodes.Cube034_4.geometry} material={materials['Ombre FC.008']} />
        </group>
        <group name="Chaise006" position={[-8.401, -0.229, -3.498]}>
          <mesh name="Cube035" geometry={nodes.Cube035.geometry} material={materials['Ombre 02.010']} />
          <mesh name="Cube035_1" geometry={nodes.Cube035_1.geometry} material={materials['Ombre 01.010']} />
          <mesh name="Cube035_2" geometry={nodes.Cube035_2.geometry} material={materials['Haut Table.010']} />
          <mesh name="Cube035_3" geometry={nodes.Cube035_3.geometry} material={materials['Pied.010']} />
        </group>
        <group name="Chaise007" position={[-8.396, -0.228, -0.002]}>
          <mesh name="Cube036" geometry={nodes.Cube036.geometry} material={materials['Ombre 02.013']} />
          <mesh name="Cube036_1" geometry={nodes.Cube036_1.geometry} material={materials['Ombre 01.013']} />
          <mesh name="Cube036_2" geometry={nodes.Cube036_2.geometry} material={materials['Haut Table.013']} />
          <mesh name="Cube036_3" geometry={nodes.Cube036_3.geometry} material={materials['Pied.013']} />
        </group>
        <group name="Chaise008" position={[-8.396, -0.228, 3.655]}>
          <mesh name="Cube037" geometry={nodes.Cube037.geometry} material={materials['Ombre 02.014']} />
          <mesh name="Cube037_1" geometry={nodes.Cube037_1.geometry} material={materials['Ombre 01.014']} />
          <mesh name="Cube037_2" geometry={nodes.Cube037_2.geometry} material={materials['Haut Table.014']} />
          <mesh name="Cube037_3" geometry={nodes.Cube037_3.geometry} material={materials['Pied.014']} />
        </group>
        <group name="Table009" position={[-11.714, 0.012, 3.638]} scale={0.599}>
          <mesh name="Cube038" geometry={nodes.Cube038.geometry} material={materials['Haut Table.015']} />
          <mesh name="Cube038_1" geometry={nodes.Cube038_1.geometry} material={materials['Ombre 01.015']} />
          <mesh name="Cube038_2" geometry={nodes.Cube038_2.geometry} material={materials['Ombre 02.015']} />
          <mesh name="Cube038_3" geometry={nodes.Cube038_3.geometry} material={materials['Pied.015']} />
          <mesh name="Cube038_4" geometry={nodes.Cube038_4.geometry} material={materials['Ombre FC.009']} />
        </group>
        <group name="Table010" position={[-11.714, 0.012, -0.019]} scale={0.599}>
          <mesh name="Cube039" geometry={nodes.Cube039.geometry} material={materials['Haut Table.016']} />
          <mesh name="Cube039_1" geometry={nodes.Cube039_1.geometry} material={materials['Ombre 01.016']} />
          <mesh name="Cube039_2" geometry={nodes.Cube039_2.geometry} material={materials['Ombre 02.016']} />
          <mesh name="Cube039_3" geometry={nodes.Cube039_3.geometry} material={materials['Pied.016']} />
          <mesh name="Cube039_4" geometry={nodes.Cube039_4.geometry} material={materials['Ombre FC.010']} />
        </group>
        <group name="Table011" position={[-11.714, 0.012, -3.548]} scale={0.599}>
          <mesh name="Cube040" geometry={nodes.Cube040.geometry} material={materials['Haut Table.017']} />
          <mesh name="Cube040_1" geometry={nodes.Cube040_1.geometry} material={materials['Ombre 01.017']} />
          <mesh name="Cube040_2" geometry={nodes.Cube040_2.geometry} material={materials['Ombre 02.017']} />
          <mesh name="Cube040_3" geometry={nodes.Cube040_3.geometry} material={materials['Pied.017']} />
          <mesh name="Cube040_4" geometry={nodes.Cube040_4.geometry} material={materials['Ombre FC.011']} />
        </group>
        <group name="Chaise009" position={[-12.553, -0.228, 3.655]}>
          <mesh name="Cube041" geometry={nodes.Cube041.geometry} material={materials['Ombre 02.018']} />
          <mesh name="Cube041_1" geometry={nodes.Cube041_1.geometry} material={materials['Ombre 01.018']} />
          <mesh name="Cube041_2" geometry={nodes.Cube041_2.geometry} material={materials['Haut Table.018']} />
          <mesh name="Cube041_3" geometry={nodes.Cube041_3.geometry} material={materials['Pied.018']} />
        </group>
        <group name="Chaise010" position={[-12.553, -0.228, -0.002]}>
          <mesh name="Cube042" geometry={nodes.Cube042.geometry} material={materials['Ombre 02.019']} />
          <mesh name="Cube042_1" geometry={nodes.Cube042_1.geometry} material={materials['Ombre 01.019']} />
          <mesh name="Cube042_2" geometry={nodes.Cube042_2.geometry} material={materials['Haut Table.019']} />
          <mesh name="Cube042_3" geometry={nodes.Cube042_3.geometry} material={materials['Pied.019']} />
        </group>
        <group name="Chaise011" position={[-12.558, -0.229, -3.498]}>
          <mesh name="Cube043" geometry={nodes.Cube043.geometry} material={materials['Ombre 02.017']} />
          <mesh name="Cube043_1" geometry={nodes.Cube043_1.geometry} material={materials['Ombre 01.017']} />
          <mesh name="Cube043_2" geometry={nodes.Cube043_2.geometry} material={materials['Haut Table.017']} />
          <mesh name="Cube043_3" geometry={nodes.Cube043_3.geometry} material={materials['Pied.017']} />
        </group>
        <mesh name="Object002" geometry={nodes.Object002.geometry} material={materials['Material.026']} position={[-9.788, 4.724, -5.572]} scale={[4, 2, 0.112]} />
        <mesh name="Plane007" geometry={nodes.Plane007.geometry} material={materials['Material.019']} position={[0, -0.663, 0]} scale={38.496} />
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.011']} position={[38.071, 8.646, 30.074]} />
        <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={nodes.Cube006.material} position={[26.735, -13.831, 19.356]} />
        <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials['Material.005']} position={[38.558, -0.836, -38.819]} rotation={[-Math.PI, 1.563, -Math.PI]} />
        <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials['Material.005']} position={[38.558, -0.836, 29.99]} />
        <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials['Material.047']} position={[38.45, 12.561, 30.074]} />
        <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials['Material.011']} position={[38.558, 8.798, -38.448]} rotation={[-Math.PI, 1.563, -Math.PI]} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Kelas.glb')

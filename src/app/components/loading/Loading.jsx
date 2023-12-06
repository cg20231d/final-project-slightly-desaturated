import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { randFloatSpread } from "three/src/math/MathUtils";
import Dragon from "./Adult_dragon"
import LampPost from "./LampPost";
import Rock from "./Rock";
import TreeSpruce from "./TreeSpruce";
import YoungKorrigan from "./YoungKorrigan";
import KorriganWolf from "./KorriganWolf";

const OFFSET_X = 20;
const LAMPS_NB = 10;
const LAMPS_SPEED = 1;
const TREES_NB = 16;
const TREES_SPEED = 1.3;
const FAR_TREES_NB = 12;
const FAR_TREES_SPEED = 0.5;
const ROCKS_NB = 6;
const ROCKS_SPEED = 0.5;
const RANDOMIZER_STRENGTH_SCALE = 0.42;
const RANDOMIZER_STRENGTH_POSITION = 1;

const MovingItem = (props) => {
  const ref = useRef();

  useFrame((_state, delta) => {
    ref.current.position.x += delta * props.speed;

    if (ref.current.position.x >= OFFSET_X) {
      ref.current.position.x = -OFFSET_X;
    }
  });

  useEffect(() => {
    if (props.randomizePosition) {
      ref.current.position.x += randFloatSpread(RANDOMIZER_STRENGTH_POSITION);
      ref.current.position.z += randFloatSpread(RANDOMIZER_STRENGTH_POSITION);
    }
    if (props.randomizeScale) {
      ref.current.scale.x += randFloatSpread(RANDOMIZER_STRENGTH_SCALE);
      ref.current.scale.y += randFloatSpread(RANDOMIZER_STRENGTH_SCALE);
      ref.current.scale.z += randFloatSpread(RANDOMIZER_STRENGTH_SCALE);
    }
  },);

  return (
    <group ref={ref} position={props.position}>
      {props.children}
    </group>
  );
};
const Background = () => {
  const ref = useRef();

  return (
    <group position={[0, 0, 0]} ref={ref}>
      {[...Array(LAMPS_NB)].map((_v, index) => (
        <MovingItem
          key={index}
          speed={LAMPS_SPEED}
          position={[-OFFSET_X + (index / LAMPS_NB) * OFFSET_X * 2, 0, -1.5]}
        >
          <LampPost scale={[0.5, 0.5, 0.5]} />
        </MovingItem>
      ))}

      {[...Array(TREES_NB)].map((_v, index) => (
        <MovingItem
          key={index}
          speed={TREES_SPEED}
          position={[-OFFSET_X + (index / TREES_NB) * OFFSET_X * 2, 0, -3.5]}
          randomizePosition
          randomizeScale
        >
          <TreeSpruce scale={[0.1, 0.1, 0.1]} />
        </MovingItem>
      ))}
      {[...Array(TREES_NB)].map((_v, index) => (
        <MovingItem
          key={index}
          speed={TREES_SPEED}
          position={[-OFFSET_X + (index / TREES_NB) * OFFSET_X * 2, 0, -6]}
          randomizePosition
          randomizeScale
        >
          <TreeSpruce scale={[0.15, 0.15, 0.15]} />
        </MovingItem>
      ))}
      {[...Array(ROCKS_NB)].map((_v, index) => (
        <MovingItem
          key={index}
          speed={ROCKS_SPEED}
          position={[-OFFSET_X + (index / ROCKS_NB) * OFFSET_X * 2, 0, 1]}
          randomizeScale
        >
          <Rock scale={[0.1, 0.1, 0.1]} />
        </MovingItem>
      ))}
    </group>
  );
};
export const Loading = () => {
  return (
    <>
      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={15}
      />
      <ambientLight intensity={0.2} />
      <Environment preset="sunset" intensity={10} blur={0.2} />
      <group position={[0, -1, 0]}>
        <Background />

        <YoungKorrigan
          rotation-y={-Math.PI / 2}
          position={[-1, -0.02, -0.5]}
          scale={[1.5, 1.5, 1.5]}
        />

        <KorriganWolf
          position={[-2, -0.02, 0.5]}
          rotation-y={-Math.PI / 2}
          scale={[1.5, 1.5, 1.5]}
        />

        <Dragon
          position={[2, -0.02, 0.5]}
          rotation-y={-Math.PI / 2}
          scale={[2, 2, 2]} />

        <ContactShadows scale={[16, 16]} opacity={0.42} />

      </group>

    </>
  );
};

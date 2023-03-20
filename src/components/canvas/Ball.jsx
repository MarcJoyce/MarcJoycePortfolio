import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  OrthographicCamera,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const ballRef = useRef();
  const [decal] = useTexture([imgUrl]);
  const startPos = [between(-5, 5), between(-5, 5), between(-3, 3)]
  let xDelta = between(0, 1) === 0 ? 1 : -1;
  let yDelta = between(0, 1) === 0 ? 1 : -1;
  let zDelta = between(0, 1) === 0 ? 1 : -1;

  useFrame(() => {
    if (ballRef.current.position.x > 5 || ballRef.current.position.x < -5) {
      xDelta *= -1
    };
    if (ballRef.current.position.y > 5 || ballRef.current.position.y < -5) {
      yDelta *= -1
    };
    if (ballRef.current.position.z > 3 || ballRef.current.position.z < -3) {
      zDelta *= -1
    };
    ballRef.current.position.x += (0.01 * xDelta);
    ballRef.current.position.y += (0.01 * yDelta);
    ballRef.current.position.z += (0.01 * zDelta);
  });

  return (
    
      <mesh
        position={startPos}
        ref={ballRef}
        castShadow
        receiveShadow
        scale={1}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#1d1836" polygonOffset flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
  );
};

const BallCanvas = ({ data }) => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      className="canvas-wrapper"
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[-0.5, -0.5, 0.1]} />
      <Suspense fallback={<CanvasLoader />}>
      <OrthographicCamera position={[0, 0, -1]}>
        {data.map((tech) => (
          <Ball
            key={tech.name}
            imgUrl={tech.icon}
          />
        ))}
      </OrthographicCamera>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;


const between = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
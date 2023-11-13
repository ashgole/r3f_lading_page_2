import * as THREE from "three";
import "./Walkthrough.css";
import {
  MeshReflectorMaterial,
  Float,
  Text,
  Html,
  PivotControls,
  TransformControls,
  OrbitControls,
  useCursor,
} from "@react-three/drei";
import { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { DirectionArrow } from "./DirectionArrow";


export default function Walkthrough() {
  const cube = useRef();

  //assets
  let [colorMap] = useLoader(THREE.TextureLoader, [`./static/360/i1.jpg`]);

  //state
  const [hovered, setHovered] = useState();

  const change360 = (count) => {
    colorMap = useLoader(THREE.TextureLoader, `../static/360/i${count}.jpg`);
     cube.current.material.map = colorMap;
  };

  useCursor(hovered /*'pointer', 'auto', document.body*/);
  return (
    <>
      {/* <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} /> */}

      <mesh ref={cube}>
        <sphereGeometry args={[50, 60, 40]} />
        <meshBasicMaterial map={colorMap} side={THREE.BackSide} />
      </mesh>
      <DirectionArrow change360={change360} setHovered={setHovered} />
    </>
  );
}

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
import { useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { DirectionArrow } from "./DirectionArrow";
import { i1, i2, i3 } from "../media/Media";


export default function Walkthrough() {
  const cube = useRef();

  //assets
  let [colorMap] = useLoader(THREE.TextureLoader, [i1]);

  //state
  const [hovered, setHovered] = useState();
  const [currentImage, setCurrentImage] = useState(i1);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    console.log('ok currentIndex:',currentIndex );
    switch (currentIndex) {
      case 1:
        setCurrentImage(i1);
        break;
      case 2:
        setCurrentImage(i2);
        break;
      case 3:
        setCurrentImage(i3);
        break;
      default:
        break;
    }
    colorMap = useLoader(THREE.TextureLoader, currentImage);
    cube.current.material.map = colorMap;
  }, [currentIndex])


  useCursor(hovered /*'pointer', 'auto', document.body*/);
  return (
    <>
      {/* <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} /> */}

      <mesh ref={cube}>
        <sphereGeometry args={[50, 60, 40]} />
        <meshBasicMaterial map={colorMap} side={THREE.BackSide} />
      </mesh>
      <DirectionArrow setCurrentIndex={setCurrentIndex} setHovered={setHovered} />
    </>
  );
}

import * as THREE from "three";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Walkthrough from "./Walkthrough";

export default function R3F_Walkthrough() {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <Walkthrough />
      </Canvas>
    </>
  );
}

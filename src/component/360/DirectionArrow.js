import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { Html } from "@react-three/drei";
import { directionMapAOImg, directionMapImg } from "../media/Media";

const DirectionArrow = ({ change360, setHovered }) => {
    //static
    let [directionMap, directionMapAO] = useLoader(THREE.TextureLoader, [
        directionMapImg,
        directionMapAOImg,
    ]);
    //state
    const [walkArray,] = useState(["i1", "i2", "i3"]);

    return <>
        {walkArray.map((itemBox, index) => {
            return (
                <>
                    <group key={index} position={[index * 2, 0, index * 2]}>
                        <mesh
                            rotation-x={-Math.PI * 0.5}
                            scale={1}
                            onClick={() => {
                                change360(index + 1);
                            }}
                            onPointerOver={() => setHovered(true)}
                            onPointerOut={() => setHovered(false)}
                        >
                            <planeGeometry />
                            <meshBasicMaterial
                                map={directionMap}
                                alphaMap={directionMapAO}
                                transparent={true}
                                opacity={1}
                                side={THREE.DoubleSide}
                            />
                        </mesh>
                        <Html wrapperClass="label" zIndexRange={[2, 0]}>
                            {"ashish" + index}
                        </Html>
                    </group>
                </>
            );
        })}
    </>
}

export { DirectionArrow }
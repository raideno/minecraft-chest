/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import Config from "../../utils/Config";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Cube005: THREE.Mesh;
    Cube005_1: THREE.Mesh;
  };
  materials: {
    ["Corners-Mat"]: THREE.MeshStandardMaterial;
    ["Wood-Mat"]: THREE.MeshStandardMaterial;
  };
};

const Model = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials } = useGLTF(
    "/minecraft-chest/models/top.glb"
  ) as unknown as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 3, 0.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["Corners-Mat"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials["Wood-Mat"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/top.glb");

export default Model;

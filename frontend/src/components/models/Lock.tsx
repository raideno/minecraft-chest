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
    Lock: THREE.Mesh;
  };
  materials: {
    ["Lock-Mat"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials } = useGLTF(
    Config.production ? Config.base : "" + "/models/bottom.glb"
  ) as unknown as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lock.geometry}
        material={materials["Lock-Mat"]}
        position={[0, 6, 0]}
        scale={[2.1, 1.2, 1]}
      />
    </group>
  );
}

useGLTF.preload("/models/lock.glb");

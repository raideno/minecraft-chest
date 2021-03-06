/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Object_12: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Chest_0_A|Chest_0_AAction";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials, animations } = useGLTF(
    "/minecraft-chest/models/variant.glb"
  ) as unknown as GLTFResult;
  const { actions } = useAnimations(animations, group);

  const animate = () => {
    const animation = actions["Chest_0_A|Chest_0_AAction"];
    animation?.setDuration(2);
    animation?.play();
    setTimeout(() => {
      animation?.stop();
    }, 2000);
  };

  return (
    <group
      onClick={animate}
      ref={group}
      {...props}
      dispose={null}
      rotation={[-Math.PI / 2 + 0.1, 0, -Math.PI / 2 - 0.25]}
    >
      <group name="Scene">
        <group name="Sketchfab_model">
          <group name="chestfbx">
            <group name="Object_2">
              <group name="RootNode">
                <group name="Chest_0_A" scale={1}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials["Material.001"]}
                      skeleton={nodes.Object_12.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/variant.glb");

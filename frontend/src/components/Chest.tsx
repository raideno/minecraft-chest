import React from "react";
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";

import TopModel from "./models/Top";
import LockModel from "./models/Lock";
import BottomModel from "./models/Bottom";

const Chest = () => {
  const camera = useThree().camera;

  const [TopRef, ChestRef] = [
    React.useRef<THREE.Group | null>(null),
    React.useRef<THREE.Group | null>(null),
  ];
  const [state, updateState] = React.useState<boolean>(false);

  const handleClick = () => {
    TopRef.current!.rotation.x = state ? 0 : 45;
    TopRef.current!.position.y = state ? 0 : 3.5;
    TopRef.current!.position.z = state ? 0 : -0.65;
    console.log("[state]", !state);
    updateState(!state);
  };

  React.useEffect(() => {
    camera.position.z = 10;
    camera.position.y = 5;
  }, []);

  useFrame(() =>
    ChestRef.current ? (ChestRef.current!.rotation.y += 0.001) : null
  );

  return (
    <motion.group
      /*initial={{ scale: 0, z: 0 }}*/
      animate={{ scale: 1, z: -7.5 }}
      exit={{ scale: 0 }}
      ref={ChestRef as any}
      onClick={handleClick}
      rotation={[0, 3, 0]}
      position={[0, 5, -7.5]}
    >
      <group ref={TopRef}>
        <LockModel position={[0, -3.5, -2.9]} />
        <TopModel position={[0, 0, 0]} />
      </group>
      <BottomModel position={[0, 0, 0]} />
    </motion.group>
  );
};

export default Chest;

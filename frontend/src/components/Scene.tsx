import { Canvas } from "@react-three/fiber";

const Scene = ({ children }: { children?: React.ReactNode }) => {
  return <Canvas>{children}</Canvas>;
};

export default Scene;

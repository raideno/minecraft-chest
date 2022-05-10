import { motion } from "framer-motion";

import Scene from "../components/Scene";
import Shortcut from "../components/Shortcut";
import Inventory from "../components/Inventory";

import Enter from "../components/icons/Enter";
import Space from "../components/icons/Space";

import styles from "../styles/routes/main.module.scss";

/*import Chest from "../components/Chest";*/
import Model from "../components/models/variant";
import CameraController from "../components/models/CameraController";

import ItemInterface from "../utils/ItemInterface";

const Main = () => {
  const content: ItemInterface[] = new Array(9).fill({
    id: "raiden",
    name: "r",
    size: 4,
    type: "empty",
  });

  return (
    <div className={styles.container}>
      <div className={styles.scene}>
        <Scene>
          <ambientLight intensity={0.25} />
          <pointLight position={[5, 5, 5]} />
          <CameraController />
          <Model />
        </Scene>
      </div>
      {/*<Inventory content={content} />*/}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className={styles.shortcuts}
      >
        <Shortcut key_="Escape">Esc</Shortcut>
        <Shortcut key_=" ">
          Space <Space />
        </Shortcut>
        <Shortcut key_="Enter">
          Enter <Enter />
        </Shortcut>
      </motion.div>
    </div>
  );
};

export default Main;

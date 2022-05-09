import styles from "../styles/routes/home.module.scss";

import Button from "../components/Button";
import Cart from "../components/icons/Cart";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Arrow from "../components/icons/Arrow";

const Home = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      className={styles.container}
    >
      <div className={styles.texts}>
        <div className={styles.title}>
          <div className={styles["title-1"]}>Keep it safe,</div>
          <div className={styles["title-2"]}>Buy a chest!</div>
        </div>
        <div className={styles.description}>Chest manufactoring since 1998</div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className={styles.buttons}
      >
        <Button href="try-it">
          Purchase
          <Cart />
        </Button>
        <Link to={"try-it"} className={styles["secondary-button"]}>
          Try It <Arrow />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;

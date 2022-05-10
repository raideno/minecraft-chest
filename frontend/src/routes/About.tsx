import { motion } from "framer-motion";

import Email from "../components/icons/Email";
import Discord from "../components/icons/Discord";
import Twitter from "../components/icons/Twitter";
import styles from "../styles/routes/about.module.scss";
import Scene from "../components/Scene";
import Model from "../components/models/variant";
import CameraController from "../components/models/CameraController";

const About = () => {
  const copy = (string: string) => navigator.clipboard.writeText(string);

  return (
    <div className={styles.container}>
      <div className={styles.split}>
        <div className={styles.left}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className={styles.about}
          >
            <div className={styles.title}># About</div>
            <div className={styles.description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              similique consequatur enim facilis, culpa magnam dolorem. Velit
              soluta in nemo autem veritatis perspiciatis cum minus vero odio ea
              est eveniet, aut ipsam earum cupiditate voluptatibus veniam,
              ratione repellendus pariatur! Aperiam aspernatur quas, blanditiis
              ea accusantium architecto sunt laudantium quo fuga.
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className={styles.contacts}
          >
            <div className={styles.title}># Contacts</div>
            <ul className={styles.links}>
              <li
                className={styles.link}
                onClick={copy.bind(null, "nadirkichou@hotmail.fr")}
              >
                <Email />
                nadirkichou@hotmail.fr
              </li>
              <li
                className={styles.link}
                onClick={copy.bind(null, "raiden#5656")}
              >
                <Discord />
                raiden#5656
              </li>
              <li className={styles.link} onClick={copy.bind(null, "@raiden")}>
                <Twitter />
                @raiden
              </li>
            </ul>
          </motion.div>
        </div>
        <div className={styles.right}>
          <Scene>
            <CameraController />
            <ambientLight intensity={0.25} />
            <pointLight position={[5, 5, 5]} />
            <Model />
          </Scene>
        </div>
      </div>
    </div>
  );
};

export default About;

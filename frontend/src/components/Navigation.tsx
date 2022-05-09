import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import LinkIcon from "./icons/Link";
import SandwichIcon from "./icons/Sandwich";

import styles from "../styles/components/navigation.module.scss";

const config = {
  title: "MyChest",
  links: [
    {
      name: "Home",
      path: "/",
      external: false,
    },
    {
      name: "About",
      path: "/about",
      external: false,
    },
    {
      name: "Code",
      external: true,
      path: "https://github.com/raideno/minecraft-chest",
    },
  ],
};

/*
Todo: -Add animation on mount && unmount
Todo: -style it
Todo: Put animation in a higher order component inorder to reuse them
*/

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles.container}
    >
      <div className={styles.title}>MyChest</div>
      <div className={styles.sandwich}>
        <SandwichIcon />
      </div>
      <ul className={styles.links}>
        {config.links.map((link, i) => (
          <li key={"link-" + i}>
            <Link className={styles.link} to={link.path}>
              {link.name}
              {link.external ? <LinkIcon /> : null}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navigation;

import React from "react";
import { useAnimation, motion } from "framer-motion";
import styles from "../styles/components/shortcut.module.scss";

const Shortcut = ({
  children,
  key_,
}: {
  children: React.ReactNode;
  key_?: string;
}) => {
  const controls = useAnimation();
  /*const ref = React.useRef<HTMLDivElement | null>(null);*/

  React.useEffect(() => {
    const fonction = async ({ key: pressed }: KeyboardEvent) => {
      if (key_ !== pressed) return;

      /*const node = ref.current!;*/

      await controls.start({
        scale: 0.95,
        fill: "var(--color-greys-active)",
        color: "var(--color-greys-active)",
        borderColor: "var(--color-greys-active)",
        transition: { duration: 0.125 },
      });
      return await controls.start({
        scale: 1,
        fill: "var(--color-greys-normal)",
        color: "var(--color-greys-normal)",
        borderColor: "var(--color-greys-normal)",
        transition: { duration: 0.125 },
      });
    };

    window.addEventListener("keydown", fonction);
    return () => window.removeEventListener("keydown", fonction);
  });
  return (
    <motion.div animate={controls} /*ref={ref}*/ className={styles.shortcut}>
      {children}
    </motion.div>
  );
};

export default Shortcut;

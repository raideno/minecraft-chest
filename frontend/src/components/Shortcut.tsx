import React from "react";
import styles from "../styles/components/shortcut.module.scss";

const Shortcut = ({
  children,
  key_,
}: {
  children: React.ReactNode;
  key_?: string;
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const fonction = ({ key: pressed }: KeyboardEvent) => {
      if (key_ !== pressed) return;

      const node = ref.current!;

      node.style.transform = "scale(0.95)";
      node.style.fill = "var(--color-greys-active)";
      node.style.color = "var(--color-greys-active)";
      node.style.borderColor = "var(--color-greys-active)";

      setTimeout(() => {
        node.style.transform = "scale(1)";
        node.style.fill = "var(--color-greys-normal)";
        node.style.color = "var(--color-greys-normal)";
        node.style.borderColor = "var(--color-greys-normal)";
      }, 125);
    };

    window.addEventListener("keydown", fonction);
    return () => window.removeEventListener("keydown", fonction);
  });
  return (
    <div ref={ref} className={styles.shortcut}>
      {children}
    </div>
  );
};

export default Shortcut;

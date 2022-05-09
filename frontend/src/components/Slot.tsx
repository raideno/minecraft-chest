import styles from "../styles/components/slot.module.scss";

import ItemInterface from "../utils/ItemInterface";

interface PropsInterface {
  onClick: () => void;
  content: ItemInterface;
  state: "active" | "default";
}

const Slot = ({ content, state, onClick }: PropsInterface) => {
  return (
    <div
      className={
        styles.container +
        " " +
        (state === "active" ? styles["container-selected"] : "")
      }
      onClick={onClick}
    >
      {content.name}
    </div>
  );
};

export default Slot;

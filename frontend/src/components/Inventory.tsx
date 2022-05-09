import React from "react";
import styles from "../styles/components/inventory.module.scss";

import Slot from "./Slot";

import ItemInterface from "../utils/ItemInterface";

const Inventory = ({ content: data }: { content: ItemInterface[] }) => {
  const [content, updateContent] = React.useState<ItemInterface[]>(data);
  const [states, setStates] = React.useState<boolean[]>(data.map((d) => false));

  function handleClick(index: number) {
    const array = new Array(data.length).fill(false);
    array[index] = true;
    setStates(array);
  }

  return (
    <div className={styles.container}>
      {content.map((item, i) => (
        <Slot
          key={item.id + "-" + i}
          content={item}
          state={states[i] ? "active" : "default"}
          onClick={handleClick.bind(null, i)}
        />
      ))}
    </div>
  );
};

export default Inventory;

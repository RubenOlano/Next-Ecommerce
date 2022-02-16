import React, { FC } from "react";
import { ITEMS } from "../Shop/shop.data";
import styles from "./CollectionItem.module.scss";

const CollectionItem: FC<ITEMS> = ({ name, price, imageUrl }) => {
  return (
    <div className={styles["collection-item"]}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles["image"]}
      />
      <div className={styles["collection-footer"]}>
        <span className={styles["name"]}>{name}</span>
        <span className={styles["price"]}>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;

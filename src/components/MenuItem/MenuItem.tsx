import React, { FC } from "react";
import styles from "./menu-item.module.scss";

interface MenuProps {
  title: string;
  imageURL: string;
  size?: string;
}

const MenuItem: FC<MenuProps> = ({ title, imageURL, size }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageURL})` }}
      className={`${size && styles[size]} ${styles["menu-item"]}`}
    >
      <div className={styles["content"]}>
        <h1 className={styles["title"]}>{title}</h1>
        <span className={styles["subtitle"]}>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;

import React, { FC } from "react";
import styles from "./menu-item.module.scss";

interface MenuProps {
  title: string;
  imageURL: string;
  size?: string;
}

const MenuItem: FC<MenuProps> = ({ title, imageURL, size }) => {
  return (
    <div className={`${size && styles[size]} ${styles["menu-item"]}`}>
      <div
        style={{ backgroundImage: `url(${imageURL})` }}
        className={styles["background-image"]}
      ></div>
      <div className={styles["content"]}>
        <h1 className={styles["title"]}>{title.toUpperCase()}</h1>
        <span className={styles["subtitle"]}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;

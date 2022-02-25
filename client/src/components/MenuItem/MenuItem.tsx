import { useRouter } from "next/router";
import React, { FC } from "react";
import { ISections } from "../../types/types";
import styles from "./menu-item.module.scss";

const MenuItem: FC<ISections> = ({ title, imageUrl, size, linkUrl }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/${linkUrl}`)}
      className={`${size && styles[size]} ${styles["menu-item"]}`}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
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

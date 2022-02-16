import Link from "next/link";
import React from "react";
import Crown from "../../assets/crown.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <Link href="/">
        <a className={styles["logo-container"]}>
          <Crown className={styles["logo"]} />
        </a>
      </Link>
      <div className={styles["options"]}>
        <Link passHref href="/shop">
          <div className={styles["option"]}>Shop</div>
        </Link>
        <Link passHref href="/contact">
          <div className={styles["option"]}>Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

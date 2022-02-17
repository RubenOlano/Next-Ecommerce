import Link from "next/link";
import React, { FC } from "react";
import Crown from "../../assets/crown.svg";
import styles from "./Header.module.scss";
import { User } from "firebase/auth";
import { auth } from "../../firebase/firebase.util";

interface HeaderProps {
  user?: User | null;
}

const Header: FC<HeaderProps> = ({ user }) => {
  return (
    <div className={styles["header"]}>
      <Link href="/">
        <a className={styles["logo-container"]}>
          <Crown className={styles["logo"]} />
        </a>
      </Link>
      <div className={styles["options"]}>
        {user ? (
          <div className={styles["option"]} onClick={() => auth.signOut()}>
            Logout
          </div>
        ) : (
          <Link passHref href="/signin">
            <div className={styles["option"]}>Sign In</div>
          </Link>
        )}

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

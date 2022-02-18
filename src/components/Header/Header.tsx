import Link from "next/link";
import React from "react";
import Crown from "../../assets/crown.svg";
import styles from "./Header.module.scss";
import { auth } from "../../firebase/firebase.util";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

const Header = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);

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

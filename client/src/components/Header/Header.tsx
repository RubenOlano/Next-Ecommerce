import Link from "next/link";
import React from "react";
import Crown from "../../assets/crown.svg";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import { signOut } from "../../redux/user/userReducer";

const Header = () => {
  const dispatch = useDispatch();
  const {
    user: { currentUser },
    cart,
  } = useSelector((state: RootState) => state);

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
        {currentUser ? (
          <div className={styles["option"]} onClick={() => dispatch(signOut())}>
            Log Out
          </div>
        ) : (
          <Link passHref href="/signin">
            <div className={styles["option"]}>Sign In</div>
          </Link>
        )}
        <CartIcon />
      </div>
      {!cart.hidden && <CartDropDown />}
    </div>
  );
};
export default Header;

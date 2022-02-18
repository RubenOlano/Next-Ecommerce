import React from "react";
import styles from "./CartIcon.module.scss";
import Cart from "../../assets/shopping-bag.svg";
import { useDispatch } from "react-redux";
import toggleHidden from "../../redux/cart/cartActions";

const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles["cart-icon"]}
      onClick={() => dispatch(toggleHidden())}
    >
      <Cart className={styles["shopping-icon"]} />
      <span className={styles["item-count"]}>0</span>
    </div>
  );
};

export default CartIcon;

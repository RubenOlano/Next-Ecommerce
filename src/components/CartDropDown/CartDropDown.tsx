import React from "react";
import Button from "../Button/Button";
import styles from "./CartDropDown.module.scss";

const CartDropDown = () => {
  return (
    <div className={styles["cart-dropdown"]}>
      <div className={styles["cart-items"]} />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;

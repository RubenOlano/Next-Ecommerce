import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import styles from "./CartDropDown.module.scss";

const CartDropDown = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <div className={styles["cart-dropdown"]}>
      <div className={styles["cart-items"]}>
        {cartItems.map(({ item, quantity }) => (
          <CartItem key={item.id} item={item} quantity={quantity} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;

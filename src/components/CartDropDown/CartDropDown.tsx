import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHidden } from "../../redux/cart/cartActions";
import { RootState } from "../../redux/rootReducer";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import styles from "./CartDropDown.module.scss";

const CartDropDown = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className={styles["cart-dropdown"]}>
      <div className={styles["cart-items"]}>
        {cartItems.length ? (
          cartItems.map(({ item, quantity }) => (
            <CartItem key={item.id} item={item} quantity={quantity} />
          ))
        ) : (
          <span className={styles["empty-message"]}>Your cart is empty</span>
        )}
      </div>
      <Link passHref href="/checkout">
        <Button onClick={() => dispatch(toggleHidden())}>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropDown;

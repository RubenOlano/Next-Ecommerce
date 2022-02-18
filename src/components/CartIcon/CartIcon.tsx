import React from "react";
import styles from "./CartIcon.module.scss";
import Cart from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleHidden } from "../../redux/cart/cartActions";
import { RootState } from "../../redux/rootReducer";

const CartIcon = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state: RootState) => state.cart.totalCount);
  return (
    <div
      className={styles["cart-icon"]}
      onClick={() => dispatch(toggleHidden())}
    >
      <Cart className={styles["shopping-icon"]} />
      <span className={styles["item-count"]}>{quantity}</span>
    </div>
  );
};

export default CartIcon;

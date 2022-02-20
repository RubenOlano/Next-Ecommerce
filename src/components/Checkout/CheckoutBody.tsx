import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import StripeButton from "../StripeButton/StripeButton";
import styles from "./Checkout.module.scss";

const Checkout = () => {
  const { cartItems, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <div className={styles["checkout-page"]}>
      <div className={styles["checkout-header"]}>
        <div className={styles["header-block"]}>
          <span>Product</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Description</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Quantity</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Price</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(({ item, quantity }) => (
        <CheckoutItem key={item.id} quantity={quantity} item={item} />
      ))}
      <div className={styles["total"]}>Total: ${totalPrice}</div>
      <StripeButton price={totalPrice} />
    </div>
  );
};

export default Checkout;

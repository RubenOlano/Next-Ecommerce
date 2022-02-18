import Image from "next/image";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { addItem, clearItems, removeItem } from "../../redux/cart/cartActions";
import { ITEMS } from "../Shop/shop.data";
import styles from "./CheckoutItem.module.scss";

interface CheckoutItemProps {
  item: ITEMS;
  quantity?: number;
}

const CheckoutItem: FC<CheckoutItemProps> = ({ item, quantity }) => {
  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();
  return (
    <div className={styles["checkout-item"]}>
      <div className={styles["image-container"]}>
        <Image height="100%" width="100%" src={imageUrl} alt="item" />
      </div>
      <span className={styles["name"]}>{name}</span>
      <span className={styles["quantity"]}>
        <div
          onClick={() => dispatch(removeItem({ item, quantity }))}
          className={styles["arrow"]}
        >
          &#10094;
        </div>
        <span className={styles["value"]}>{quantity || 1}</span>
        <div
          onClick={() => dispatch(addItem({ item, quantity }))}
          className={styles["arrow"]}
        >
          &#10095;
        </div>
      </span>
      <span className={styles["price"]}>{price}</span>
      <div
        onClick={() => dispatch(clearItems({ item, quantity }))}
        className={styles["remove-button"]}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

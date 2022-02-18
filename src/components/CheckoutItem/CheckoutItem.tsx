import Image from "next/image";
import React, { FC } from "react";
import { ITEMS } from "../Shop/shop.data";
import styles from "./CheckoutItem.module.scss";

interface CheckoutItemProps {
  item: ITEMS;
  quantity?: number;
}

const CheckoutItem: FC<CheckoutItemProps> = ({
  item: { name, imageUrl, price },
  quantity,
}) => {
  return (
    <div className={styles["checkout-item"]}>
      <div className={styles["image-container"]}>
        <Image height="100%" width="100%" src={imageUrl} alt="item" />
      </div>
      <span className={styles["name"]}>{name}</span>
      <span className={styles["quantity"]}>{quantity || 1}</span>
      <span className={styles["price"]}>{price}</span>
      <div className={styles["remove-button"]}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;

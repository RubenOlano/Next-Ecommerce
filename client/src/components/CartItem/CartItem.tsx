import Image from "next/image";
import React, { FC } from "react";
import { cartItemProps } from "../../types/types";
import style from "./CartItem.module.scss";

const CartItem: FC<cartItemProps> = ({
  item: { imageUrl, price, name },
  quantity,
}) => {
  return (
    <div className={style["cart-item"]}>
      <Image width="100%" height="100%" src={imageUrl} alt={name} />
      <div className={style["item-details"]}>
        <span className={style["name"]}>{name}</span>
        <span className={style["price"]}>
          {quantity && `${quantity} x `}${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

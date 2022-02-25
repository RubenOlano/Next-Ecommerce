import React, { FC } from "react";
import styles from "./CollectionItem.module.scss";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cartReducer";
import { CollectionProps } from "../../types/types";

const CollectionItem: FC<CollectionProps> = ({ item }) => {
  const { imageUrl, name, price } = item;
  const dispatch = useDispatch();
  return (
    <div className={styles["collection-item"]}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles["image"]}
      />
      <div className={styles["collection-footer"]}>
        <span className={styles["name"]}>{name}</span>
        <span className={styles["price"]}>${price}</span>
      </div>
      <Button
        onClick={() => dispatch(addItem({ item }))}
        className={styles["Button"]}
        inverted
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default CollectionItem;

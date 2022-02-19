import React, { FC } from "react";
import { ITEMS } from "../../redux/shop/shop.data";
import CollectionItem from "../CollectionItem/CollectionItem";
import styles from "./preview.module.scss";

interface CollectionProps {
  title: string;
  items: ITEMS[];
}

const PreviewCollection: FC<CollectionProps> = ({
  title,
  items,
}: CollectionProps) => {
  return (
    <div className={styles["collection-preview"]}>
      <h1 className={styles["title"]}>{title.toUpperCase()}</h1>
      <div className={styles["preview"]}>
        {items
          .filter((_item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}>
              {item.name}
            </CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;

import { useRouter } from "next/router";
import React, { FC } from "react";
import { PreviewCollectionProps } from "../../types/types";
import CollectionItem from "../CollectionItem/CollectionItem";
import styles from "./preview.module.scss";

const PreviewCollection: FC<PreviewCollectionProps> = ({
  title,
  items,
  routeName,
}) => {
  const router = useRouter();
  return (
    <div className={styles["collection-preview"]}>
      <h1
        className={styles["title"]}
        onClick={() => router.push(`/shop/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
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

import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import { selectCollection } from "../../redux/shop/shopSelector";
import styles from "./CollectionComponent.module.scss";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../redux/rootReducer";
const CollectionComponent = () => {
  const router = useRouter();
  const { collectionId } = router.query;
  const state = useSelector((state: RootState) => state);
  const collection = selectCollection(state, collectionId as string);
  return (
    <div className={styles["collection-page"]}>
      <h2 className={styles["title"]}>{collection?.title}</h2>
      <div className={styles["items"]}>
        {collection?.items.map((item) => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CollectionComponent;

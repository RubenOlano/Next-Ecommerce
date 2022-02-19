import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";
import PreviewCollection from "../PreviewCollection/PreviewCollection";
import styles from "./CollectionsOverview.module.scss";

const CollectionsOverview = () => {
  const state = useSelector((state: RootState) => state);
  const shopData = selectCollectionsForPreview(state);
  return (
    <div className={styles["collections-overview"]}>
      {shopData.map((item) => (
        <PreviewCollection
          key={item.id}
          title={item.title}
          items={item.items}
        />
      ))}
    </div>
  );
};

export default CollectionsOverview;

import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";
import PreviewCollection from "../PreviewCollection/PreviewCollection";
import styles from "./CollectionsOverview.module.scss";

const CollectionsOverview = () => {
  const shopData = useSelector(selectCollectionsForPreview);
  return (
    <div className={styles["collections-overview"]}>
      {shopData.map((item) => (
        <PreviewCollection
          key={item.id}
          title={item.title}
          items={item.items}
          routeName={item.routeName}
        />
      ))}
    </div>
  );
};

export default CollectionsOverview;

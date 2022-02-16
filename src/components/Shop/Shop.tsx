import React from "react";
import SHOP_DATA from "./shop.data";
import { ISHOP_DATA } from "./shop.data";
import PreviewCollection from "../PreviewCollection/PreviewCollection";

const Shop = () => {
  const shopData: ISHOP_DATA[] = SHOP_DATA;

  return (
    <div className="shop-page">
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

export default Shop;

import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import { ISHOP_DATA } from "./shop.data";

const Shop = () => {
  const [_shopData, _setShopData] = useState<ISHOP_DATA[]>(SHOP_DATA);

  return <div>Shop Page</div>;
};

export default Shop;

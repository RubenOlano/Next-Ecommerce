import { NextPage } from "next";
import React from "react";
import Header from "../../components/Header/Header";
import Shop from "../../components/Shop/Shop";

const ShopPage: NextPage = () => {
  return (
    <>
      <Header />
      <Shop />
    </>
  );
};

export default ShopPage;

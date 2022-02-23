import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { fetchCollections } from "../../redux/shop/shopActions";
import CollectionsOverview from "../CollectionsOverview/CollectionsOverview";
import WithSpinner from "../Spinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const Shop = () => {
  const loading = useSelector((state: RootState) => state.shop.isFetching);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <CollectionsOverviewWithSpinner isLoading={loading} />
    </div>
  );
};

export default Shop;

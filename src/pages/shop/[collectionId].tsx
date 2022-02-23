import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionComponent from "../../components/CollectionComponent/CollectionComponent";
import WithSpinner from "../../components/Spinner/WithSpinner";
import { RootState } from "../../redux/rootReducer";
import { fetchCollections } from "../../redux/shop/shopActions";

const CollectionComponentWithSpinner = WithSpinner(CollectionComponent);

const Collection = () => {
  const loading = useSelector((state: RootState) => state.shop.isFetching);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  return <CollectionComponentWithSpinner isLoading={loading} />;
};

export default Collection;

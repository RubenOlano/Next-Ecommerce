import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.util";
import { updateCollections } from "../../redux/shop/shopActions";
import CollectionsOverview from "../CollectionsOverview/CollectionsOverview";
import WithSpinner from "../Spinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const Shop = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const collectionRef = collection(firestore, "collection");
    onSnapshot(collectionRef, (snapshot) => {
      const collection = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collection));
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <div className="shop-page">
      <CollectionsOverviewWithSpinner isLoading={loading} />
    </div>
  );
};

export default Shop;

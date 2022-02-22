import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CollectionComponent from "../../components/CollectionComponent/CollectionComponent";
import WithSpinner from "../../components/Spinner/WithSpinner";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.util";
import { updateCollections } from "../../redux/shop/shopActions";

const CollectionComponentWithSpinner = WithSpinner(CollectionComponent);

const Collection = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const collectionRef = collection(firestore, "collection");
    onSnapshot(collectionRef, (snapshot) => {
      const collection = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collection));
      setLoading(false);
    });
  }, []);
  return <CollectionComponentWithSpinner isLoading={loading} />;
};

export default Collection;

import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import styles from "./CollectionComponent.module.scss";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import Spinner from "../Spinner/Spinner";
import { ITEMS } from "../../types/types";

const GET_COLLECTIONS_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionComponent = () => {
  const router = useRouter();
  const { collectionId } = router.query;
  const { error, loading, data } = useQuery(GET_COLLECTIONS_BY_TITLE, {
    variables: { title: collectionId },
  });
  console.log({ loading });
  console.log({ data });
  console.log({ error });

  const collection = data?.getCollectionsByTitle;
  if (loading) return <Spinner />;
  return (
    <div className={styles["collection-page"]}>
      <h2 className={styles["title"]}>{collection?.title}</h2>
      <div className={styles["items"]}>
        {collection?.items.map((item: ITEMS) => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CollectionComponent;

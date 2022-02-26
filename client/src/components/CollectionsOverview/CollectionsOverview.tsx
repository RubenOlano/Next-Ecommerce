import { gql } from "apollo-boost";
import React, { FC } from "react";
import { useQuery } from "react-apollo";
import { collection } from "../../types/types";
import PreviewCollection from "../PreviewCollection/PreviewCollection";
import Spinner from "../Spinner/Spinner";
import styles from "./CollectionsOverview.module.scss";

interface CollectionsOverviewProps {
  collections?: any;
}

const CollectionsOverview: FC<CollectionsOverviewProps> = () => {
  const getCollections = gql`
    {
      collections {
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
  const { loading, error, data } = useQuery(getCollections);
  console.log({ error });
  console.log({ data });
  console.log({ loading });

  if (loading) return <Spinner />;
  return (
    <div className={styles["collections-overview"]}>
      {data.collections.map((item: collection) => (
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

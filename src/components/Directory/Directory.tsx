import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./directory.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

const Directory = () => {
  const sections = useSelector((state: RootState) => state.directory);
  return (
    <div className={styles["directory-menu"]}>
      {sections.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Directory;

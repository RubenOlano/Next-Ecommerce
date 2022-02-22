import React, { FC } from "react";
import { SpinnerProps } from "../../types/types";
import styles from "./Spinner.module.scss";

const WithSpinner = (WrappedComponent: FC) => {
  const Spinner: FC<SpinnerProps> = ({ isLoading, otherProps }) => {
    return isLoading ? (
      <div className={styles["spinner-overlay"]}>
        <div className={styles["spinner-container"]} />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;

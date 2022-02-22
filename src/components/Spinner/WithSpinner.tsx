import React, { FC } from "react";
import styles from "./Spinner.module.scss";

interface SpinnerProps {
  isLoading: boolean;
  otherProps?: any;
}

// const UseSpinner: FC<SpinnerProps> = ({
//   WrappedComponent,
//   isLoading,
//   ...otherProps
// }) => {
//   if (isLoading) {
//     return (
//       <div className={styles["spinner-overlay"]}>
//         <div className={styles["spinner-container"]} />
//       </div>
//     );
//   } else {
//     return <WrappedComponent {...otherProps} />;
//   }
// };

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

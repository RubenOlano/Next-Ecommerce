import React, { FC } from "react";
import { FormProps } from "../../types/types";
import styles from "./FormInput.module.scss";

const FormInput: FC<FormProps> = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className={styles["group"]}>
      <input
        onChange={handleChange}
        className={styles["form-input"]}
        {...otherProps}
      />
      {label && (
        <label
          className={`${
            styles[`${otherProps.value?.length ? "shrink" : ""}`]
          } ${styles["form-input-label"]}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;

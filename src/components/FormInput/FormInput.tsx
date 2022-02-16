import React, { FC } from "react";
import styles from "./FormInput.module.scss";

interface FormProps {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  type: string;
  required: boolean;
  value: string;
}

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

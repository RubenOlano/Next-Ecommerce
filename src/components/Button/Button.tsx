import React, { FC } from "react";
import styles from "./Button.module.scss";
interface ButtonProps {
  type: "submit";
}

const Button: FC<ButtonProps> = ({ children, ...otherProps }) => {
  return (
    <button className={styles["custom-button"]} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;

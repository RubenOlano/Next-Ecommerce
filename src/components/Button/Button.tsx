import React, { FC } from "react";
import styles from "./Button.module.scss";
interface ButtonProps {
  type?: "submit";
  onClick?: any;
  isGoogleSignIn?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`${styles["custom-button"]} ${
        isGoogleSignIn ? styles["google-sign-in"] : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

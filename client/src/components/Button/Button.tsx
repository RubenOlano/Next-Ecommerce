import React, { FC } from "react";
import { ButtonProps } from "../../types/types";
import styles from "./Button.module.scss";

const Button: FC<ButtonProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  className,
  onClick,
}) => {
  return (
    <button
      className={`${styles["custom-button"]} ${
        isGoogleSignIn ? styles["google-sign-in"] : ""
      } ${inverted ? styles["inverted"] : ""} ${className && className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

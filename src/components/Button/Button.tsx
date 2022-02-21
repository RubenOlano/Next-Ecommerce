import React, { FC } from "react";
import styles from "./Button.module.scss";
interface ButtonProps {
  type?: "submit" | "button";
  onClick?: () => any;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  className?: string;
}

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

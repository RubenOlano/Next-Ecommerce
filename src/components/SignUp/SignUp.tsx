import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import styles from "./SignUp.module.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { info } from "../../types/types";

const initInfo: info = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [newUser, setNewUser] = useState<info>(initInfo);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newUser.password !== newUser.confirmPassword)
      return alert("Passwords don't match");
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );
      createUserProfileDocument(user);
      setNewUser(initInfo);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  return (
    <div className={styles["sign-up"]}>
      <h2 className={styles["title"]}>I do not have an account</h2>
      <span>Sign up with your email and password </span>
      <form onSubmit={handleSubmit} className={styles["sign-up-form"]}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={newUser.displayName}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={newUser.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          value={newUser.password}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={newUser.confirmPassword}
          handleChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;

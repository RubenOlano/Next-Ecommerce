import React, { useState } from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import styles from "./SignIn.module.scss";

import { auth, signInWithgoogle } from "../../firebase/firebase.util";
import { signInWithEmailAndPassword } from "firebase/auth";
import { IForm } from "../../types/types";

const initForm: IForm = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [form, setForm] = useState<IForm>(initForm);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = form;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }

    setForm({
      email: "",
      password: "",
    });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className={styles["sign-in"]}>
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          value={form.email}
          label="email"
          required
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          label="password"
          value={form.password}
          required
        />
        <div className={styles["buttons"]}>
          <Button type="submit">Sign In</Button>
          <Button type="button" isGoogleSignIn onClick={signInWithgoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

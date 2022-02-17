import React, { useState } from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import styles from "./SignIn.module.scss";

import { signInWithgoogle } from "../../firebase/firebase.util";

interface IForm {
  email: string;
  password: string;
}

const initForm: IForm = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [form, setForm] = useState<IForm>(initForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <Button isGoogleSignIn onClick={signInWithgoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

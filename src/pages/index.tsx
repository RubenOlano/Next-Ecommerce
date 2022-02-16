import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Homepage from "../components/Homepage/Homepage";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Homepage />
    </>
  );
};

export default Home;

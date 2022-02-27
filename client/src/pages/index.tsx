import type { NextPage } from "next";
import { useEffect } from "react";
import Homepage from "../components/Homepage/Homepage";
import { useDispatch } from "react-redux";
import { checkUserSession } from "../redux/user/userReducer";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);
  return <Homepage />;
};
export default Home;

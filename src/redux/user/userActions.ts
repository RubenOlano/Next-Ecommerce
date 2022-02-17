import { createAction } from "@reduxjs/toolkit";

const setCurrentUser = createAction("user/setCurrentUser", (user) => {
  return {
    payload: {
      user,
    },
  };
});

export default setCurrentUser;

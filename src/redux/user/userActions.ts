import { createAction } from "@reduxjs/toolkit";

const setCurrentUser = createAction<any>("user/setCurrentUser");

export default setCurrentUser;

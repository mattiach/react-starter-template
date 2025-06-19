/* 
  This file is just an example of a user slice for a Redux store. Feel free to delete it if you don't need it.
*/

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialUserProfile = {
  name: '',
  lastname: '',
  email: '',
  phone: '',
  address: '',
  zip: '',
  city: '',
  country: '',
}

interface UserFormProfile {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
}

type UserState = UserFormProfile;

const getInitialUserState = (): UserState => {
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : initialUserProfile;
  }
  return initialUserProfile;
};

const initialState: UserState = getInitialUserState();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo(state, action: PayloadAction<Partial<UserFormProfile>>) {
      const updatedState = { ...state, ...action.payload };
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(updatedState));
      }
      return updatedState;
    },
  },
});

export const { updateUserInfo } = userSlice.actions;
export default userSlice.reducer;
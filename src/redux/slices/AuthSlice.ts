import { createSlice } from "@reduxjs/toolkit";

export interface ICompanies {
  id: string;
  name: string;
  scopes: string[];
}
export interface AuthProps {
  access_token: string | null;
  refresh_token: string | null;
}
const initialState: AuthProps = {
  access_token: null,
  refresh_token: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    updateToken: (state, action) => {
      state.access_token = action?.payload?.access_token ?? null;
      state.refresh_token = action?.payload?.refresh_token ?? null;
    },
    login: (state, action) => {
      state.access_token = action.payload;
    },
    logout: (state) => {
      state.access_token = null;
      state.refresh_token = null;
    },
  },
});
export default AuthSlice;

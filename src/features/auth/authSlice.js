import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isAuthenticated: false,
  user: {
    email: null,
    verifiedEmail: false,
  },
  accessToken: null,
  refreshToken: null,
  tempToken: null,
  requestRegister: false,
  requestPasswordReset: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.accessToken = action.payload["access"];
      state.refreshToken = action.payload["refresh"];
      state.user = action.payload["user"];
      state.isAuthenticated = true;
      state.requestRegister = false;
      state.requestPasswordReset = false;
    },
    setLogout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
      state.accessToken = null;
      state.refreshToken = null;
      state.requestRegister = false;
      state.requestPasswordReset = false;
    },
    setEmail: (state, action) => {
      state.user.email = action.payload;
    },
    setVerifiedEmail: (state, action) => {
      state.user.verifiedEmail = action.payload;
    },
    setFirstName: (state, action) => {
      state.user.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.user.lastName = action.payload;
    },
    setRegistering: (state, action) => {
      state.requestRegister = action.payload;
    },
    setPassResetting: (state, action) => {
      state.requestPasswordReset = action.payload;
    },
    setTempToken: (state, action) => {
      state.tempToken = action.payload["temp_token"];
    }
  },
});

export default authSlice.reducer;
export const {
               setLogin,
               setLogout,
               setEmail,
               setVerifiedEmail,
               setFirstName,
               setLastName,
               setRegistering,
               setPassResetting,
               setTempToken
             } = authSlice.actions;
export const getIsAuthenticated = state => state.auth.isAuthenticated;
export const getUser = state => state.auth.user;
export const getAccessToken = state => state.auth.accessToken;
export const getRefreshToken = state => state.auth.refreshToken;
export const getUserEmail = state => state.auth.user.email;
export const getUserFirstName = state => state.auth.user.firstName;
export const getUserLastName = state => state.auth.user.lastName;
export const getUserFullName = state => state.auth.user.fullName;
export const getVerifiedUserEmail = state => state.auth.user.verifiedEmail;
export const getIsRegistering = state => state.auth.requestRegister;
export const getIsPassResetting = state => state.auth.requestPasswordReset;
export const getTempToken = state => state.auth.tempToken;
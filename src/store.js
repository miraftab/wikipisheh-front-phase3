import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";

import uiReducer from "./ui/uiSlice.js";
import authReducer from "./features/auth/authSlice.js";

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
};

// combine auth and root reducers
const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
});

// Wrap the auth reducer with persistReducer to enable persistence
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Set up the persistor
export const persistor = persistStore(store);
export default store;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showHeaderSearch: true,
  showAdvancedSearch: false,
  showAdvancedSearchIcon: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setShowHeaderSearch: (state, action) => {
      state.showHeaderSearch = action.payload;
    },
    setShowAdvancedSearch: (state, action) => {
      state.AdvancedSearch = action.payload;
    },
    setShowAdvancedSearchIcon: (state, action) => {
      state.AdvancedSearchIcon = action.payload;
    },
  },
});

export default uiSlice.reducer;
export const {setShowHeaderSearch, setShowAdvancedSearch, setShowAdvancedSearchIcon} = uiSlice.actions;
export const getShowHeaderSearch = state => state.ui.showHeaderSearch;
export const getShowAdvancedSearch = state => state.ui.showAdvancedSearch;
export const getShowAdvancedSearchIcon = state => state.ui.showAdvancedSearchIcon;
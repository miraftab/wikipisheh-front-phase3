import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedWord: "",
  searchedAlphabet: "all",
  searchedDefinition: "",
  searchedField: "all",
  searchedCategory: "all",
  searchedPrefix: "",
  searchedInfix: "",
  searchedSuffix: "",
  suggestedWord: ""
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    resetSearchedWord: () => initialState,
    updateSearchedWord: (state, action) => {
      state.searchedWord = action.payload;
    },
    updateSearchedAlphabet: (state, action) => {
      state.searchedAlphabet = action.payload;
    },
    updateSearchedDefinition: (state, action) => {
      state.searchedDefinition = action.payload;
    },
    updateSearchedField: (state, action) => {
      state.searchedField = action.payload;
    },
    updateSearchedCategory: (state, action) => {
      state.searchedCategory = action.payload;
    },
    updateSearchedPrefix: (state, action) => {
      state.searchedPrefix = action.payload;
    },
    updateSearchedInfix: (state, action) => {
      state.searchedInfix = action.payload;
    },
    updateSearchedSuffix: (state, action) => {
      state.searchedSuffix = action.payload;
    },
    updateSuggestedWord: (state, action) => {
      state.suggestedWord = action.payload;
    },
  },
});

export default wordsSlice.reducer;
export const {
               resetSearchedWord,
               updateSearchedWord,
               updateSearchedAlphabet,
               updateSearchedDefinition,
               updateSearchedField,
               updateSearchedCategory,
               updateSearchedPrefix,
               updateSearchedInfix,
               updateSearchedSuffix,
               updateSuggestedWord
             } = wordsSlice.actions;
export const getSearchedWord = state => state.words.searchedWord;
export const getSearchedAlphabet = state => state.words.searchedAlphabet;
export const getSearchedDefinition = state => state.words.searchedDefinition;
export const getSearchedField = state => state.words.searchedField;
export const getSearchedCategory = state => state.words.searchedCategory;
export const getSearchedPrefix = state => state.words.searchedPrefix;
export const getSearchedInfix = state => state.words.searchedInfix;
export const getSearchedSuffix = state => state.words.searchedSuffix;
export const getSuggestedWord = state => state.words.suggestedWord;
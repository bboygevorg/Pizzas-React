import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },

    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },

    setSort(state, action) {
      state.sort = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },

    setFilters(state, action) {
      state.pageCount = Number(action.payload.pageCount);
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;
    },
  },
});

export const selectFilter = (state) => state.filter;
export const selectSort = (state) => state.filter.sort;
export const selectPage = (state) => state.filter.pageCount;
export const selectCategoryId = (state) => state.filter.categoryId;
export const selectSearch = (state) => state.filter.searchValue;

export const { setCategoryId, setSort, setPageCount, setFilters, setSearchValue } =
  filterSlice.actions;
export default filterSlice.reducer;

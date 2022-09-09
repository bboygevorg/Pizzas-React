import { RootState } from '../../store';

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;
export const selectPage = (state: RootState) => state.filter.pageCount;
export const selectCategoryId = (state: RootState) => state.filter.categoryId;
export const selectSearch = (state: RootState) => state.filter.searchValue;

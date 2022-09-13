import { Sort } from './slice';

export enum SortPropertyEnam {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
  NAME_DESC = 'name',
  NAME_ASC = '-name',
}

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  pageCount: number;
  sort: Sort;
}

type FetchPizzaArc = Record<string, string>;

export type Pizza = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export type SeacrhPizzaParams = {
  category: string;
  sortBy: string;
  order: string;
  search: string;
  page: string;
  pageCount: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSlice {
  items: Pizza[];
  status: Status;
}

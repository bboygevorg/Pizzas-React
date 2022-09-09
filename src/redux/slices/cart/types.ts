export type CartItem = {
  id: string;
  name: string;
  types: string;
  sizes: number;
  price: number;
  count: number;
  imageUrl: string;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

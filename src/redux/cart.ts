import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'types/Products';

interface ExtendedProduct extends Product {
  quantity: number;
}

interface CartState {
  products: ExtendedProduct[];
  quantity: number;
  total: number;
}

interface AddProductPayload {
  product: ExtendedProduct;
  price: number;
}

const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<AddProductPayload>) => {
      const { product, price } = action.payload;
      state.quantity += 1;
      if (product) state.products.push(product);
      if (product) state.total += price;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;

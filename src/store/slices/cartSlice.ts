import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CartItem} from 'src/types/model/cart';
import {Product} from 'src/types/model/product';

const initialState: {products: Record<number, CartItem>; totalPrice: number} = {
  products: {},
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const {id} = action.payload;
      if (id in state.products) {
        state.products[id].count++;
      } else {
        state.products[id] = {product: action.payload, count: 1};
      }
      state.totalPrice += action.payload.price;
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const {product} = state.products[action.payload];
      if (product) {
        state.totalPrice -= product.price;
        delete state.products[action.payload];
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const {payload} = action;
      const productCart = state.products[payload];
      if (!productCart) {
        return;
      }

      productCart.count--;
      state.totalPrice -= productCart.product.price;
      if (productCart.count <= 0) {
        delete state.products[payload];
      }
    },
  },
});

export const CartActions = cartSlice.actions;

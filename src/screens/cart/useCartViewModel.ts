import {useCallback, useMemo} from 'react';
import {CartActions, useAppDispatch, useAppSelector} from 'src/store';
import {Product} from 'src/types/model/product';

export const useCartViewModel = () => {
  const dispatch = useAppDispatch();
  const {products: cart, totalPrice} = useAppSelector(state => state.cart);
  const cartProducts = useMemo(() => {
    return Object.values(cart);
  }, [cart]);

  const onIncreaseQuantity = useCallback((product: Product) => {
    dispatch(CartActions.addProduct(product));
  }, []);
  const onDecreaseQuantity = useCallback((product: Product) => {
    dispatch(CartActions.decrementQuantity(product.id));
  }, []);

  return {
    cartProducts,
    totalPrice,
    onIncreaseQuantity,
    onDecreaseQuantity,
  };
};

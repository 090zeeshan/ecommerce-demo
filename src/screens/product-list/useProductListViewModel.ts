import {useCallback} from 'react';
import {useGetProductListQuery} from 'src/api';
import {CartActions, useAppDispatch, useAppSelector} from 'src/store';
import {Product} from 'src/types/model/product';

export const useProductListViewModel = () => {
  const {data, refetch, isFetching} = useGetProductListQuery();
  const cart = useAppSelector(state => state.cart.products);
  const dispatch = useAppDispatch();

  const onAddToCartPress = useCallback((product: Product) => {
    dispatch(CartActions.addProduct(product));
  }, []);

  const onRemoveFromCartPress = useCallback((product: Product) => {
    dispatch(CartActions.removeProduct(product.id));
  }, []);

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  const isAddedToCart = useCallback(
    (id: number) => {
      return !!cart[id];
    },
    [cart],
  );

  return {
    products: data,
    isFetchingProducts: isFetching,
    onAddToCartPress,
    onRemoveFromCartPress,
    onRefresh,
    isAddedToCart,
  };
};

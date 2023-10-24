import 'react-native';
import {useCartViewModel} from '../useCartViewModel';
import {useProductListViewModel} from 'src/screens/product-list/useProductListViewModel';
import {act, renderHook} from '@testing-library/react-native';
import {getWrapper} from 'src/utils/test-utils';
import {configureAppStore} from 'src/store';
import {AnyAction, Store} from '@reduxjs/toolkit';
import {RootState} from 'src/types/store';

const testProduct1 = {
  id: 1,
  colour: 'Black',
  name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
  price: 10,
  img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
};
const testProduct2 = {
  id: 2,
  colour: 'Stone',
  name: 'Stone Ribbed Strappy Cut Out Detail Bodycon Dress',
  price: 4,
  img: 'https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024',
};

describe('useCartViewModel', () => {
  let store: Store<RootState, AnyAction>;
  beforeEach(() => {
    store = configureAppStore();
    const {result, unmount} = renderHook(() => useProductListViewModel(), {
      wrapper: getWrapper(store),
    });
    act(() => {
      result.current.onAddToCartPress(testProduct1);
      result.current.onAddToCartPress(testProduct2);
    });
    unmount();
  });

  it('should return correct cart products', () => {
    const {result, unmount} = renderHook(() => useCartViewModel(), {
      wrapper: getWrapper(store),
    });

    expect(result.current.cartProducts).toMatchObject([
      {product: testProduct1, count: 1},
      {product: testProduct2, count: 1},
    ]);

    unmount();
  });
  it('should return return correct totalPrice', () => {
    const {result, unmount} = renderHook(() => useCartViewModel(), {
      wrapper: getWrapper(store),
    });
    expect(result.current.totalPrice).toBe(14);
    unmount();
  });

  describe('when onIncreaseQuantity is called', () => {
    it('should increase the product count by one', () => {
      const {result, unmount} = renderHook(() => useCartViewModel(), {
        wrapper: getWrapper(store),
      });
      act(() => {
        result.current.onIncreaseQuantity(testProduct1);
      });
      expect(result.current.cartProducts[0].count).toBe(2);

      unmount();
    });
    it('should update the totalPrice', () => {
      const {result, unmount} = renderHook(() => useCartViewModel(), {
        wrapper: getWrapper(store),
      });
      act(() => {
        result.current.onIncreaseQuantity(testProduct1);
      });
      expect(result.current.totalPrice).toBe(24);
      unmount();
    });
  });

  describe('when onDecreaseQuantity is called', () => {
    it('should decrease the product count by one', () => {
      const {result, unmount} = renderHook(() => useCartViewModel(), {
        wrapper: getWrapper(store),
      });
      act(() => {
        result.current.onIncreaseQuantity(testProduct1);
        result.current.onDecreaseQuantity(testProduct1);
      });
      expect(result.current.cartProducts[0].count).toBe(1);

      unmount();
    });
    it('should update the totalPrice', () => {
      const {result, unmount} = renderHook(() => useCartViewModel(), {
        wrapper: getWrapper(store),
      });
      act(() => {
        result.current.onDecreaseQuantity(testProduct1);
      });
      expect(result.current.totalPrice).toBe(4);
      unmount();
    });
    it('should remove the single quantity item from cart', () => {
      const {result, unmount} = renderHook(() => useCartViewModel(), {
        wrapper: getWrapper(store),
      });
      act(() => {
        result.current.onDecreaseQuantity(testProduct1);
      });
      expect(result.current.cartProducts).toHaveLength(1);
      unmount();
    });
  });
});

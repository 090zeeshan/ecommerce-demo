import 'react-native';
import {useProductListViewModel} from '../useProductListViewModel';
import {act, renderHook, waitFor} from '@testing-library/react-native';
import {getWrapper} from 'src/utils/test-utils';

const testProduct = {
  id: 1,
  colour: 'Black',
  name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
  price: 10,
  img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
};

describe('useProductListViewModel', () => {
  it('should start fetching products', () => {
    const {result, unmount} = renderHook(() => useProductListViewModel(), {
      wrapper: getWrapper(),
    });

    expect(result.current.isFetchingProducts).toBe(true);
    unmount();
  });
  it('should return products on api success', async () => {
    const {result, unmount} = renderHook(() => useProductListViewModel(), {
      wrapper: getWrapper(),
    });
    await waitFor(() => {
      expect(result.current.isFetchingProducts).toBe(false);
    });
    expect(result.current.products).toHaveLength(4);
    unmount();
  });

  describe('when onRefresh is called', () => {
    it('should starting refetching products', async () => {
      const {result, unmount} = renderHook(() => useProductListViewModel(), {
        wrapper: getWrapper(),
      });
      await waitFor(() => {
        expect(result.current.isFetchingProducts).toBe(false);
      });

      act(() => {
        result.current.onRefresh();
      });
      await waitFor(() => {
        expect(result.current.isFetchingProducts).toBe(true);
      });
      unmount();
    });
    it('should return products on api success', async () => {
      const {result, unmount} = renderHook(() => useProductListViewModel(), {
        wrapper: getWrapper(),
      });
      await waitFor(() => {
        expect(result.current.isFetchingProducts).toBe(false);
      });

      act(() => {
        result.current.onRefresh();
      });
      await waitFor(() => {
        expect(result.current.isFetchingProducts).toBe(true);
      });
      expect(result.current.products).toHaveLength(4);
      unmount();
    });
  });

  describe('when onAddToCartPress is called', () => {
    it('should add product to cart', async () => {
      const {result, unmount} = renderHook(() => useProductListViewModel(), {
        wrapper: getWrapper(),
      });
      act(() => {
        result.current.onAddToCartPress(testProduct);
      });

      expect(result.current.isAddedToCart(testProduct.id)).toBe(true);
      unmount();
    });
  });

  describe('when onRemoveFromCartPress is called', () => {
    it('should remove product from cart', async () => {
      const {result, unmount} = renderHook(() => useProductListViewModel(), {
        wrapper: getWrapper(),
      });
      act(() => {
        result.current.onAddToCartPress(testProduct);
      });
      expect(result.current.isAddedToCart(testProduct.id)).toBe(true);
      act(() => {
        result.current.onRemoveFromCartPress(testProduct);
      });

      expect(result.current.isAddedToCart(testProduct.id)).toBe(false);
      unmount();
    });
  });

  describe('isAddedToCart', () => {
    describe('when cart does not have the product', () => {
      it('should return false', async () => {
        const {result, unmount} = renderHook(() => useProductListViewModel(), {
          wrapper: getWrapper(),
        });
        expect(result.current.isAddedToCart(testProduct.id)).toBe(false);
        unmount();
      });
    });
  });
});

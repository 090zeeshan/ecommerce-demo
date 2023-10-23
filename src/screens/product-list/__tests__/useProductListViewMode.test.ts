import 'react-native';
import {renderHook} from '@testing-library/react-native';
import {useProductListViewModel} from '../useProductListViewModel';
import {TestWrapper} from 'src/components';

describe('useProductListViewModel', () => {
  it('should return no data', () => {
    const {result} = renderHook(() => useProductListViewModel(), {
      wrapper: TestWrapper,
    });
    // console.log('result', result.current.isFetchingProducts);
  });
});

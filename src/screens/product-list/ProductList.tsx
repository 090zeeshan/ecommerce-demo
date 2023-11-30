import React, {useCallback} from 'react';
import {FlatList} from 'react-native';

import {NavRoute, RootStackScreenProps} from 'src/types/navigation';
import {useProductListViewModel} from './useProductListViewModel';
import {ProductListItem} from './components/product-list-item/ProductListItem';

import {Screen, Separator} from 'src/components';
import {Product} from 'src/types/model/product';

export const ProductList: React.FC<
  RootStackScreenProps<NavRoute.ProductList>
> = () => {
  const vm = useProductListViewModel();

  const renderProductItem = useCallback(
    ({item}: {item: Product}) => (
      <ProductListItem
        product={item}
        addToCart={!vm.isAddedToCart(item.id)}
        onAddToCartPress={vm.onAddToCartPress}
        onRemoveFromCartPress={vm.onRemoveFromCartPress}
      />
    ),
    [vm.isAddedToCart, vm.onAddToCartPress, vm.onRemoveFromCartPress],
  );

  return (
    <Screen>
      <FlatList
        data={vm.products}
        refreshing={vm.isFetchingProducts}
        onRefresh={vm.onRefresh}
        ItemSeparatorComponent={Separator}
        renderItem={renderProductItem}
      />
    </Screen>
  );
};

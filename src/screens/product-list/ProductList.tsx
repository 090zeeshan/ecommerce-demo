import React from 'react';
import {FlatList} from 'react-native';

import {NavRoute, RootStackScreenProps} from 'src/types/navigation';
import {useProductListViewModel} from './useProductListViewModel';
import {ProductListItem} from './components/product-list-item/ProductListItem';

import {Screen, Separator} from 'src/components';

export const ProductList: React.FC<
  RootStackScreenProps<NavRoute.ProductList>
> = () => {
  const vm = useProductListViewModel();
  return (
    <Screen>
      <FlatList
        data={vm.products}
        refreshing={vm.isFetchingProducts}
        onRefresh={vm.onRefresh}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <ProductListItem
            product={item}
            addToCart={!(item.id in vm.cart)}
            onAddToCartPress={vm.onAddToCartPress}
            onRemoveFromCartPress={vm.onRemoveFromCartPress}
          />
        )}
      />
    </Screen>
  );
};

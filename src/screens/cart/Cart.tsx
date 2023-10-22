import React, {useMemo} from 'react';
import {Button, FlatList} from 'react-native';
import {Screen, Separator} from 'src/components';
import {NavRoute, RootStackScreenProps} from 'src/types/navigation';
import {CartActions, useAppDispatch, useAppSelector} from 'src/store';
import {CartListItem} from './components/cart-list-item/CartListItem';
import {Product} from 'src/types/model/product';
import {useCartViewModel} from './useCartViewModel';

export const Cart: React.FC<RootStackScreenProps<NavRoute.Cart>> = () => {
  const vm = useCartViewModel();
  return (
    <Screen>
      <FlatList
        data={vm.cartProducts}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <CartListItem
            item={item}
            onIncreaseQuantity={vm.onIncreaseQuantity}
            onDecreaseQuantity={vm.onDecreaseQuantity}
          />
        )}
      />
      {!!vm.cartProducts?.length && (
        <Button title={`Checkout ($${vm.totalPrice.toFixed(2)})`} />
      )}
    </Screen>
  );
};

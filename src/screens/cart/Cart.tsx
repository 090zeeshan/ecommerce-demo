import React, {useCallback} from 'react';
import {Button, FlatList} from 'react-native';
import {Screen, Separator} from 'src/components';
import {NavRoute, RootStackScreenProps} from 'src/types/navigation';
import {CartListItem} from './components/cart-list-item/CartListItem';
import {useCartViewModel} from './useCartViewModel';
import {CartItem} from 'src/types/model/cart';

export const Cart: React.FC<RootStackScreenProps<NavRoute.Cart>> = () => {
  const vm = useCartViewModel();

  const renderCartItem = useCallback(
    ({item}: {item: CartItem}) => (
      <CartListItem
        item={item}
        onIncreaseQuantity={vm.onIncreaseQuantity}
        onDecreaseQuantity={vm.onDecreaseQuantity}
      />
    ),
    [vm.onIncreaseQuantity, vm.onDecreaseQuantity],
  );

  return (
    <Screen>
      <FlatList
        data={vm.cartProducts}
        ItemSeparatorComponent={Separator}
        renderItem={renderCartItem}
      />
      {!!vm.cartProducts?.length && (
        <Button title={`Checkout ($${vm.totalPrice.toFixed(2)})`} />
      )}
    </Screen>
  );
};

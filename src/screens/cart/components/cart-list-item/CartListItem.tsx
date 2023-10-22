import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useThemedStyle} from 'src/theme';
import {styleProvider} from './cartListItem.styles';
import {CartItem} from 'src/types/model/cart';
import {TextWidget} from 'src/components';
import {QuantitySetter} from '../quantity-setter/QuantitySetter';
import {CallbackWithParam} from 'src/types/common';
import {Product} from 'src/types/model/product';
import {isEqual} from 'lodash';

interface CartListItemProps {
  item: CartItem;
  onIncreaseQuantity: CallbackWithParam<Product>;
  onDecreaseQuantity: CallbackWithParam<Product>;
}

const _CartListItem: React.FC<CartListItemProps> = ({
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  const styles = useThemedStyle(styleProvider);
  const {count, product} = item;

  return (
    <View style={styles.container}>
      <FastImage
        source={{uri: product.img}}
        resizeMode="contain"
        style={styles.productImage}
      />
      <View style={styles.infoContainer}>
        <TextWidget type="h1">{product.name}</TextWidget>
        <TextWidget>Color: {product.colour}</TextWidget>
        <TextWidget>Price: ${product.price}</TextWidget>
        <View style={styles.quantityContainer}>
          <QuantitySetter
            quantity={count}
            onIncrement={() => onIncreaseQuantity(product)}
            onDecrement={() => onDecreaseQuantity(product)}
          />
        </View>
      </View>
    </View>
  );
};

export const CartListItem = React.memo(_CartListItem, isEqual);

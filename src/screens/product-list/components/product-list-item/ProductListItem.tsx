import {isEqual} from 'lodash';
import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TextWidget} from 'src/components';
import {useThemedStyle} from 'src/theme';
import {Product} from 'src/types/model/product';
import {styleProvider} from './productListItem.styles';
import {CallbackWithParam} from 'src/types/common';
import {CartToggleButton} from 'src/components/cart-toggle-button/CartToggleButton';

interface ProductListItemProps {
  product: Product;
  addToCart: boolean;
  onAddToCartPress: CallbackWithParam<Product>;
  onRemoveFromCartPress: CallbackWithParam<Product>;
}

const _ProductListItem: React.FC<ProductListItemProps> = ({
  product,
  addToCart,
  onAddToCartPress,
  onRemoveFromCartPress,
}) => {
  const styles = useThemedStyle(styleProvider);

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
        <View style={styles.cartBtnCotnainer}>
          <CartToggleButton
            addToCart={addToCart}
            onAddToCartPress={() => onAddToCartPress(product)}
            onRemoveFromCartPress={() => onRemoveFromCartPress(product)}
          />
        </View>
      </View>
    </View>
  );
};

export const ProductListItem = React.memo(_ProductListItem, isEqual);

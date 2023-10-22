import React from 'react';
import {SimpleCallback} from 'src/types/common';
import {TextButton} from '../text-button/TextButton';

interface CartToggleButtonProps {
  addToCart: boolean;
  onAddToCartPress: SimpleCallback;
  onRemoveFromCartPress: SimpleCallback;
}

export const CartToggleButton: React.FC<CartToggleButtonProps> = ({
  addToCart,
  onAddToCartPress,
  onRemoveFromCartPress,
}) => {
  const onPress = () => {
    addToCart ? onAddToCartPress() : onRemoveFromCartPress();
  };
  return (
    <TextButton
      title={addToCart ? 'Add To Cart' : 'Remove From Cart'}
      onPress={onPress}
    />
  );
};

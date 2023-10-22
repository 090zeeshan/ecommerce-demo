import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TextWidget} from 'src/components';
import {ss, useTheme, useThemedStyle} from 'src/theme';
import {SimpleCallback} from 'src/types/common';
import Icon from 'react-native-vector-icons/Feather';
import {styleProvider} from './quantitySetter.styles';

interface QuantitySetterProps {
  quantity: number;
  onIncrement: SimpleCallback;
  onDecrement: SimpleCallback;
}

export const QuantitySetter: React.FC<QuantitySetterProps> = ({
  quantity,
  onDecrement,
  onIncrement,
}) => {
  const theme = useTheme();
  const styles = useThemedStyle(styleProvider);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDecrement}>
        <Icon name="minus" size={24} color={theme.color.accent} />
      </TouchableOpacity>
      <TextWidget type="h2" style={styles.quantity}>
        {quantity}
      </TextWidget>
      <TouchableOpacity onPress={onIncrement}>
        <Icon name="plus" size={24} color={theme.color.accent} />
      </TouchableOpacity>
    </View>
  );
};

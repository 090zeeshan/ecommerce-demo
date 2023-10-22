import React from 'react';
import {View} from 'react-native';
import {useThemedStyle} from 'src/theme';
import {styleProvider} from './separator.styles';

interface SeparatorProps {}

export const Separator: React.FC<SeparatorProps> = ({}) => {
  const styles = useThemedStyle(styleProvider);
  return <View style={styles.separator} />;
};

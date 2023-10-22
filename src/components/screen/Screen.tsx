import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {useThemedStyle} from 'src/theme';
import {styleProvider} from './screen.styles';

interface ScreenProps {}

/**
 * It should be the used as the root for all the screen components
 * It'll contain common styles applicable to all the screens
 */
export const Screen: React.FC<PropsWithChildren<ScreenProps>> = ({
  children,
}) => {
  const styles = useThemedStyle(styleProvider);
  return <View style={styles.screen}>{children}</View>;
};

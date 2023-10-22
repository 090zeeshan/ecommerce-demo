import {StyleSheet} from 'react-native';
import {ss} from 'src/theme';
import {Theme} from 'src/types/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.color.background,
      paddingHorizontal: theme.space.x4Sm,
    },
  });
};

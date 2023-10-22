import {StyleSheet} from 'react-native';
import {ss} from 'src/theme';
import {Theme} from 'src/types/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderWidth: ss(1),
      alignItems: 'center',
      borderColor: theme.color.secondary,
    },
    quantity: {
      padding: theme.space.x3Sm,
      marginHorizontal: theme.space.md,
    },
  });
};

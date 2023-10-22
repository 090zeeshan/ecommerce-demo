import {StyleSheet} from 'react-native';
import {ss} from 'src/theme';
import {Theme} from 'src/types/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    separator: {
      width: '80%',
      height: ss(1),
      alignSelf: 'center',
      marginVertical: ss(theme.space.x4Sm),
      backgroundColor: theme.color.secondary,
    },
  });
};

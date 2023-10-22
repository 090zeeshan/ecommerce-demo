import {StyleSheet} from 'react-native';
import {ss} from 'src/theme';
import {Theme} from 'src/types/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    container: {flexDirection: 'row'},
    infoContainer: {flex: 1, marginStart: theme.space.x4Sm},
    productImage: {height: ss(100), width: ss(70)},
    cartBtnCotnainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

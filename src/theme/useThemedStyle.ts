import {useTheme} from './useTheme';
import {StyleSheet} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Theme} from 'src/types/theme';
import {useDeepMemo} from 'src/utils/useDeepMemo';

export const useThemedStyle = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(
  styleProvider: (theme: Theme, insets: EdgeInsets) => T,
) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return useDeepMemo(() => {
    return styleProvider(theme, insets);
  }, [theme, insets]);
};

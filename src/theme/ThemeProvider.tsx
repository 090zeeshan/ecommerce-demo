import React, {PropsWithChildren, createContext} from 'react';
import {theme} from './theme';
import {useColorScheme} from 'react-native';
import {themeConfiguration} from './themeConfiguration';
import {merge} from 'lodash';

export const themeContext = createContext(theme);

export const ThemeProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {
  const colorScheme = useColorScheme();
  const colorBasedTheme = colorScheme ? themeConfiguration[colorScheme] : {};
  const combinedTheme = merge({}, theme, colorBasedTheme);
  return (
    <themeContext.Provider value={combinedTheme}>
      {children}
    </themeContext.Provider>
  );
};

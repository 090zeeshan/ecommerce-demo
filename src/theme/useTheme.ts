import {useContext} from 'react';
import {themeContext} from './ThemeProvider';

export const useTheme = () => {
  return useContext(themeContext);
};

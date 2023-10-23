import {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {configureAppStore} from 'src/store/store';

export const getWrapper =
  (store = configureAppStore()) =>
  ({children}: {children: ReactNode}) =>
    Provider({store, children});

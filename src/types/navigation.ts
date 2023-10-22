import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum NavRoute {
  ProductList = 'ProductList',
  Cart = 'Cart',
}

export type RootStackParamList = {
  [NavRoute.ProductList]: undefined;
  [NavRoute.Cart]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

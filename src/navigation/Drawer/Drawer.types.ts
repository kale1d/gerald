import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';

export enum DRAWER_ITEMS {
  HOME = 'Home',
  NOTIFICATIONS = 'Notifications',
}

export type DrawerItemsParamList = {
  [DRAWER_ITEMS.HOME]: undefined;
  [DRAWER_ITEMS.NOTIFICATIONS]: undefined;
};

export type DrawerNavigationProps<
  RouteName extends keyof DrawerItemsParamList,
> = {
  navigation: DrawerNavigationProp<DrawerItemsParamList>;
  route: RouteProp<DrawerItemsParamList, RouteName>;
};

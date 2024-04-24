import {DrawerNavigationProp} from '@react-navigation/drawer';

export enum DRAWER_ITEMS {
  HOME = 'Home',
  NOTIFICATIONS = 'Notifications',
}

export type DrawerItemsParamList = {
  [DRAWER_ITEMS.HOME]: undefined;
  [DRAWER_ITEMS.NOTIFICATIONS]: undefined;
};

export type DrawerNavigationProps = DrawerNavigationProp<
  DrawerItemsParamList,
  DRAWER_ITEMS.HOME
>;

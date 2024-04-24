import type {CompositeScreenProps} from '@react-navigation/native';
import {CompositeNavProps} from './BottomTabNavigator/BottomTabNavigator.types';

import {
  DrawerItemsParamList,
  DrawerNavigationProps,
} from './Drawer/Drawer.types';

export type AppNavigationProp = CompositeScreenProps<
  DrawerNavigationProps<keyof DrawerItemsParamList>,
  CompositeNavProps
>;

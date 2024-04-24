import type {CompositeNavigationProp} from '@react-navigation/native';
import {BottomNavigationProps} from './BottomTabNavigator/BottomTabNavigator.types';

import {DrawerNavigationProps} from './Drawer/Drawer.types';
import {HomeStackNavigationProps} from './HomeStack/HomeStack.types';

export type AppNavigationProp = CompositeNavigationProp<
  DrawerNavigationProps,
  BottomNavigationProps & HomeStackNavigationProps
>;

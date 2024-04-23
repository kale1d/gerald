import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum BOTTOM_TABS {
  HOME = 'home',
  CONTACT = 'contact',
}

export type BottomTabRoutes = {
  [BOTTOM_TABS.HOME]: undefined;
  [BOTTOM_TABS.CONTACT]: undefined;
};

export type BottomTabNavigationType<RouteName extends keyof BottomTabRoutes> =
  StackNavigationProp<BottomTabRoutes, RouteName>;

export type BottomTabNavigationProps<RouteName extends keyof BottomTabRoutes> =
  {
    navigation: BottomTabNavigationProp<BottomTabRoutes, RouteName>;
    route: RouteProp<BottomTabRoutes, RouteName>;
  };

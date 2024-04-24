import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  HomeStackParamList,
  HomeStackScreenProps,
} from '../HomeStack/HomeStack.types';

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

export type BottomTabScreenProps<RouteName extends keyof BottomTabRoutes> = {
  navigation: BottomTabNavigationProp<BottomTabRoutes, RouteName>;
  route: RouteProp<BottomTabRoutes, RouteName>;
};

export type BottomTabParamList = BottomTabRoutes | HomeStackParamList;
export type CompositeNavProps = CompositeScreenProps<
  BottomTabScreenProps<keyof BottomTabRoutes>,
  HomeStackScreenProps<keyof HomeStackParamList>
>;

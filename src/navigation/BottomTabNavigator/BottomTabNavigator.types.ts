import {HomeStackParamList} from '../HomeStack/HomeStack.types';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export enum BOTTOM_TABS {
  HOME = 'home',
  CONTACT = 'contact',
}

export type BottomTabRoutes = {
  [BOTTOM_TABS.HOME]: undefined;
  [BOTTOM_TABS.CONTACT]: undefined;
};

export type BottomTabParamList = BottomTabRoutes | HomeStackParamList;

export type BottomNavigationProps = BottomTabNavigationProp<BottomTabRoutes>;

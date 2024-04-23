import {StackNavigationProp} from '@react-navigation/stack';

export enum STACK_SCREENS {
  HOME = 'home',
  HOME2 = 'home2',
}

export type HomeStackParamList = {
  [STACK_SCREENS.HOME]: undefined;
  [STACK_SCREENS.HOME2]: undefined;
};

export type HomeStackNavigationProp<Route extends keyof HomeStackParamList> =
  StackNavigationProp<HomeStackParamList, Route>;

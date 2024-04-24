import {StackNavigationProp} from '@react-navigation/stack';

export enum STACK_SCREENS {
  SCREEN1 = 'SCREEN1',
  SCREEN2 = 'SCREEN2',
}

export type HomeStackParamList = {
  [STACK_SCREENS.SCREEN1]: undefined;
  [STACK_SCREENS.SCREEN2]: undefined;
};

export type HomeStackNavigationProps = StackNavigationProp<HomeStackParamList>;

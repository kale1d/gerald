import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeStackParamList, STACK_SCREENS} from './HomeStack.types';
import {HomeScreen} from '../../screens/Home';
import {SecondHomeScreen} from '../../screens/SecondHome';

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name={STACK_SCREENS.SCREEN1} component={HomeScreen} />
      <Stack.Screen name={STACK_SCREENS.SCREEN2} component={SecondHomeScreen} />
    </Stack.Navigator>
  );
};

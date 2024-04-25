import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BOTTOM_TABS, BottomTabRoutes} from './BottomTabNavigator.types';
import {CustomTab} from './components/CustomTab';
import {HomeStack} from '../HomeStack';
import {ContactScreen} from '../../screens/Contact';
import {DrawerSceneWrapper} from '../Drawer/components/DrawerSceneWrapper';

const BottomTab = createBottomTabNavigator<BottomTabRoutes>();

const tabs = [{name: 'Home'}, {name: 'Contact'}];

export const BottomTabNavigation: React.FC = () => {
  const customTab = (props: BottomTabBarProps) => (
    <CustomTab {...{tabs, ...props}} />
  );
  return (
    <DrawerSceneWrapper>
      <BottomTab.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => customTab(props)}>
        <BottomTab.Screen name={BOTTOM_TABS.HOME} component={HomeStack} />
        <BottomTab.Screen
          name={BOTTOM_TABS.CONTACT}
          component={ContactScreen}
        />
      </BottomTab.Navigator>
    </DrawerSceneWrapper>
  );
};

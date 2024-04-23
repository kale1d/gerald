import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BOTTOM_TABS, BottomTabRoutes} from './BottomTabNavigator.types';
import {CustomTab} from './components/CustomTab';
import {DrawerSceneWrapper} from '../Drawer/components/DrawerSceneWrapper';
import {View, Button, Pressable, StyleSheet, Text} from 'react-native';
import Hamburger from './../../assets/hamburger.svg';
import {HomeStack} from '../HomeStack';

const BottomTab = createBottomTabNavigator<BottomTabRoutes>();

const tabs = [{name: 'Home'}, {name: 'Contact'}];

const Icon = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Hamburger />
    </Pressable>
  );
};

function NotificationsScreen({navigation}) {
  return (
    <DrawerSceneWrapper>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <Text>Gato</Text>
        {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      </View>
    </DrawerSceneWrapper>
  );
}

export const BottomTabNavigation = () => {
  const customTab = (props: BottomTabBarProps) => (
    <CustomTab {...{tabs, ...props}} />
  );
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => customTab(props)}>
      <BottomTab.Screen name={BOTTOM_TABS.HOME} component={HomeStack} />
      <BottomTab.Screen
        name={BOTTOM_TABS.CONTACT}
        component={NotificationsScreen}
      />
    </BottomTab.Navigator>
  );
};

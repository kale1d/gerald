import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BOTTOM_TABS, BottomTabRoutes} from './BottomTabNavigator.types';
import {CustomTab} from './components/CustomTab';
import {DrawerSceneWrapper} from '../Drawer/components/DrawerSceneWrapper';
import {View, Button, Pressable, StyleSheet} from 'react-native';
import Hamburger from './../../assets/hamburger.svg';

const BottomTab = createBottomTabNavigator<BottomTabRoutes>();

const tabs = [{name: 'Home'}, {name: 'Contact'}];

const Icon = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Hamburger />
    </Pressable>
  );
};
function HomeScreen({navigation}) {
  return (
    <DrawerSceneWrapper>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <Icon onPress={() => navigation.openDrawer()} />
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    </DrawerSceneWrapper>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <DrawerSceneWrapper>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </DrawerSceneWrapper>
  );
}

export const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTab {...{tabs, ...props}} />}>
      <BottomTab.Screen name={BOTTOM_TABS.HOME} component={HomeScreen} />
      <BottomTab.Screen
        name={BOTTOM_TABS.CONTACT}
        component={NotificationsScreen}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

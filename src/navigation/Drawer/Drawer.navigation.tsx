import * as React from 'react';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {styles} from './Drawer.styles';
import {Colors} from '../../utils/colors';
import {CustomDrawerContent} from './components/CustomDrawerContent';
import {BottomTabNavigation} from '../BottomTabNavigator/BottomTab.navigation';

const Drawer = createDrawerNavigator();

export const DrawerContainer = () => {
  const customDrawer = (props: DrawerContentComponentProps) => (
    <CustomDrawerContent props={props} />
  );
  return (
    <Drawer.Navigator
      drawerContent={props => customDrawer(props)}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: styles.drawerStyle,
        sceneContainerStyle: styles.sceneContainer,
        drawerActiveBackgroundColor: Colors.AfricanViolet,
        drawerInactiveBackgroundColor: Colors.Transparent,
        drawerActiveTintColor: Colors.White,
        drawerInactiveTintColor: Colors.Melon,
        overlayColor: Colors.Transparent,
      }}>
      <Drawer.Screen name="Home" component={BottomTabNavigation} />
      <Drawer.Screen name="Notifications" component={BottomTabNavigation} />
    </Drawer.Navigator>
  );
};

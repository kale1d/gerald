import * as React from 'react';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {styles} from './Drawer.styles';
import {Colors} from '../../utils/colors';
import {CustomDrawerContent} from './components/CustomDrawerContent';
import {BottomTabNavigation} from '../BottomTabNavigator/BottomTab.navigation';
import {NotificationScreen} from '../../screens/Notification';
import {DRAWER_ITEMS, DrawerItemsParamList} from './Drawer.types';

const Drawer = createDrawerNavigator<DrawerItemsParamList>();

export const DrawerContainer: React.FC = () => {
  const customDrawer = (props: DrawerContentComponentProps) => (
    <CustomDrawerContent props={props} />
  );
  return (
    <Drawer.Navigator
      drawerContent={props => customDrawer(props)}
      initialRouteName={DRAWER_ITEMS.HOME}
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
      <Drawer.Screen name={DRAWER_ITEMS.HOME} component={BottomTabNavigation} />
      <Drawer.Screen
        name={DRAWER_ITEMS.NOTIFICATIONS}
        component={NotificationScreen}
      />
    </Drawer.Navigator>
  );
};

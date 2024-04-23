import * as React from 'react';
import {Button, Pressable, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Hamburger from './../../assets/hamburger.svg';
import {styles} from './Drawer.styles';
import {Colors} from '../../utils/colors';
import {DrawerSceneWrapper} from '../../components/DrawerSceneWrapper';
import {CustomDrawerContent} from '../../components/CustomDrawerContent';

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
          alignItems: 'center',
          justifyContent: 'center',
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
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </DrawerSceneWrapper>
  );
}

const Drawer = createDrawerNavigator();

export const DrawerContainer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent props={props} />}
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
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

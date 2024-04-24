import React from 'react';
import {DrawerSceneWrapper} from '../../navigation/Drawer/components/DrawerSceneWrapper';
import {Text, View} from 'react-native';
import {styles} from './Notification.styles';
import {Icon} from '../components/Icon';
import {AppNavigationProp} from '../../navigation/navigation.types';
import {useNavigation} from '@react-navigation/native';

export const NotificationScreen: React.FC = () => {
  const navigation = useNavigation<AppNavigationProp>();
  return (
    <View style={styles.wrapper}>
      <DrawerSceneWrapper>
        <View style={styles.container}>
          <Icon onPress={() => navigation.toggleDrawer()} />
          <Text>Notification</Text>
        </View>
      </DrawerSceneWrapper>
    </View>
  );
};

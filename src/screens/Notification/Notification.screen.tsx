import React from 'react';
import {DrawerSceneWrapper} from '../../navigation/Drawer/components/DrawerSceneWrapper';
import {Text, View} from 'react-native';
import {styles} from './Notification.styles';

export const NotificationScreen: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <DrawerSceneWrapper>
        <View style={styles.container}>
          <Text>Notification</Text>
        </View>
      </DrawerSceneWrapper>
    </View>
  );
};

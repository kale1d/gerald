import React from 'react';
import {DrawerSceneWrapper} from '../../navigation/Drawer/components/DrawerSceneWrapper';
import {Text, View} from 'react-native';
import {styles} from './Contact.styles';
import {Icon} from '../components/Icon';
import {AppNavigationProp} from '../../navigation/navigation.types';

export const ContactScreen: React.FC<AppNavigationProp> = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <DrawerSceneWrapper>
        <View style={styles.container}>
          <Icon onPress={() => navigation.toggleDrawer()} />
          <Text>Contact</Text>
        </View>
      </DrawerSceneWrapper>
    </View>
  );
};

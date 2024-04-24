import React from 'react';
import {DrawerSceneWrapper} from '../../navigation/Drawer/components/DrawerSceneWrapper';
import {Text, View} from 'react-native';
import {styles} from './Contact.styles';

export const ContactScreen: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <DrawerSceneWrapper>
        <View style={styles.container}>
          <Text>Contact</Text>
        </View>
      </DrawerSceneWrapper>
    </View>
  );
};

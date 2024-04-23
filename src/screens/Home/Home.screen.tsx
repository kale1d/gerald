import React from 'react';
import {DrawerSceneWrapper} from '../../navigation/Drawer/components/DrawerSceneWrapper';
import {Button, Text, View} from 'react-native';
import {Icon} from '../components/Icon';
import {styles} from './Home.styles';
import {STACK_SCREENS} from '../../navigation/HomeStack/HomeStack.types';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <DrawerSceneWrapper>
        <View style={styles.container}>
          <Icon onPress={() => navigation.openDrawer()} />
          <Button
            onPress={() => navigation.navigate(STACK_SCREENS.HOME2)}
            title="Go to Home 2"
          />
        </View>
      </DrawerSceneWrapper>
    </View>
  );
};

import React from 'react';
import {DrawerSceneWrapper} from '../../navigation/Drawer/components/DrawerSceneWrapper';
import {Button, View} from 'react-native';
import {Icon} from '../components/Icon';
import {styles} from './Home.styles';
import {STACK_SCREENS} from '../../navigation/HomeStack/HomeStack.types';
import {AppNavigationProp} from '../../navigation/navigation.types';

export const HomeScreen: React.FC<AppNavigationProp> = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <DrawerSceneWrapper>
        <View style={styles.container}>
          <Icon onPress={() => navigation.toggleDrawer()} />
          <Button
            onPress={() => navigation.navigate(STACK_SCREENS.HOME2)}
            title="Go to Home 2"
          />
        </View>
      </DrawerSceneWrapper>
    </View>
  );
};

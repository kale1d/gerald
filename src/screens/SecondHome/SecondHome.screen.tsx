import React from 'react';
import {DrawerSceneWrapper} from '../../navigation/Drawer/components/DrawerSceneWrapper';
import {Button, View} from 'react-native';
import {Icon} from '../components/Icon';
import {styles} from './SecondHomeScreen.styles';
import {STACK_SCREENS} from '../../navigation/HomeStack/HomeStack.types';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../../navigation/navigation.types';

export const SecondHomeScreen: React.FC = () => {
  const navigation = useNavigation<AppNavigationProp>();
  return (
    <View style={styles.wrapper}>
      <DrawerSceneWrapper>
        <View style={styles.container}>
          <Icon onPress={() => navigation.toggleDrawer()} />
          <Button
            onPress={() => navigation.navigate(STACK_SCREENS.SCREEN1)}
            title="Go to Home"
          />
        </View>
      </DrawerSceneWrapper>
    </View>
  );
};

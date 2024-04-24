import React, {useCallback} from 'react';
import {DrawerSceneWrapper} from '../../navigation/Drawer/components/DrawerSceneWrapper';
import {Button, View} from 'react-native';
import {styles} from './Home.styles';
import {STACK_SCREENS} from '../../navigation/HomeStack/HomeStack.types';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../../navigation/navigation.types';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<AppNavigationProp>();

  const goToScreen2 = useCallback(() => {
    navigation.navigate(STACK_SCREENS.SCREEN2);
  }, [navigation]);

  return (
    <View style={styles.wrapper}>
      <DrawerSceneWrapper>
        <View style={styles.container}>
          <Button onPress={goToScreen2} title="Go to Home 2" />
        </View>
      </DrawerSceneWrapper>
    </View>
  );
};

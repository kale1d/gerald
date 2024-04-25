import React, {useCallback} from 'react';
import {Button, View} from 'react-native';
import {styles} from './SecondHomeScreen.styles';
import {STACK_SCREENS} from '../../navigation/HomeStack/HomeStack.types';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../../navigation/navigation.types';

export const SecondHomeScreen: React.FC = () => {
  const navigation = useNavigation<AppNavigationProp>();

  const goToScreen = useCallback(() => {
    navigation.navigate(STACK_SCREENS.SCREEN1);
  }, [navigation]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Button onPress={goToScreen} title="Go to Home" />
      </View>
    </View>
  );
};

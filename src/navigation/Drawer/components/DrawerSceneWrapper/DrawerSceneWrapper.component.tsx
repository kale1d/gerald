import React, {useCallback} from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Dimensions, Platform, View} from 'react-native';
import {styles} from './DrawerSceneWrapper.styles';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../../../navigation.types';
import {Icon} from './components/Icon';

const {width} = Dimensions.get('screen');

export const DrawerSceneWrapper = ({children}: {children: React.ReactNode}) => {
  const navigation = useNavigation<AppNavigationProp>();
  const progress = useDrawerProgress();
  const insets = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => {
    const interpolateDegrees = interpolate(
      progress.value,
      [0, 1],
      [0, -3],
      'clamp',
    );
    const interpolateTranslateX = interpolate(
      progress.value,
      [0, 1],
      [0, Platform.OS === 'android' ? width * 0.55 : 50],
      'clamp',
    );
    const interpolateTranslateY = interpolate(
      progress.value,
      [0, 1],
      [0, 50],
      'clamp',
    );

    const interpolateBorder = interpolate(
      progress.value,
      [0, 1],
      [0, 50],
      'clamp',
    );
    return {
      borderTopLeftRadius: interpolateBorder,
      transform: [
        {rotate: `${interpolateDegrees}deg`},
        {translateX: interpolateTranslateX},
        {translateY: interpolateTranslateY},
      ],
    };
  }, []);

  const toggleDrawer = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);

  return (
    <View style={[styles.flex1, styles.background]}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <View
          style={[styles.flex1, {paddingTop: insets.top}, styles.padding24]}>
          <Icon onPress={toggleDrawer} />
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

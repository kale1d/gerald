import React from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions, Platform, View} from 'react-native';
import {styles} from './DrawerSceneWrapper.styles';

const {width} = Dimensions.get('screen');

export const DrawerSceneWrapper = ({children}: {children: React.ReactNode}) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const interpolateDegrees = interpolate(progress.value, [0, 1], [0, -4]);
    const interpolateTranslateX = interpolate(
      progress.value,
      [0, 1],
      [0, Platform.OS === 'android' ? width * 0.55 : 50],
    );
    const interpolateTranslateY = interpolate(progress.value, [0, 1], [0, 40]);
    const interpolateBorder = interpolate(progress.value, [0, 1], [0, 20]);
    return {
      transform: [
        {rotate: interpolateDegrees + 'deg'},
        {translateX: interpolateTranslateX},
        {translateY: interpolateTranslateY},
      ],
      borderTopLeftRadius: interpolateBorder,
    };
  });

  return (
    <View style={[styles.flex1, styles.background]}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <SafeAreaView>{children}</SafeAreaView>
      </Animated.View>
    </View>
  );
};

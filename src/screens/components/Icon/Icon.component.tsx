import React from 'react';
import {Pressable} from 'react-native';
import Hamburger from './../../../assets/hamburger.svg';

export const Icon: React.FC<{onPress: () => void}> = ({onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{top: 10, right: 10, left: 10, bottom: 10}}>
      <Hamburger />
    </Pressable>
  );
};

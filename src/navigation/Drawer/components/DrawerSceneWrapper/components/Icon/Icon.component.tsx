import React from 'react';
import {Pressable, Platform, Text} from 'react-native';
import Hamburger from './../../../../../../assets/hamburger.svg';
import {styles} from './Icon.styles';
import {Colors} from '../../../../../../utils/colors';

export const Icon: React.FC<{onPress: () => void}> = ({onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{top: 10, right: 10, left: 10, bottom: 10}}
      style={[
        Platform.OS === 'android' && styles.icon,
        styles.flexDirectionRow,
      ]}>
      <Hamburger fill={Colors.AfricanViolet} />
      <Text style={styles.text}>START</Text>
    </Pressable>
  );
};

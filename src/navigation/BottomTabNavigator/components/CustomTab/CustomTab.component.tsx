import React from 'react';
import {View, Pressable} from 'react-native';
import {getTabIcon} from '../../utils';
import {styles} from './CustomTab.styles';

export const CustomTab = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={styles.item}>
            <Pressable
              onPress={onPress}
              style={[
                styles.borderRadius20,
                isFocused ? styles.bgSky : styles.bgFairy,
              ]}>
              <View style={styles.button}>{getTabIcon(label, isFocused)}</View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

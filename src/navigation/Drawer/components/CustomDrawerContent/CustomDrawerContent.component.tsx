import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {styles} from './CustomDrawerContent.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const CustomDrawerContent: React.FC<{
  props: DrawerContentComponentProps;
}> = ({props}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Beka</Text>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.flexGrow}>
        <View style={styles.listPadding}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <Pressable onPress={() => {}} style={styles.signOutButton}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </Pressable>
      </View>
    </View>
  );
};

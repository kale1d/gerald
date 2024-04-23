import React from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {styles} from './CustomDrawerContent.styles';

export const CustomDrawerContent: React.FC<{
  props: DrawerContentComponentProps;
}> = ({props}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
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
      </SafeAreaView>
    </View>
  );
};

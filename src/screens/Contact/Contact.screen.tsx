import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Contact.styles';

export const ContactScreen: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Contact</Text>
      </View>
    </View>
  );
};

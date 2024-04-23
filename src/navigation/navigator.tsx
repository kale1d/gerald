import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {DrawerContainer} from './Drawer';

export const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <DrawerContainer />
    </NavigationContainer>
  );
};

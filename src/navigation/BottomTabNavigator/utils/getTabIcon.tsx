import React from 'react';
import {BOTTOM_TABS} from '../BottomTabNavigator.types';
import Home from './../../../assets/home.svg';
import Contact from './../../../assets/contact.svg';
import {Colors} from '../../../utils/colors';

export const getTabIcon = (label: BOTTOM_TABS, isFocused: boolean) => {
  switch (label) {
    case BOTTOM_TABS.HOME: {
      return (
        <Home
          width={22}
          height={22}
          fill={isFocused ? Colors.LavenderPink : Colors.SkyMagenta}
        />
      );
    }
    case BOTTOM_TABS.CONTACT: {
      return (
        <Contact
          width={22}
          height={22}
          fill={isFocused ? Colors.LavenderPink : Colors.SkyMagenta}
        />
      );
    }
    default:
      break;
  }
};

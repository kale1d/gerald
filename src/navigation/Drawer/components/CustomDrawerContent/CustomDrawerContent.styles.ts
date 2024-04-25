import {StyleSheet} from 'react-native';
import {Colors} from '../../../../utils/colors';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.DarkPurple},
  safeAreaContainer: {marginLeft: 10, flex: 1},
  titleContainer: {marginTop: 50},
  title: {
    color: Colors.White,
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
    fontSize: 25,
  },
  flexGrow: {flexGrow: 1},
  listPadding: {paddingVertical: 10},
  footer: {
    padding: 20,
    flex: 0.4,
    borderTopWidth: 1,
    borderTopColor: Colors.FairyTale,
  },
  signOutButton: {paddingVertical: 40},
  signOutText: {
    fontSize: 18,
    marginLeft: 5,
    color: Colors.White,
    fontFamily: 'Poppins-Medium',
  },
});

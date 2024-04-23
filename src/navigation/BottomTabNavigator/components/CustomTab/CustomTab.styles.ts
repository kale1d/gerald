import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../../utils/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    backgroundColor: Colors.TeaGreen,
    borderRadius: 25,
    marginHorizontal: width * 0.1,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 1,
    borderColor: Colors.DarkPurple,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },
  borderRadius20: {
    borderRadius: 20,
  },
  bgFairy: {
    backgroundColor: Colors.FairyTale,
  },
  bgSky: {
    backgroundColor: Colors.SkyMagenta,
  },
});

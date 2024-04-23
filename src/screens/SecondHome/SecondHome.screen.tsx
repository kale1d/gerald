import {DrawerSceneWrapper} from '../../navigation/Drawer/components/DrawerSceneWrapper';
import {Button, Text, View} from 'react-native';
import {Icon} from '../components/Icon';
import {STACK_SCREENS} from '../../navigation/HomeStack/HomeStack.types';

export const SecondHomeScreen = ({navigation}) => {
  return (
    <DrawerSceneWrapper>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <Icon onPress={() => navigation.openDrawer()} />
        <Text>Gato</Text>
        <Button
          onPress={() => navigation.navigate(STACK_SCREENS.HOME)}
          title="Go to Home 1"
        />
      </View>
    </DrawerSceneWrapper>
  );
};

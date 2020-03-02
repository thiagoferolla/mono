import {loadAsync} from 'expo-font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function loadFonts() {
  return Promise.all([
    MaterialIcons.loadFont(),
    MaterialCommunityIcons.loadFont(),
    loadAsync({
      'Gotham-Black': require('../../assets/fonts/Gotham-Black.ttf'),
      'Gotham-Bold': require('../../assets/fonts/Gotham-Bold.ttf'),
      'Gotham-Light': require('../../assets/fonts/Gotham-Light.ttf'),
      'Gotham-Medium': require('../../assets/fonts/Gotham-Medium.ttf'),
      'Gotham-Thin': require('../../assets/fonts/Gotham-Thin.ttf'),
    }),
  ]);
}

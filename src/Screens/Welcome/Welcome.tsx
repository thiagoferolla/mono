import React from 'react';
import {SafeAreaView, Text, Image, Dimensions, View} from 'react-native';
import useRemoteImage from '../../Hooks/useRemoteImage';
import {RootStackParamList} from '../../Navigators/MainNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import MonoButton from '../../Components/Button';

type WelcomeNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

function Welcome() {
  const navigation = useNavigation<WelcomeNavigationProp>();
  const welcomeImageURL = useRemoteImage('welcome_image');
  const {width, height} = Dimensions.get('screen');
  const imageProportions = 255.54 / 313.88;

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Gotham-Bold',
            fontSize: 48,
            marginTop: height * 0.075,
            paddingVertical: 35,
          }}>
          mono
        </Text>

        <View
          style={{
            width: width - 60,
            height: (width - 60) * imageProportions,
          }}>
          {welcomeImageURL && (
            <Image
              source={{uri: welcomeImageURL}}
              style={{
                width: width - 60,
                height: (width - 60) * imageProportions,
              }}
            />
          )}
        </View>

        <Text style={{fontFamily: 'Gotham-Bold', fontSize: 36, marginTop: 35}}>
          All yout notes
        </Text>
        <Text style={{fontFamily: 'Gotham-Bold', fontSize: 24}}>
          in one place
        </Text>
      </View>

      <View style={{marginBottom: 15}}>
        <MonoButton
          onPress={() => navigation.navigate('Login')}
          label="Start"
        />
      </View>
    </SafeAreaView>
  );
}

export default Welcome;

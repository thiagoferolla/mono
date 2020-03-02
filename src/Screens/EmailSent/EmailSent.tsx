import React from 'react';
import useRemoteImage from '../../Hooks/useRemoteImage';
import {SafeAreaView, Image, Text, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

function EmailSent() {
  const navigation = useNavigation();
  const {width} = Dimensions.get('screen');
  const imageURL = useRemoteImage('email');
  const imageProportions = 159.78 / 175.19;

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '100%',
          paddingHorizontal: 30,
          paddingVertical: 15,
        }}>
        <TouchableRipple onPress={() => navigation.goBack()}>
          <Icon size={40} color="#222" name="keyboard-backspace" />
        </TouchableRipple>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 30,
        }}>
        <View
          style={{
            width: (width - 60) * 0.6,
            height: (width - 60) * 0.6 * imageProportions,
          }}>
          {imageURL && (
            <Image
              source={{uri: imageURL}}
              style={{
                width: (width - 60) * 0.6,
                height: (width - 60) * 0.6 * imageProportions,
                marginBottom: 15,
              }}
            />
          )}
        </View>

        <Text
          style={{
            fontFamily: 'Gotham-Bold',
            fontSize: 36,
            color: 'rgba(0,0,0,0.87)',
            marginVertical: 25,
          }}>
          Email Sent!
        </Text>

        <Text
          style={{
            fontFamily: 'Gotham-Bold',
            fontSize: 24,
            color: 'rgba(0,0,0,0.6)',
            textAlign: 'center',
          }}>
          {'Click on the link sent to your email to log in automatically'}
        </Text>
      </View>

      <View style={{marginHorizontal: 60, marginVertical: 25}}>
        <Text
          style={{
            fontFamily: 'Gotham-Bold',
            fontSize: 14,
            color: 'rgba(0,0,0,0.3)',
            textAlign: 'center',
          }}>
          Yes, it’s true. We don’t have passwords, we hate them actually :)
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default EmailSent;

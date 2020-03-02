import React, {useState} from 'react';
import {SafeAreaView, View, Text, AsyncStorage} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableRipple, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MonoButton from '../../Components/Button';
import auth from '@react-native-firebase/auth';
// @ts-ignore
import {MONO_FIREBASE_APP_URL} from 'react-native-dotenv';

function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  function onSubmit() {
    try {
      AsyncStorage.setItem('email', email);
      auth()
        .sendSignInLinkToEmail(email, {
          url: MONO_FIREBASE_APP_URL,
          handleCodeInApp: true,
          iOS: {
            bundleId: 'app.mono.ios',
          },
          android: {
            packageName: 'app.mono.android',
          },
          dynamicLinkDomain: 'monoapp.page.link',
        })
        .then(() => {
          navigation.navigate('EmailSent');
        })
        .catch(console.log);
    } catch (err) {
      console.error(err);
    }
  }

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
          alignItems: 'flex-start',
          paddingHorizontal: 30,
          width: '100%',
        }}>
        <Text
          style={{
            textAlign: 'left',
            fontFamily: 'Gotham-Bold',
            fontSize: 36,
            marginBottom: 75,
          }}>
          Log In
        </Text>

        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          autoCapitalize="none"
          style={{width: '100%'}}
          onChangeText={setEmail}
        />
      </View>

      <View style={{marginBottom: 15}}>
        <MonoButton onPress={() => onSubmit()} label="Start" />
      </View>
    </SafeAreaView>
  );
}

export default Login;

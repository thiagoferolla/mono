import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import useAuth from '../Hooks/useAuth';
import Splash from '../Screens/Splash/Splash';
import Welcome from '../Screens/Welcome/Welcome';
import loadFonts from '../Utils/loadFonts';
import EmailSent from '../Screens/EmailSent/EmailSent';
import Login from '../Screens/Login/Login';
import {ActivityIndicator} from 'react-native-paper';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  EmailSent: undefined;
};

function Home() {
  return null;
}

function Loading() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator color="#222" />
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  const [loadingAuth, logged] = useAuth();
  const [loadingFonts, setLoadingFonts] = useState(true);

  useEffect(() => {
    loadFonts()
      .then(() => setLoadingFonts(false))
      .catch(() => {
        console.error('fonts failed to load');
        setLoadingFonts(false);
      });
  }, []);

  return (
    <Stack.Navigator>
      {loadingFonts && (
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
      )}

      {loadingAuth && (
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{headerShown: false}}
        />
      )}

      {!loadingAuth && !logged && (
        <>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EmailSent"
            component={EmailSent}
            options={{headerShown: false}}
          />
        </>
      )}

      <Stack.Screen
        name="Browse"
        component={Home}
        options={{headerLargeTitle: true}}
      />
    </Stack.Navigator>
  );
}

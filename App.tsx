import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import TestGraphql from './src/test';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TestGraphql />
      </SafeAreaView>
    </>
  );
};

export default App;

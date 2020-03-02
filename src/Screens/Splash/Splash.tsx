import React from 'react';
import {View, Text} from 'react-native';

function Splash() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DEDEDE',
      }}>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 72,
        }}>
        mono
      </Text>
    </View>
  );
}

export default Splash;

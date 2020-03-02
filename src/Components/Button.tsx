import React from 'react';
import {Button} from 'react-native-paper';
import {Dimensions} from 'react-native';
import {iOSColors} from 'react-native-typography';

interface Props {
  onPress: () => any;
  label: string;
}

function MonoButton(props: Props) {
  const {width} = Dimensions.get('screen');
  return (
    <Button
      mode="contained"
      onPress={props.onPress}
      contentStyle={{width: '100%', paddingVertical: 5}}
      style={{
        width: width - 60,
        borderRadius: 10,
        backgroundColor: iOSColors.blue,
      }}
      labelStyle={{fontFamily: 'Gotham-Bold', fontSize: 18}}>
      {props.label}
    </Button>
  );
}

export default MonoButton;

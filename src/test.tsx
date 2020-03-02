import React from 'react';
import environment from './environment';
import {graphql, QueryRenderer} from 'react-relay';
import {Text, View} from 'react-native';

export default function TestGraphql() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query testQuery {
            users {
              id
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <Text>ERRO!</Text>;
          } else if (!props) {
            return <Text>Loading...</Text>;
          } else {
            return <Text>{JSON.stringify(props)}</Text>;
          }
        }}
      />
    </View>
  );
}

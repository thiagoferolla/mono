import {
  Environment,
  Network,
  Store,
  RecordSource,
  RequestParameters,
  Variables,
} from 'relay-runtime';
// @ts-ignore
import {MONO_SERVER_URL} from 'react-native-dotenv';

function fetchQuery(operation: RequestParameters, variables: Variables) {
  return fetch(MONO_SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;

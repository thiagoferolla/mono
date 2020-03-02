import {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {AsyncStorage} from 'react-native';

export default function useAuth() {
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setLogged(true);
      } else {
        setLogged(false);
      }

      setLoading(false);
    });
  }, []);

  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(async link => {
        if (link?.url) {
          setLoading(true);
          try {
            const email = await AsyncStorage.getItem('email');
            if (email) {
              auth()
                .signInWithEmailLink(email, link.url)
                .then(() => {
                  AsyncStorage.removeItem('email');
                });
            }
          } catch (err) {
            // pass
          }
          setLoading(false);
        }
      });
  }, []);

  return [loading, logged];
}

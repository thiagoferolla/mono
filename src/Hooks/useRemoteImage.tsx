import {useEffect, useState} from 'react';
import storage from '@react-native-firebase/storage';

export default function useRemoteImage(imageID: string) {
  const [imageURL, setImageURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    storage()
      .ref(`app_images/${imageID}.png`)
      .getDownloadURL()
      .then(url => {
        if (url) {
          setImageURL(url);
        }
      })
      .catch(() => {
        console.error('failed to load image');
      });
  }, [imageID]);

  return imageURL;
}

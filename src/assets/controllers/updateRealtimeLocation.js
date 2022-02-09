import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';

const reference = database().ref('/locations');

const getPermissions = async callback => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      callback();
    }
  } catch (err) {
    console.warn(err);
  }
};

const afterHaveLocationPermissions = async callback => {
  const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
  if (hasPermission) {
    callback();
  } else {
    getPermissions(callback);
  }
};

const afterUserStartSession = callback => {
  auth().onAuthStateChanged(user => {
    if (user) {
      callback(user);
    }
  });
};

const getCurrentPosition = callback => {
  Geolocation.getCurrentPosition(
    (position) => {
      callback(position);
    },
    (error) => {
      console.log(error.code, error.message);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
};

const listen = async () => {
  database()
    .ref('/locations')
    .on('value', snapshot => {
      console.log('Positiions: ', snapshot.val());
    });
  afterUserStartSession(user => {
      afterHaveLocationPermissions(() => {
        setInterval(() => {
          getCurrentPosition(position => {
            database()
              .ref(`/locations/${user.uid}`)
              .set({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                timestamp: position.coords.timestamp,
              });
          });
        }, 20000);
      });
  });
};

const realtimeLocation = {
  listen: listen,
};

export default realtimeLocation;

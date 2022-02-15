import auth from '@react-native-firebase/auth';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import fbShortcuts from '../controllers/firebaseShortcuts';
import { setLastPosition } from '../../store/reducers/userSession';

let updateUsersLocationsInterval;

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
    { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
  );
};

const listen = async () => {
  afterUserStartSession(user => {
      clearInterval(updateUsersLocationsInterval);

      afterHaveLocationPermissions(() => {
        updateUsersLocationsInterval = setInterval(() => {
          getCurrentPosition(position => {
            const {latitude, longitude, timestamp} = position.coords;
            fbShortcuts.updateDoc('Users', user.uid, {
              'lastPosition': {
                latitude,
                longitude,
                timestamp,
              }
            });
            setLastPosition({latitude, longitude, timestamp});
          });
        }, 20000);
      });
  });
};

const realtimeLocation = {
  listen: listen,
};

export default realtimeLocation;

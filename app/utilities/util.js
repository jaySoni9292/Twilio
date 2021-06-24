import axios from 'axios';
import Toast from 'react-native-simple-toast';
import NetInfo from '@react-native-community/netinfo';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {variableStrings, constants} from '../values/strings';
import moment from 'moment';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import notifee from '@notifee/react-native';
import DeviceInfo, {getUniqueId} from 'react-native-device-info';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  Dimensions,
  PixelRatio,
  Platform,
  PermissionsAndroid,
  Alert,
  StatusBar,
  BackHandler,
} from 'react-native';
import {useCallback, useEffect, useRef, useState} from 'react';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;

const Util = {
  validateMobile: mobilenumber => {
    var regmm = '[6-9]{1}[0-9]{9}';
    var regmob = new RegExp(regmm);
    if (regmob.test(mobilenumber)) {
      return true;
    } else {
      return false;
    }
  },

  rfValue: size => {
    return RFPercentage(size);
  },

  isObjEmpty: obj => {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  },

  onBackPress: callback => {
    BackHandler.addEventListener('hardwareBackPress', callback);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', callback);
    };
  },

  getUniqueID: () => {
    return getUniqueId();
  },

  getMacAddress: async () => {
    return await DeviceInfo.getMacAddress();
  },

  isTablet: () => {
    return DeviceInfo.isTablet();
  },

  isInRange: (x, min, max) => {
    return Number(x) >= Number(min) && Number(x) <= Number(max);
  },

  calculateAge: (dob, format) => {
    return moment().diff(moment(dob, format).format('YYYY'), 'years');
  },

  useStateWIthCallback: function (initialState) {
    const [state, setState] = useState(initialState);
    const cbRef = useRef(null);

    const setStateCallback = useCallback((state, cb) => {
      cbRef.current = cb;
      setState(state);
    }, []);
    useEffect(() => {
      if (cbRef.current) {
        cbRef.current(state);
        cbRef.current = null;
      }
    }, [state]);
    return [state, setStateCallback];
  },

  randomNumber: (min, max) => {
    return Math.floor(Math.random() * (max - min - 1)) + min + 1;
  },

  randomNumberMax: (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min + 1;
  },

  randomNumberMin: (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  },

  randomNumberMinMax: (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  normalize: size => {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  },

  getHeight: percent => {
    percent = !percent ? 100 : percent;
    return (Util.getWindowSize().height * percent) / 100;
  },

  getWidth: percent => {
    percent = !percent ? 100 : percent;
    return (Util.getWindowSize().width * percent) / 100;
  },

  getTotalHeight: () => {
    return Util.getWindowSize().height;
  },

  getTotalWidth: () => {
    return Util.getWindowSize().width;
  },

  getHeight1: heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.getPixelSizeForLayoutSize(
      (screenHeight * elemHeight) / 100,
    );
  },

  getWindowSize: () => Dimensions.get('window'),

  isPortrait: () => {
    var temp = true;
    if (Util.getWindowSize().width > Util.getWindowSize().height) {
      temp = false;
    }
    return temp;
  },

  getOrientation: () => {
    const [isPortrait, setIsPortrait] = useState(Util.isPortrait());
    useEffect(() => {
      const callback = () => setIsPortrait(Util.isPortrait());
      Dimensions.addEventListener('change', callback);
      return () => {
        Dimensions.removeEventListener('change', callback);
      };
    }, []);
    // const screenData = Imp.Util.getOrientation();
    // useEffect(() => {
    //   console.log('get orintation =====> ', screenData);
    // }, [screenData]);
    return isPortrait;
  },

  getStatusBarHeight: () => {
    return StatusBar.currentHeight;
  },

  getBottomBarHeight: () => {
    return useBottomTabBarHeight();
  },

  toastMessage: (
    message = '',
    duration = Toast.SHORT,
    gravity = Toast.CENTER,
  ) => {
    Toast.showWithGravity(message, duration, gravity);
  },

  isNetAvailable: async () => {
    let isNetConnected = false;
    await NetInfo.fetch().then(state => {
      try {
        if (state.isConnected) {
          isNetConnected = true;
        } else {
          Util.toastMessage(variableStrings.checkNetInfoMessage);
        }
      } catch (err) {}
    });
    console.log('isNetConnected >>>>>>>>> ', isNetConnected);
    return isNetConnected;
  },

  alertModal: (
    title = '',
    message = '',
    onPress,
    cancelable = true,
    cancel = 'Cancel',
    ok = 'OK',
  ) => {
    Alert.alert(
      title,
      message,
      [
        cancel ? {text: cancel, onPress: () => {}, style: 'cancel'} : null,
        {text: ok, onPress: onPress},
      ],
      {cancelable: cancelable},
    );
  },

  getItem: async STORAGE_KEY => {
    try {
      const item = await AsyncStorage.getItem(STORAGE_KEY);
      console.log('get item :-', STORAGE_KEY, ' >>>>>>>> ', item);
      if (item !== null) {
        return JSON.stringify(item);
      } else {
        return '';
      }
    } catch (e) {
      console.log('Failed to fetch the data from storage', STORAGE_KEY);
    }
  },

  deleteItem: async STORAGE_KEY => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      // console.log('clear the async storage.', STORAGE_KEY)
    } catch (e) {
      console.log('Failed to clear the async storage.', STORAGE_KEY);
    }
  },

  deleteAllItem: async () => {
    try {
      await AsyncStorage.clear();
      // console.log('clear the async storage.')
    } catch (e) {
      console.log('Failed to clear all the async storage.');
    }
  },

  setItem: async (STORAGE_KEY, STORAGE_VALUE) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.parse(STORAGE_VALUE));
      // console.log('save the data to the storage', STORAGE_KEY)
    } catch (e) {
      console.log('Failed to save the data to the storage', STORAGE_KEY);
    }
  },

  getToken: async () => {
    var token = '';
    var authToken = await Util.getItem('authToken');
    if (authToken && authToken != undefined && authToken != '') {
      authToken = JSON.parse(authToken);
      token = authToken;
    }
    return token;
  },

  getUserId: async () => {
    var userId = '';
    var user = await Util.getItem('userDetail');
    if (user && user != undefined && user != '') {
      userId = JSON.parse(user).id;
    }
    return userId;
  },

  getFirebaseToken: async () => {
    let fcmToken = await Util.getItem('fcmToken');
    if (!fcmToken) {
      if (!firebase.apps.length) {
        var firebaseConfig = {
          apiKey: 'AIzaSyDXtkFEP-NAjCw4eNsHkU0Kum9IdfrkF1Q',
          authDomain: 'store2door-d8bf9.firebaseapp.com',
          projectId: 'store2door-d8bf9',
          databaseURL: 'https://store2door-d8bf9-default-rtdb.firebaseio.com/',
          storageBucket: 'store2door-d8bf9.appspot.com',
          messagingSenderId: '869069930414',
          appId: '1:869069930414:web:1c1ad12589530c9008123f',
          measurementId: 'G-N0NTW5Y9W0',
        };
        firebase.initializeApp(firebaseConfig);
      } else {
        firebase.app();
      }
      await messaging().registerDeviceForRemoteMessages();
      fcmToken = await messaging().getToken();
      // fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        Util.setItem('fcmToken', fcmToken);
      }
    }
    console.log('Firebase token => ', fcmToken);
    return fcmToken;
  },

  sendLocalNotification: async (title, message) => {
    try {
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });

      await notifee.displayNotification({
        title: title,
        body: message,
        android: {
          channelId,
        },
      });
    } catch (e) {
      console.log('Failed to send notification.', JSON.stringify(e));
    }
  },

  getLatLong: async locationCallback => {
    var latlong = '';
    if (Platform.OS === 'ios') {
      latlong = await Util.callLocation(locationCallback);
    } else {
      async function requestLocationPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            latlong = await Util.callLocation(locationCallback);
          } else {
            Util.toastMessage('Please allow this app to access your location.');
          }
        } catch (err) {
          console.warn(err);
        }
      }
      requestLocationPermission();
    }
    return latlong;
  },

  getAddress: async (lat, long) => {
    var temp = '';
    await fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        lat +
        ',' +
        long +
        '&key=' +
        'AIzaSyAIbUyAzQvC_SygFXGVVtSW5CSUHYhsN3g',
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status) {
          temp = responseJson.results[0].formatted_address;
        }
      });
    return temp;
  },

  getLatLongFromAddress: async address => {
    var latlong;
    const url =
      `https://geocoder.api.here.com/6.2/geocode.json?app_id=nRPKrHJDMNfNBrXACw8h&app_code=otcOxX6BALyyz77u1gn6KQ&searchtext=` +
      address;
    await fetch(url)
      .then(res => res.json())
      .then(response => {
        latlong = response.Response.View[0].Result[0].Location.DisplayPosition;
        let lat = latlong.Latitude;
        let long = latlong.Longitude;
      })
      .catch(e => {
        console.log('Error in get lat long', e);
      });
    return latlong;
  },

  getCurrentAddress: async () => {
    var address;
    var latlong = Util.getLatLong();
    if (latlong) {
      address = Util.getAddress(latlong.latitude, latlong.longitude);
    }
    return address;
  },

  compareTime: async (sTime, eTime) => {
    let returnValue = false;
    var endTime = moment(eTime, 'DD/MM/yyyy hh:mm A').format(
      'DD/MM/yyyy hh:mm A',
    );
    var startTime = moment(sTime, 'DD/MM/yyyy hh:mm A').format(
      'DD/MM/yyyy hh:mm A',
    );
    startTime = moment(startTime, 'DD/MM/yyyy HH:mm a');
    endTime = moment(endTime, 'DD/MM/yyyy HH:mm a');
    let duration = Date.parse(endTime) - Date.parse(startTime);
    if (duration > 0) {
      returnValue = true;
    }
    return returnValue;
  },

  isEndTimeBig: (start, end) => {
    let sTime = moment('2021-02-25 ' + start, 'yyyy-MM-DD hh:mm A');
    let eTime = moment('2021-02-25 ' + end, 'yyyy-MM-DD hh:mm A');
    return sTime.isBefore(eTime);
  },

  getDate: (value, format, givenFormat = 'DD/MM/yyyy') => {
    return moment(value, givenFormat).format(format);
  },

  callLocation: async locationCallback => {
    var latlong = '';
    await Geolocation.getCurrentPosition(
      position => {
        latlong = position.coords;
        locationCallback(latlong);
        const currentLongitude = JSON.stringify(latlong.longitude);
        const currentLatitude = JSON.stringify(latlong.latitude);
        global.currentLongitude = currentLongitude;
        global.currentLatitude = currentLatitude;
      },
      error => Util.toastMessage(error.message),
      {enableHighAccuracy: false, timeout: 5000, maximumAge: 10000},
    );
    // await Geolocation.watchPosition((position) => {
    //   latlong = position.coords;
    //   const currentLongitude = JSON.stringify(latlong.longitude);
    //   const currentLatitude = JSON.stringify(latlong.latitude);
    //   global.currentLongitude = currentLongitude;
    //   global.currentLatitude = currentLatitude;
    // });
    return latlong;
  },

  searchFilterFunction: async (text, data) => {
    const tempData = data.filter(item => {
      const itemData = `${String(item).toUpperCase()}${item}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    return tempData;
  },

  getNumber: (value, point = 2) => {
    let str = 0;
    str = Number(value);
    str = str.toString().replace(/[^0-9.]+/g, '');
    str = Number(str).toFixed(point);
    return str;
  },

  kmToMile: value => {
    return parseFloat(value) / 1.609;
  },

  mileToKm: value => {
    return parseFloat(value) * 1.609;
  },

  getOnlyNumber: value => {
    return value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
  },

  getOnlyNumberIncludeDot: value => {
    return value.replace(/[- #*;,<>\{\}\[\]\\\/]/gi, '');
  },

  roundValue: (value, precision = 2) => {
    return Number(value).toFixed(precision);
  },

  getOnlyString: value => {
    return value.replace(/[^A-Za-z]+/g, '');
  },

  removeWhiteSpace: value => {
    return value.replace(/\s/g, '');
  },

  getOnlySpecialCharacters: value => {
    return value.replace(/[^A-Za-z0-9]+/g, '');
  },

  checkSpecialCharacters: value => {
    var returnValue = false;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (format.test(value)) {
      returnValue = true;
    }
    return returnValue;
  },

  checkOnlySpecialCharacters: value => {
    var returnValue = false;
    var format = /^[^a-zA-Z0-9]+$/;
    if (format.test(value)) {
      returnValue = true;
    }
    return returnValue;
  },

  isJsonArray: value => {
    var temp = false;
    if (typeof value.length != 'undefined') {
      temp = true;
    }
    return temp;
  },

  jsonParse: value => {
    temp = value;
    try {
      temp = JSON.parse(temp);
    } catch (e) {
      console.log('Failed to parse >>> ', value);
    }
    return temp;
  },

  firstLaterCapitalize: value => {
    if (typeof value !== 'string') return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
  },

  call_Post_by_URI: async (uri, collection, callback, type) => {
    if (await Util.isNetAvailable()) {
      let URL;
      URL = constants.URL;
      var url = URL + uri;
      var token = await Util.getToken();
      var typeValue = 'application/json';
      if (type == 'multipart') {
        typeValue = 'multipart/form-data';
      }
      console.log('post =====> ', url + ' ' + JSON.stringify(collection));
      if (token !== '') {
        callApi_post(url, collection, token, typeValue)
          .then(res => {
            console.log('post response =====> ', JSON.stringify(res.data));
            if (callback) {
              callback(res.data);
            }
          })
          .catch(function (error) {
            if (error.response !== undefined) {
              console.log('post error =====> ', JSON.stringify(error.response));
              if (error.response.status == 401) {
              } else {
                callback(error.response);
              }
            }
          });
      } else {
        callApi_postNoToken(url, collection, typeValue)
          .then(res => {
            console.log('post response =====> ', JSON.stringify(res.data));
            if (callback) {
              callback(res.data);
            }
          })
          .catch(function (error) {
            if (error.response !== undefined) {
              console.log('post error =====> ', JSON.stringify(error.response));
              if (error.response.status == 401) {
              } else {
                callback(error.response.data);
              }
            } else {
              callback(error.response);
            }
          });
      }
    } else {
      callback(variableStrings.checkNetInfoMessage);
    }
  },

  call_get_with_uri_param: async (uri_with_param, callback) => {
    if (await Util.isNetAvailable()) {
      let URL;
      URL = constants.URL;
      let url = URL + uri_with_param;
      var token = await Util.getToken();
      console.log('get =====> ', url);
      callApi_get(url, token)
        .then(res => {
          console.log('get response =====> ', JSON.stringify(res.data));
          if (callback) {
            callback(res.data);
          }
        })
        .catch(function (error) {
          if (error.response !== undefined) {
            console.log('get error =====> ', JSON.stringify(error.response));
            if (error.response.status == 401) {
            } else {
              callback(error.response.data);
            }
          }
        });
    } else {
      callback(variableStrings.checkNetInfoMessage);
    }
  },

  scrollToIndex: (ref, index) => {
    ref.current.scrollToIndex({animated: true, index: index});
  },
};

const callApi_get = async (url, token) => {
  return await axios.get(url, {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
};

const callApi_post = async function go(url, pram, token, type) {
  return await axios.post(url, pram, {
    headers: {
      Accept: 'application/json',
      'Content-Type': type,
      Authorization: token,
    },
    crossDomain: true,
  });
};

const callApi_postNoToken = async function go(url, pram, type) {
  return await axios.post(url, pram, {
    headers: {
      Accept: 'application/json',
      'Content-Type': type,
    },
    crossDomain: true,
  });
};

export default Util;

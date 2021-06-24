import React, {useEffect} from 'react';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import {Imp} from './app/screens/BasicImport';

export const HandleNotifications = props => {
  let {navigation} = props;

  useEffect(() => {
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

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      requestUserPermission();
    } else {
      firebase.app();
    }

    // Check whether an initial notification is available
    // This listener triggered when app is closed and we click,tapped and opened notification
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          const {title, body} = remoteMessage.notification;
          console.log(' app is closed  >>>>> ', title, body);
          // if (navigation && typeof navigation != 'undefined') {
          //   navigation.navigate(remoteMessage.data.screen);
          // }
        }
      });

    // This listener triggered when notification has been received in foreground
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      if (remoteMessage) {
        const {title, body} = remoteMessage.notification;
        console.log('received in foreground >>> ', remoteMessage);
        // if (navigation && typeof navigation != 'undefined') {
        //   navigation.navigate(remoteMessage.data.screen);
        // }
        Imp.Util.sendLocalNotification(
          remoteMessage.notification.title,
          remoteMessage.notification.body,
        );
      }
    });

    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
      Assume a message-notification contains a "type" property in the data payload of the screen to open
     * */

    const notificationOpenedListener = messaging().onNotificationOpenedApp(
      remoteMessage => {
        if (remoteMessage) {
          const {title, body} = remoteMessage.notification;
          console.log('received in background >>> ', title, body);
          // if (navigation && typeof navigation != 'undefined') {
          //   navigation.navigate(remoteMessage.data.screen);
          // }
        }
      },
    );

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      if (remoteMessage) {
        const {title, body} = remoteMessage.notification;
        console.log('handled in the background!', title, body);
        // if (navigation && typeof navigation != 'undefined') {
        //   navigation.navigate(remoteMessage.data.screen);
        // }
      }
    });

    return () => {
      unsubscribe;
      notificationOpenedListener;
    };
  }, []);

  async function checkPermission() {
    const enabled = await messaging().hasPermission();
    if (enabled) {
      getToken();
    } else {
      requestPermission();
    }
  }

  async function getToken() {
    var token = await Util.getFirebaseToken();
    console.log('token >>>>>>>>>>>>>> ', token);
  }

  async function requestPermission() {
    try {
      await messaging().requestPermission();
      getToken();
    } catch (error) {
      console.log('permission rejected');
    }
  }

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      checkPermission();
    }
  }

  return null;
};

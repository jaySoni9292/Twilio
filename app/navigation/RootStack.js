import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
// Stack
import {AuthStackScreen} from './AuthScreen';
import {DrawerScreen} from './Drawer';
import {CommonActions} from '@react-navigation/native';
import {Imp} from '../screens/BasicImport';
import {useNavigation} from '@react-navigation/core';
const RootStack = createStackNavigator();

export const RootStackScreen = ({}) => {
  return (
    <>
      <RootStack.Navigator headerMode="none" initialRouteName="Splash">
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{animationEnabled: false}}
        />
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{animationEnabled: false}}
        />
      </RootStack.Navigator>
    </>
  );
};

function Splash() {
  const navigation = useNavigation();
  const [userDetail, setUserDetail] = useState('');

  useEffect(() => {
    setTimeout(() => {
      navigateScreen();
      setTimeout(() => {
        SplashScreen.hide();
      }, 200);
    }, 3000);
  }, []);

  function navigateScreen() {
    navigation.dispatch(
      CommonActions.reset({index: 1, routes: [{name: 'Auth'}]}),
    );
  }

  return <></>;
}

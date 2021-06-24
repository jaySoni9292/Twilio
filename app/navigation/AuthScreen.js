import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import ForgotPassword from '../screens/auth/ForgotPassword';
import EnterMobileNumber from '../screens/auth/EnterMobileNumber';
import Pin from '../screens/auth/Pin';
import Otp from '../screens/auth/Otp';
import {BottomNavigation} from './BottomNavigation';

const optionsBlank = () => {
  return {headerShown: false, animationEnabled: false};
};

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="EnterMobileNumber">
    <AuthStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={optionsBlank}
    />
    <AuthStack.Screen
      name="EnterMobileNumber"
      component={EnterMobileNumber}
      options={optionsBlank}
    />
    <AuthStack.Screen name="Pin" component={Pin} options={optionsBlank} />
    <AuthStack.Screen name="Otp" component={Otp} options={optionsBlank} />
    <AuthStack.Screen
      name="BottomNavigation"
      component={BottomNavigation}
      options={optionsBlank}
    />
  </AuthStack.Navigator>
);

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Imp } from "../screens/BasicImport";
import { HeaderLeft, HeaderTitle, HeaderRight } from "./DrawerHeader/index";

const options = (
  title,
  menu = true,
  right = true,
  showEdit = true,
  showAccount = true,
  color = Imp.COLOR.WHITE,
  backgroundColor = Imp.COLOR.APP_THEME,
  headerTitleAlign = "left"
) => {
  return {
    headerTitle: () => <HeaderTitle title={title} />,
    headerTitleAlign: headerTitleAlign,
    headerRight: () =>
      right && <HeaderRight showEdit={showEdit} showAccount={showAccount} />,
    headerLeft: () => <HeaderLeft menu={menu} color={color} />,
    headerShown: true,
    animationEnabled: false,
    headerStyle: {
      backgroundColor: backgroundColor,
      height: Imp.Util.getHeight(8),
    },
  };
};

const optionsBlank = () => {
  return { headerShown: false, animationEnabled: false };
};

// Home Screens :
// import Dashboard from "../screens/home/Dashboard";

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName="Quote">
    {/* <HomeStack.Screen
      name="Dashboard"
      component={Dashboard}
      options={({}) => options("Store2Door", true, false)}
    /> */}
  </HomeStack.Navigator>
);

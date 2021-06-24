import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./DrawerMenu/index";
import { Imp } from "../screens/BasicImport";

// StackScreen
import { BottomNavigation } from "./BottomNavigation";
import { HomeStackScreen } from "./DrawerScreen";

const Drawer = createDrawerNavigator();

export const DrawerScreen = () => (
  <Drawer.Navigator
    overlayColor="transparent"
    initialRouteName="HomeScreen"
    screenOptions={{ gestureEnabled: true }}
    drawerContent={(props) => <DrawerContent {...props} />}
    drawerStyle={{
      backgroundColor: Imp.COLOR.APP_THEME,
      padding: 0,
    }}
    drawerType="slide"
    drawerPosition="left"
    keyboardDismissMode="on-drag"
    overlayColor={Imp.COLOR.TRANSPARENT_BLACK}
    drawerContentOptions={{
      activeTintColor: Imp.COLOR.APP_THEME,
      inactiveBackgroundColor: Imp.COLOR.TRANSPARENT_BLACK,
      inactiveTintColor: Imp.COLOR.TRANSPARENT_BLACK,
      activeBackgroundColor: Imp.COLOR.APP_THEME,
      inactiveTintColor: Imp.COLOR.APP_THEME,
      inactiveBackgroundColor: Imp.COLOR.APP_THEME,
      labelStyle: {
        fontSize: Imp.Util.normalize(2.2),
        color: Imp.COLOR.WHITE,
        fontStyle: "normal",
        fontWeight: "800",
      },
      style: {
        backgroundColor: Imp.COLOR.APP_THEME,
        margin: Imp.Util.normalize(5),
      },
      contentContainerStyle: { backgroundColor: Imp.COLOR.APP_THEME },
      itemStyle: {
        margin: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        borderRadius: 0,
        borderBottomColor: "#fff",
        borderBottomWidth: 2,
      },
    }}
  >
    {/* <Drawer.Screen name="BottomScreen" component={BottomNavigation} /> */}
    <Drawer.Screen name="HomeScreen" component={HomeStackScreen} />
  </Drawer.Navigator>
);

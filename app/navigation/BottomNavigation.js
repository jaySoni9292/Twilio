import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icons} from '../components/Icon/index';
import {Imp} from '../screens/BasicImport';
import Animated from 'react-native-reanimated';
// Screens
import Home from '../screens/home/Home';
import Portfolio from '../screens/home/Portfolio';
import Dashboard from '../screens/home/Dashboard';
import Market from '../screens/home/Market';
import People from '../screens/home/People';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  const [position] = React.useState(() => new Animated.Value(0));
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      backBehavior={'history'}
      position={position}
      swipeEnabled={true}
      timingConfig={{duration: 500}}
      springConfig={{
        damping: 100,
        mass: 3,
        stiffness: 500,
        restSpeedThreshold: 0.01,
        restDisplacementThreshold: 0.01,
      }}
      springVelocityScale={10}
      lazy={true}
      detachInactiveScreens={true}
      sceneContainerStyle={[{}]}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="People" component={People} />
    </Tab.Navigator>
  );
};

function MyTabBar({state, descriptors, navigation, position}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const [, forceUpdate] = useState();

  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;
  const screenData = Imp.Util.getOrientation();
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  function getIcon(i, color) {
    var name =
      i == 0 ? 'home' : i == 1 ? 'graph-bar' : i == 3 ? 'trending-up' : 'user';
    var type = i == 1 ? 'foundation' : 'feather';
    return <Icons name={name} type={type} color={color} />;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        bottom: 0,
        left: 0,
        right: 0,
        height: screenData ? Imp.Util.getHeight(8) : Imp.Util.getHeight(15),
        width: '101%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: Imp.COLOR.APP_THEME,
        shadowColor: Imp.COLOR.BLACK,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderTopWidth: 0.2,
        borderTopColor: Imp.COLOR.WHITE,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        var color = isFocused ? Imp.COLOR.THEME_PINK : Imp.COLOR.WHITE;

        const onPress = i => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
          forceUpdate(Math.random());
        };

        const onLongPress = () => {};

        return (
          <>
            <TouchableOpacity
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={() => {
                onPress(index);
              }}
              onLongPress={onLongPress}>
              <View style={[]}>
                {index == 2 ? (
                  <View
                    style={{
                      alignSelf: 'center',
                      backgroundColor: Imp.COLOR.THEME_PINK,
                      width: Imp.Util.rfValue(9),
                      height: Imp.Util.rfValue(9),
                      borderRadius: Imp.Util.rfValue(9),
                      marginBottom: Imp.Util.rfValue(4),
                      zIndex: 10000,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icons name="gift" />
                  </View>
                ) : (
                  <View
                    style={[
                      Imp.GlobalStyle.alignItemsCenter,
                      Imp.GlobalStyle.justifyCenter,
                    ]}>
                    {getIcon(index, color)}
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={[
                        Imp.GlobalStyle.fontSmall,
                        Imp.GlobalStyle.fontRegular,
                        Imp.GlobalStyle.textCenter,
                        Imp.GlobalStyle.mt5,
                        {color: color},
                      ]}>
                      {label}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </>
        );
      })}
    </View>
  );
}

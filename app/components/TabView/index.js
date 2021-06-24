import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../../assets/css/globalStyle';
import {Icons} from '../../components/Icon/index';
import {COLOR} from '../../assets/css/colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Animated, {Easing} from 'react-native-reanimated';
import Style from './style';

export function TabViews(props) {
  const Tab = createMaterialTopTabNavigator();
  // const [position] = React.useState(() => new Animated.Value(0));

  const renderIcon = ({route, focused, color}) => (
    <Icons
      name={focused ? 'abums' : 'albums-outlined'}
      color={color}
      size={20}
    />
  );

  const renderLabel = ({route, focused, color}) => (
    <Text
      style={[
        GlobalStyle.textWhite,
        GlobalStyle.fontRegular,
        GlobalStyle.fontMedium,
        titleStyle,
      ]}>
      {route.title}
    </Text>
  );

  const tabPress = ({route, preventDefault}) => {
    if (route.key === 'first') {
      preventDefault();
    }
  };

  const tabLongPress = ({route, preventDefault}) => {
    if (route.key === 'first') {
      preventDefault();
    }
  };

  const {
    that,
    initialRouteName = 'first',
    screenOptions,
    backBehavior = 'history',
    tabBarPosition = 'top',
    lazy = false,
    lazyPreloadDistance = 0,
    lazyPlaceholder = null,
    removeClippedSubviews = false,
    keyboardDismissMode = 'auto',
    swipeEnabled = true,
    swipeVelocityImpact = 0.2,
    timingConfig,
    springVelocityScale = 0,
    initialLayout = {width: width},
    sceneContainerStyle,
    style,
    activeTintColor = COLOR.themeColor,
    inactiveTintColor = COLOR.themeColor,
    showIcon = false,
    showLabel = true,
    pressColor = 5.0,
    pressOpacity = 5.0,
    scrollEnabled = true,
    tabStyle,
    indicatorStyle,
    labelStyle,
    iconStyle,
    tabBarStyle,
    allowFontScaling = true,
    firstTitle,
    firstRoute,
    secondTitle,
    secondRoute,
    thirdTitle,
    thirdRoute,
    titleStyle,
  } = props;

  return (
    <>
      <Tab.Navigator
        initialRouteName={initialRouteName}
        screenOptions={screenOptions}
        numberOfScreens
        backBehavior={backBehavior}
        tabBarPosition={tabBarPosition}
        lazy={lazy}
        lazyPreloadDistance={lazyPreloadDistance}
        removeClippedSubviews={removeClippedSubviews}
        keyboardDismissMode={keyboardDismissMode}
        swipeEnabled={swipeEnabled}
        swipeVelocityImpact={swipeVelocityImpact}
        timingConfig={timingConfig}
        // position={position}
        initialLayout={initialLayout}
        springVelocityScale={springVelocityScale}
        sceneContainerStyle={sceneContainerStyle}
        style={[Style.tabViewStyles, style]}
        // lazyPlaceholder={lazyPlaceholder}
        tabBar={(props) => <MyTabBar {...props} />}
        tabBarOptions={{
          activeTintColor: activeTintColor,
          inactiveTintColor: inactiveTintColor,
          showIcon: showIcon,
          showLabel: showLabel,
          pressColor: pressColor,
          pressOpacity: pressOpacity,
          scrollEnabled: scrollEnabled,
          tabStyle: tabStyle, //Style object for the tab.
          indicatorStyle: indicatorStyle, //Style object for the tab indicator (line at the bottom of the tab).
          labelStyle: labelStyle,
          iconStyle: iconStyle,
          style: tabBarStyle,
          allowFontScaling: allowFontScaling,
        }}>
        <Tab.Screen
          name={firstTitle}
          component={firstRoute}
          options={{
            title: firstTitle,
            tabBarIcon: renderIcon,
            tabBarAccessibilityLabel: firstTitle,
            tabPress: tabPress,
            tabLongPress: tabLongPress,
            // tabBarLabel: renderLabel,
          }}
        />

        <Tab.Screen
          name={secondTitle}
          component={secondRoute}
          options={{
            title: secondTitle,
          }}
        />

        <Tab.Screen
          name={thirdTitle}
          component={thirdRoute}
          options={{
            title: thirdTitle,
          }}
        />
      </Tab.Navigator>
    </>
  );
}

function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const inputRange = state.routes.map((_, i) => i);
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[Style.tabContainerStyle, GlobalStyle.flex1]}>
            <Text
              style={[
                GlobalStyle.textTheme,
                GlobalStyle.fontSmall,
                GlobalStyle.textCenter,
                Style.titleStyle,
                isFocused && Style.selectedTitleStyles,
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

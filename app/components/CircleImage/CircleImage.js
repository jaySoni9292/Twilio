import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {COLOR} from '../../assets/css/colors';
import {Icons} from '../Icon/index';

export function CircleImage(props) {
  const {
    size = 100,
    symbolSize = 50,
    style,
    img,
    imgStyle,
    onPress,
    name,
    borderWidth,
    borderColor,
    symbolColor = 'transparent',
    iconType = 'entypo',
    iconStyle,
    iconOuterStyle,
    iconColor,
  } = props;
  var angle = 45;
  const angleRad = (angle * Math.PI) / 180;
  const radius = size / 2;
  const center = radius;
  const x = radius * Math.cos(angleRad) + center - symbolSize / 2;
  const y = radius * Math.sin(angleRad) + center - symbolSize / 2;

  return (
    <View
      style={[s.circle, style]}
      onLayout={event => {
        var {x, y, width, height} = event.nativeEvent.layout;
      }}>
      <View
        style={[
          s.circle,
          {
            width: size,
            height: size,
          },
        ]}>
        <Image
          source={img}
          resizeMethod="resize"
          resizeMode="cover"
          style={[
            {
              height: size - 3,
              width: size - 3,
              margin: 0.1,
              borderRadius: size - 3 / 2,
              borderWidth: borderWidth,
              borderColor: borderColor,
              zIndex: 1000,
            },
            imgStyle
          ]}
        />
        {name && (
          <TouchableOpacity
            onPress={onPress}
            style={[
              s.symbol,
              {
                width: symbolSize * 1.5,
                height: symbolSize * 1.5,
                borderRadius: symbolSize,
                left: x / 1.1,
                top: y / 1.2,
                backgroundColor: symbolColor,
                zIndex: 100000,
              },
              iconOuterStyle,
            ]}>
            <Icons
              type={iconType}
              name={name}
              onPress={onPress}
              size={symbolSize/1.5}
              color={iconColor}
              style={[iconStyle]}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  circle: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbol: {
    position: 'absolute',
    elevation: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

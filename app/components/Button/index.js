import React from 'react';
import {Style} from './styles';
import Util from '../../utilities/util';
import {COLOR} from '../../assets/css/colors';
import {Icons} from '../../components/Icon/index';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import {GlobalStyle} from '../../assets/css/globalStyle';
import style from '../loader/style';

export const ButtonCustom = props => {
  let {
    label,
    onPress,
    styleView,
    styleText,
    iconLeft,
    iconRight,
    numberOfLines = 5,
    activeOpacity = 0.5,
    iconTypeLeft = 'feather',
    iconTypeRight = 'feather',
    iconColorLeft = COLOR.WHITE,
    iconColorRight = COLOR.WHITE,
    iconLeftStyle,
    iconRightStyle,
    iconLeftSize = 15,
    iconRightSize = 15,
  } = props;
  return (
    <Pressable
      // activeOpacity={activeOpacity}
      onPress={onPress}
      // delayPressIn={50}
      style={[Style.button, styleView]}>
      <View style={[Style.tbRow]}>
        {iconLeft ? (
          <Icons
            name={iconLeft}
            type={iconTypeLeft}
            color={iconColorLeft}
            size={iconLeftSize}
            style={[Style.iconLeft, iconLeftStyle]}
          />
        ) : null}
        <Text
          numberOfLines={numberOfLines}
          style={[
            GlobalStyle.fontBold,
            GlobalStyle.fontMedium,
            Style.buttonText,
            {
              marginLeft: iconRight && Util.normalize(20),
              marginRight: iconLeft && Util.normalize(20),
            },
            styleText,
          ]}
          ellipsizeMode="tail">
          {label}
        </Text>
        {iconRight ? (
          <Icons
            type={'antdesign'}
            name={iconRight}
            type={iconTypeRight}
            color={iconColorRight}
            size={iconRightSize}
            style={[Style.iconRight, iconRightStyle]}
          />
        ) : null}
      </View>
    </Pressable>
  );
};

export function LinkButton(props) {
  let {style, onPress, label, textStyle, activeOpacity = 1} = props;

  return (
    <Pressable
      // activeOpacity={activeOpacity}
      onPress={onPress}
      style={[GlobalStyle.justifyCenter, style]}>
      <Text
        style={[
          // GlobalStyle.fontBold,
          GlobalStyle.fontMedium,
          GlobalStyle.textAlignVerticalCenter,
          GlobalStyle.textTheme,
          textStyle,
        ]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {label}
      </Text>
    </Pressable>
  );
}

export function ErrorText(props) {
  let {label, textStyle} = props;
  return (
    <Text
      style={[
        GlobalStyle.fontLight,
        GlobalStyle.fontSmall,
        GlobalStyle.textRed,
        GlobalStyle.mt2,
        {width: '90%'},
        textStyle,
      ]}>
      {label}
    </Text>
  );
}

export function FacebookButton(props) {
  let {styleView, onPress} = props;
  return (
    <TouchableOpacity style={[Style.fbContainer, styleView]} onPress={onPress}>
      <Text style={[Style.fb]}>f</Text>
      <View style={[Style.facebookButton]}>
        <Text style={Style.fbButtonText}>Sign up using Facebook</Text>
      </View>
    </TouchableOpacity>
  );
}

export function GoogleButton(props) {
  let {styleView, onPress} = props;
  return (
    <TouchableOpacity
      style={[
        Style.fbContainer,
        {backgroundColor: COLOR.googleTheme},
        styleView,
      ]}
      onPress={onPress}>
      <View style={[{borderRadius: 5, backgroundColor: 'white', padding: 5}]}>
        <Image
          source={{
            uri:
              'https://i.pinimg.com/originals/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.png',
          }}
          style={{width: Util.getWidth(8), height: Util.getWidth(8)}}
        />
      </View>

      <View style={[Style.facebookButton]}>
        <Text style={Style.fbButtonText}>Sign up using Google</Text>
      </View>
    </TouchableOpacity>
  );
}

import React,{useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../../assets/css/globalStyle';
import {COLOR} from '../../assets/css/colors';
import {Style} from './styles';
import {Icon} from 'react-native-elements';
import {LinkButton,ButtonCustom} from '../../components/Button/index';
import { Imp } from '../../screens/BasicImport';

export const InputText = props => {
  const[bottomBorderColor,setBottomBorderColor]=useState(Imp.COLOR.THEME_PINK);
  const {
    onChangeText,
    label,
    secureTextEntry,
    password,
    iconName,
    iconRight,
    keyboardType,
    textContentType = 'name',
    autoCorrect = false,
    autoCompleteType = 'name',
    styleView,
    styleText,
    value,
    underlineColorAndroid = 'transparent',
    multiline = false,
    autoCapitalize = 'words',
    maxLength,
    editable = true,
    placeholderTextColor = COLOR.GRAY,
    iconTypeLeft = 'feather',
    iconTypeRight = 'feather',
    iconColorLeft = COLOR.APP_THEME,
    iconColorRight = COLOR.APP_THEME,
    iconLeftStyle,
    iconRightStyle,
    iconLeftSize = Imp.Util.normalize(22),
    iconRightSize = Imp.Util.normalize(18),
    onLeftIconPress,
    onRightIconPress,
    InputLabel,
    rightLinkButton,
    linkButtonLabel,
    rightButtonLabel,
    styleViewMain,
    autoFocus=false,
  } = props;

  return (
    <View style={styleViewMain}>
      {InputLabel && (
        <Text style={[Style.inputLabelStyle]}>
          {InputLabel}
        </Text>
      )}
      <View style={[Style.inputHolder, GlobalStyle.fullWidth, styleView, {borderBottomColor:bottomBorderColor}]}>
        {iconName ? (
          <TouchableOpacity activeOpacity={1} onPress={onLeftIconPress}>
            <Icon
              name={iconName}
              type={iconTypeLeft}
              color={iconColorLeft}
              size={iconLeftSize}
              containerStyle={[GlobalStyle.inputImg, iconLeftStyle]}
              onPress={onLeftIconPress}
            />
          </TouchableOpacity>
        ) : null}

        <TextInput
          underlineColorAndroid={underlineColorAndroid}
          style={[
            GlobalStyle.textInput,
            GlobalStyle.fontMedium,
            Style.inputText,
            styleText,
            {},
          ]}
          placeholder={label}
          keyboardType={keyboardType}
          multiline={multiline}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          password={secureTextEntry}
          autoCapitalize={autoCapitalize}
          value={value}
          maxLength={maxLength}
          editable={editable}
          placeholderTextColor={placeholderTextColor}
          textContentType={textContentType}
          autoCorrect={autoCorrect}
          autoCompleteType={autoCompleteType}
          onFocus={()=>setBottomBorderColor(COLOR.THEME_PINK)}
          onBlur={()=>setBottomBorderColor(COLOR.THEME_PINK)}
          autoFocus={autoFocus}
        />

        {iconRight ? (
          <TouchableOpacity activeOpacity={1} onPress={onRightIconPress}
          style={[]}
          >
            <Icon
              name={iconRight}
              type={iconTypeRight}
              color={iconColorRight}
              size={iconRightSize}
              containerStyle={[iconRightStyle, {width: 20}]}
              onPress={onRightIconPress}
            />
          </TouchableOpacity>
        ) : null}
        {linkButtonLabel ? (
          <LinkButton
            label={linkButtonLabel}
            textStyle={[{color:COLOR.WHITE}]}
            style={[GlobalStyle.pv3,{backgroundColor:COLOR.APP_THEME,borderRadius:5,paddingHorizontal:15}]}
          />
        ) : null}
        
      </View>
    </View>
  );
};

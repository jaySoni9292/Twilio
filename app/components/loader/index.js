import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import Styles from './style';
import {COLOR} from '../../assets/css/colors';
import {GlobalStyle} from '../../assets/css/globalStyle';
import {Imp} from '../../screens/BasicImport';

export const LoaderIndicator = (props) => {
  const {value = 'Please wait...', color = COLOR.APP_THEME} = props;
  const {loading} = true;
  return (
    <View style={[Styles.centerLoader]}>
      <View style={Styles.activityIndicatorWrapper}>
        <ActivityIndicator color={color} size="large" animating={loading} />
        <Text style={[Styles.colorText]}>{value}</Text>
      </View>
    </View>
  );
};

export const NoData = (props) => {
  const {data = Imp.Variable.noDataFound, styleView, styleText} = props;
  return (
    <View style={[GlobalStyle.noDataFound, styleView]}>
      <Text
        style={[
          Styles.container,
          GlobalStyle.fontMedium,
          GlobalStyle.fontBold,
          GlobalStyle.textCenter,
          styleText,
        ]}>
        {data}
      </Text>
    </View>
  );
};

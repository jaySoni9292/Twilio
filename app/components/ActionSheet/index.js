import React, {useRef} from 'react';
import {COLOR} from '../../assets/css/colors';
import {ActionSheetCustom as ActionSheet} from 'react-native-actionsheet';
import Util from '../../utilities/util';
import {GlobalStyle} from '../../assets/css/globalStyle';
import {Text} from 'react-native';

export const ActionSheets = (props) => {
  let {
    title,
    titleStyle,
    message,
    options,
    tintColor,
    cancelButtonIndex = 0,
    destructiveButtonIndex,
    onPress,
    styles,
    forwardedRef,
  } = props;

  return (
    <>
      <ActionSheet
        ref={forwardedRef}
        title={
          <Text
            style={[
              GlobalStyle.textBlack,
              GlobalStyle.textBold,
              GlobalStyle.fontRegular,
              GlobalStyle.fontBold,
              titleStyle,
            ]}>
            {title}
          </Text>
        }
        message={message}
        options={options}
        tintColor={tintColor}
        cancelButtonIndex={cancelButtonIndex}
        destructiveButtonIndex={destructiveButtonIndex}
        onPress={onPress}
        styles={styles}
      />
    </>
  );
};

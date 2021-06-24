import React, {useRef} from 'react';
import {Text} from 'react-native';
import {GlobalStyle} from '../../assets/css/globalStyle';
import OTPTextInput from 'react-native-otp-textinput';
import {COLOR} from '../../assets/css/colors';

export const OtpInput = props => {
  let {
    forwardedRef,
    value,
    onTextChange,
    inputCount = 6,
    selectedInputColor = COLOR.THEME_PINK,
    unselectedInputColor = COLOR.WHITE,
    inputCellLength = 1,
    style,
    textStyle,
    otpLabel,
  } = props;

  return (
    <>
      {otpLabel ? (
        <Text
          style={[
            GlobalStyle.fontMedium,
            GlobalStyle.fontBold,
            {color: COLOR.GRAY},
          ]}>
          {otpLabel}
        </Text>
      ) : null}

      <OTPTextInput
        ref={forwardedRef}
        defaultValue={value}
        handleTextChange={onTextChange}
        inputCount={inputCount}
        tintColor={selectedInputColor}
        offTintColor={unselectedInputColor}
        inputCellLength={inputCellLength}
        containerStyle={style}
        textInputStyle={[
          GlobalStyle.textBold,
          GlobalStyle.fontBig,
          GlobalStyle.textWhite,
          {borderWidth: 1, borderBottomWidth: 1, flex: 1},
          textStyle,
        ]}
      />
    </>
  );
};

{
  /* <OtpInput
  value={otp}
  onTextChange={(value) => {
    setOtp(value);
  }}
/>; */
}

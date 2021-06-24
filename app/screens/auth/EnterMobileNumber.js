import React, { useState, useEffect } from 'react';
import { View, Text, Keyboard, TouchableOpacity, Image } from 'react-native';
import { InputText } from '../../components/TextInput/index';
import { Imp } from '../BasicImport';
import { Checkbox, Icons } from '../../components/Icon';
import { CommonBackground } from '../../../CommonBackground';

function EnterMobileNumber({ props, navigation }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [loader, setLoader] = useState(false);
  const [tc, setTc] = useState(false);

  useEffect(() => { }, []);

  function validateMobile() {
    var regex = '[6-9]{1}[0-9]{9}';
    var regExp = new RegExp(regex);
    if (regExp.test(mobileNumber)) {
      return true;
    } else {
      return false;
    }
  }

  async function onSubmit() {
    Keyboard.dismiss();
    // setLoader(true);
    var collection = {};
    collection.mobileNumber = mobileNumber;
    //   Imp.Util.call_Post_by_URI(Imp.Constant.SIGN_IN, collection, callback);
    Imp.Util.toastMessage(`Otp sent on your mobile number ${mobileNumber}.`);
    // navigation.navigate('Otp', { mobileNumber: mobileNumber });
    navigation.navigate('BottomNavigation', { mobileNumber: mobileNumber });

  }

  function callback(res) {
    setLoader(false);
    if (res?.success) {
      Imp.Util.toastMessage(`Otp sent on your mobile number ${mobileNumber} .`);
      // navigation.navigate('Otp', {mobileNumber: mobileNumber});
      navigation.navigate('BottomNavigation', { mobileNumber: mobileNumber });

    } else if ('data' in res && 'msg' in res?.data) {
      Imp.Util.toastMessage(res?.data?.msg);
    }
  }

  return (
    <CommonBackground loader={loader} kbBehavior={null}>
      <View
        style={[
          Imp.GlobalStyle.alignItemsCenter,
          Imp.GlobalStyle.justifyCenter,
          Imp.GlobalStyle.flex1,
          Imp.GlobalStyle.ph20,
        ]}>
        <View style={[Imp.GlobalStyle.fullWidth]}>
          <Image
            source={Imp.Image.enterMobileNumber}
            style={[
              { height: Imp.Util.rfValue(10), width: Imp.Util.rfValue(10) },
            ]}
            resizeMode="contain"
          />

          <Text
            style={[
              Imp.GlobalStyle.fontBigger,
              Imp.GlobalStyle.fontSemiBold,
              Imp.GlobalStyle.mv20,
              Imp.GlobalStyle.textPink,
            ]}>
            {`Let's Get Started Get \n`}
            <Text
              style={[
                Imp.GlobalStyle.fontMedium,
                Imp.GlobalStyle.fontRegular,
                Imp.GlobalStyle.textWhite,
              ]}>
              {'We will send an OTP to your mobile number.'}
            </Text>
          </Text>

          <View
            style={[
              Imp.GlobalStyle.flexRow,
              Imp.GlobalStyle.fullWidth,
              Imp.GlobalStyle.flex1,
            ]}>
            <InputText
              label={Imp.Variable.mobileNumber}
              value={mobileNumber}
              keyboardType={'phone-pad'}
              maxLength={10}
              onChangeText={value =>
                setMobileNumber(Imp.Util.getOnlyNumber(value))
              }
              styleViewMain={[Imp.GlobalStyle.flex1]}
            />
            <TouchableOpacity
              onPress={() => {
                validateMobile() && tc && onSubmit();
              }}
              activeOpacity={1}>
              <View
                opacity={validateMobile() && tc ? 1 : 0.3}
                style={[
                  Imp.GlobalStyle.ml10,
                  Imp.GlobalStyle.alignItemsCenter,
                  Imp.GlobalStyle.justifyCenter,
                  Imp.GlobalStyle.flex1,
                  Imp.GlobalStyle.themePink,
                  { height: Imp.Util.rfValue(7), width: Imp.Util.rfValue(10) },
                ]}>
                <Icons
                  name="arrow-right"
                  type="material-community"
                  size={Imp.Util.rfValue(5)}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={[
              Imp.GlobalStyle.flexRow,
              Imp.GlobalStyle.justifyBetween,
              Imp.GlobalStyle.alignItemsCenter,
            ]}>
            <Checkbox
              checked={tc}
              onPress={() => setTc(!tc)}
              style={[
                Imp.GlobalStyle.transparentBackground,
                {
                  marginLeft: -Imp.Util.normalize(5),
                  borderWidth: 0,
                  marginRight: Imp.Util.normalize(5),
                },
              ]}
              size={Imp.Util.normalize(12)}
            />
            <View style={[Imp.GlobalStyle.flex1, Imp.GlobalStyle.flexRow]}>
              <Text
                style={[
                  Imp.GlobalStyle.fontSmallest,
                  Imp.GlobalStyle.fontRegular,
                  Imp.GlobalStyle.textWhite,
                  Imp.GlobalStyle.mr5,
                ]}>
                {'I have read and understood the'}
              </Text>
              <TouchableOpacity activeOpacity={1}>
                <Text
                  style={[
                    Imp.GlobalStyle.fontSmallest,
                    Imp.GlobalStyle.fontRegular,
                    Imp.GlobalStyle.textPink,
                  ]}>
                  {'Terms and Privacy Policy'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </CommonBackground>
  );
}

export default EnterMobileNumber;

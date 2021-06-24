import React, {useState, useEffect} from 'react';
import {View, Text, Keyboard, TouchableOpacity, Image} from 'react-native';
import {Imp} from '../BasicImport';
import {Icons} from '../../components/Icon';
import {CommonBackground} from '../../../CommonBackground';
import {useRoute, useNavigation} from '@react-navigation/native';
import {OtpInput} from '../../components/OtpInput';

function Otp({props, navigation}) {
  const [otp, setOtp] = useState('');
  const [loader, setLoader] = useState(false);
  const [forceUpdate, setForceUpdate] = useState();
  const route = useRoute();
  const {mobileNumber} = route.params;

  const [timerCount, setTimer] = useState(60);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(t => {
        t <= 1 && clearInterval(interval);
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [forceUpdate]);

  useEffect(() => {}, []);

  async function onSubmit() {
    Keyboard.dismiss();
    // setLoader(true);
    var collection = {};
    collection.otp = otp;
    //   Imp.Util.call_Post_by_URI(Imp.Constant.SIGN_IN, collection, callback);
    navigation.navigate('Pin');
  }

  function callback(res) {
    setLoader(false);
    if (res?.success) {
      navigation.navigate('Pin');
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
              {height: Imp.Util.rfValue(10), width: Imp.Util.rfValue(10)},
            ]}
            resizeMode="contain"
          />

          <Text
            style={[
              Imp.GlobalStyle.fontBigger,
              Imp.GlobalStyle.fontSemiBold,
              Imp.GlobalStyle.mt20,
              Imp.GlobalStyle.mb5,
              Imp.GlobalStyle.textPink,
            ]}>
            {`Awesome, Thanks!`}
          </Text>

          <View
            style={[
              Imp.GlobalStyle.flex1,
              Imp.GlobalStyle.mb20,
              Imp.GlobalStyle.alignItemsCenter,
              Imp.GlobalStyle.flexRow,
            ]}>
            <Text
              style={[
                Imp.GlobalStyle.fontSmall,
                Imp.GlobalStyle.fontRegular,
                Imp.GlobalStyle.textWhite,
                Imp.GlobalStyle.mr5,
              ]}>
              {`Please enter the OTP sent to ${mobileNumber}`}
            </Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('EnterMobileNumber')}>
              <Text
                style={[
                  Imp.GlobalStyle.fontSmall,
                  Imp.GlobalStyle.fontRegular,
                  Imp.GlobalStyle.textPink,
                ]}>
                {'Edit'}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={[
              Imp.GlobalStyle.flexRow,
              Imp.GlobalStyle.fullWidth,
              Imp.GlobalStyle.flex1,
              Imp.GlobalStyle.alignItemsCenter,
              Imp.GlobalStyle.justifyCenter,
              Imp.GlobalStyle.mb20,
            ]}>
            <OtpInput
              value={otp}
              onTextChange={value => setOtp(value)}
              style={[Imp.GlobalStyle.flex1]}
              textStyle={{height: Imp.Util.rfValue(6)}}
            />
            <TouchableOpacity
              onPress={() => otp.length == 6 && onSubmit()}
              activeOpacity={1}>
              <View
                opacity={otp.length == 6 ? 1 : 0.3}
                style={[
                  Imp.GlobalStyle.ml10,
                  Imp.GlobalStyle.alignItemsCenter,
                  Imp.GlobalStyle.justifyCenter,
                  Imp.GlobalStyle.flex1,
                  Imp.GlobalStyle.themePink,
                  {maxHeight: Imp.Util.rfValue(6), width: Imp.Util.rfValue(10)},
                ]}>
                <Icons
                  name="arrow-right"
                  type="material-community"
                  size={Imp.Util.rfValue(5)}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={[Imp.GlobalStyle.flex1, Imp.GlobalStyle.flexRow]}>
            <Text
              style={[
                Imp.GlobalStyle.fontSmall,
                Imp.GlobalStyle.textWhite,
                Imp.GlobalStyle.mr5,
              ]}>
              {`Didn't receive OTP? ` + (timerCount != 0 ? 'Resend in' : '')}
            </Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                if (timerCount == 0) {
                  setTimer(60);
                  setForceUpdate(Math.random());
                  Imp.Util.toastMessage('OTP is resent on your mobile number.');
                }
              }}>
              <Text
                style={[Imp.GlobalStyle.fontSmall, Imp.GlobalStyle.textPink]}>
                {timerCount == 0 ? 'Resend' : timerCount}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CommonBackground>
  );
}

export default Otp;

import React, {useState, useEffect} from 'react';
import {View, Text, Keyboard, Image} from 'react-native';
import {Imp} from '../BasicImport';
import {CommonBackground} from '../../../CommonBackground';
import {PinInput, PinKeyboard} from 'react-native-awesome-pin';

function Pin({props, navigation}) {
  const [pin, setPin] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {}, []);

  async function onSubmit() {
    Keyboard.dismiss();
    // setLoader(true);
    var collection = {};
    collection.pin = pin;
    //   Imp.Util.call_Post_by_URI(Imp.Constant.SIGN_IN, collection, callback);
    Imp.Util.toastMessage(`Your pin is set to ${pin}.`);
    // navigation.navigate('Otp', {pin: pin});
  }

  function callback(res) {
    setLoader(false);
    if (res?.success) {
    } else if ('data' in res && 'msg' in res?.data) {
      Imp.Util.toastMessage(res?.data?.msg);
    }
  }

  function handlePin(p) {
    if (p != null) {
      if (pin.length < 3 && p != 'back') {
        setPin(pin + p);
      } else if (pin.length == 3 && p != 'back') {
        onSubmit();
        setPin('');
      } else if (p == 'back') {
        setPin(pin.slice(0, -1));
      }
    }
  }

  return (
    <CommonBackground loader={loader} kbBehavior={null}>
      <View
        style={[
          Imp.GlobalStyle.alignItemsCenter,
          Imp.GlobalStyle.justifyBetween,
          Imp.GlobalStyle.flex1,
        ]}>
        <View style={[Imp.GlobalStyle.ph20]}>
          <Image
            source={Imp.Image.logo}
            style={[
              Imp.GlobalStyle.mv20,
              {
                height: Imp.Util.rfValue(20),
                width: Imp.Util.rfValue(20),
                alignSelf: 'center',
              },
            ]}
          />

          <View
            style={[
              Imp.GlobalStyle.alignItemsCenter,
              Imp.GlobalStyle.justifyCenter,
              Imp.GlobalStyle.alignSelfCenter,
            ]}>
            <Text
              style={[
                Imp.GlobalStyle.fontBigger,
                Imp.GlobalStyle.fontSemiBold,
                Imp.GlobalStyle.textCenter,
                Imp.GlobalStyle.textPink,
              ]}>
              {'Please set a PIN \n'}
              <Text
                style={[
                  Imp.GlobalStyle.fontMedium,
                  Imp.GlobalStyle.fontRegular,
                  Imp.GlobalStyle.textCenter,
                  Imp.GlobalStyle.textWhite,
                ]}>
                {
                  'This PIN will be used as a security \n measure to prevent unauthorized access. '
                }
              </Text>
            </Text>
          </View>
        </View>

        <PinInput
          onRef={ref => (pinRef = ref)}
          numberOfPins={4}
          numberOfPinsActive={pin.length}
          pinStyle={{
            borderColor: Imp.COLOR.WHITE,
            borderWidth: 1,
          }}
          pinActiveStyle={{
            backgroundColor: Imp.COLOR.THEME_PINK,
            borderColor: Imp.COLOR.WHITE,
            borderWidth: 1,
          }}
        />

        <PinKeyboard
          onRef={ref => (pinRef = ref)}
          keyDown={handlePin}
          //   keyStyle={{backgroundColor: 'red'}}
          //   keyTextStyle={{color:'#fff'}}
          keyboard={[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [null, 0, Imp.Image.backspace],
          ]}
        />
      </View>
    </CommonBackground>
  );
}

export default Pin;

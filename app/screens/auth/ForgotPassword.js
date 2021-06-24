import React, {useEffect, useContext, useState, useRef} from 'react';
import {
  View,
  StatusBar,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import {AuthContext} from '../../reducer/context';
import {Style} from './Style';
import {useNavigation} from '@react-navigation/native';
import {InputText} from '../../components/TextInput/index';
import {
  ButtonCustom,
  LinkButton,
  ErrorText,
} from '../../components/Button/index';
import SimpleReactValidator from 'simple-react-validator';
import {Imp} from '../BasicImport';
import {Icons, Checkbox} from '../../components/Icon';
import {ShowBottomModal} from '../../components/ShowModal/ShowBottomModal';
import {OtpInput} from '../../components/OtpInput/index';
import {CircleImage} from '../../components/CircleImage/CircleImage';
import {LoaderIndicator} from '../../components/loader';

const ForgotPassword = (props) => {
  // const context = useContext(AuthContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState('1234');
  const [loader, setLoader] = useState(false);
  const [, forceUpdate] = useState();
  const simpleValidator = useRef(
    new SimpleReactValidator({
      validators: {
        emailAddress: {
          message: 'attribute must be a valid email address.',
          rule: (val, params, validator) => {
            return (
              validator.helpers.testRegex(
                val,
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              ) && params.indexOf(val) === -1
            );
          },
        },
        password: {
          message:
            'Password must contain at lest 1 small letter, 1 capital letter and 1 number',
          rule: (val, params, validator) => {
            return (
              validator.helpers.testRegex(
                val,
                /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
              ) && params.indexOf(val) === -1
            );
          },
        },
      },
      messages: {
        regex: 'password must contain alphanumeric value',
        in: 'New Password and Confirm Password not matched',
      },
      autoForceUpdate: {forceUpdate: () => forceUpdate(1)},
    }),
  );

  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, []);

  async function onSubmit() {
    Keyboard.dismiss();
    if (simpleValidator.current.allValid()) {
      setLoader(true);
      var collection = {};
      collection.email = email;
      // Imp.Util.call_Post_by_URI(
      //   Imp.Constant.FORGOT_PASSWORD,
      //   collection,
      //   callback,
      // );
    } else {
      simpleValidator.current.showMessages();
      simpleValidator.current.autoForceUpdate();
    }
  }

  async function callback(res) {
    setLoader(false);
    if (res?.success) {
      navigation.navigate('Login');
    } else {
    }
    'message' in res && res?.message
      ? Imp.Util.toastMessage(res.message)
      : Imp.Util.toastMessage(Imp.Variable.gettingSomeError);
  }

  function areYou18Plus() {
    return (
      <ScrollView
        style={{
          width: '100%',
          backgroundColor: Imp.COLOR.APP_THEME,
          padding: Imp.Util.normalize(20),
          paddingTop: Imp.Util.normalize(20),
        }}>
        <Text
          style={[
            Imp.GlobalStyle.fontBigger,
            Imp.GlobalStyle.fontBold,
            Imp.GlobalStyle.textWhite,
            Imp.GlobalStyle.ml10,
            Imp.GlobalStyle.mb10,
          ]}>
          {Imp.Variable.plus18}
        </Text>
        <View style={[Imp.GlobalStyle.flexRow, Imp.GlobalStyle.justifyCenter]}>
          <ButtonCustom
            label={Imp.Variable.yes}
            onPress={() => {
              alert('Yes');
            }}
            styleView={[
              {
                flex: 1,
                height: Imp.Util.normalize(40),
                borderRadius: Imp.Util.normalize(30),
                borderWidth: Imp.Util.normalize(3),
                borderColor: Imp.COLOR.APP_THEME,
                backgroundColor: Imp.COLOR.APP_THEME,
                margin: Imp.Util.normalize(10),
              },
            ]}
          />
          <ButtonCustom
            label={Imp.Variable.no}
            onPress={() => {
              alert('No');
            }}
            styleView={[
              {
                flex: 1,
                height: Imp.Util.normalize(40),
                borderRadius: Imp.Util.normalize(30),
                borderWidth: Imp.Util.normalize(3),
                borderColor: Imp.COLOR.APP_THEME,
              },
            ]}
          />
        </View>
      </ScrollView>
    );
  }

  function verificationCode() {
    return (
      <ScrollView
        style={{
          width: '100%',
          backgroundColor: Imp.COLOR.APP_THEME,
          padding: Imp.Util.normalize(20),
          paddingTop: Imp.Util.normalize(20),
        }}>
        <Text
          style={[
            Imp.GlobalStyle.fontBigger,
            Imp.GlobalStyle.fontBold,
            Imp.GlobalStyle.textWhite,
            Imp.GlobalStyle.ml10,
            Imp.GlobalStyle.mb10,
          ]}>
          {Imp.Variable.verificationCode}
        </Text>

        <Text
          style={[
            Imp.GlobalStyle.fontMedium,
            Imp.GlobalStyle.fontRegular,
            Imp.GlobalStyle.textGreen,
            Imp.GlobalStyle.ml10,
            Imp.GlobalStyle.mb10,
          ]}>
          {Imp.Variable.verificationCodeMessage + '(+123) 18207-15460'}
        </Text>

        <OtpInput
          value={otp}
          onTextChange={(value) => {
            setOtp(value);
          }}
          style={[Imp.GlobalStyle.ml10, Imp.GlobalStyle.mb10, {width: '50%'}]}
        />

        <View style={[Imp.GlobalStyle.flexRow, Imp.GlobalStyle.justifyCenter]}>
          <ButtonCustom
            label={Imp.Variable.verified}
            onPress={() => {
              callVerification();
            }}
            styleView={[
              {
                flex: 1,
                height: Imp.Util.normalize(40),
                borderRadius: Imp.Util.normalize(30),
                borderWidth: Imp.Util.normalize(3),
                borderColor: Imp.COLOR.APP_THEME,
                backgroundColor: Imp.COLOR.APP_THEME,
                margin: Imp.Util.normalize(10),
              },
            ]}
          />
          <ButtonCustom
            label={Imp.Variable.resend}
            onPress={() => {
              alert('Resend');
            }}
            styleView={[
              {
                flex: 1,
                height: Imp.Util.normalize(40),
                borderRadius: Imp.Util.normalize(30),
                borderWidth: Imp.Util.normalize(3),
                borderColor: Imp.COLOR.APP_THEME,
              },
            ]}
          />
        </View>
      </ScrollView>
    );
  }

  function congratulations() {
    return (
      <ScrollView
        style={{
          // height: Imp.Util.normalize(150),
          width: '100%',
          backgroundColor: Imp.COLOR.APP_THEME,
          padding: Imp.Util.normalize(20),
          paddingTop: Imp.Util.normalize(20),
        }}>
        <Text
          style={[
            Imp.GlobalStyle.fontBigger,
            Imp.GlobalStyle.fontBold,
            Imp.GlobalStyle.textWhite,
            Imp.GlobalStyle.ml10,
            Imp.GlobalStyle.mb10,
            Imp.GlobalStyle.textCenter,
          ]}>
          {Imp.Variable.congratulations}
        </Text>

        <Text
          style={[
            Imp.GlobalStyle.fontMedium,
            Imp.GlobalStyle.fontRegular,
            Imp.GlobalStyle.textGreen,
            Imp.GlobalStyle.ml10,
            Imp.GlobalStyle.mb10,
            Imp.GlobalStyle.textCenter,
          ]}>
          {Imp.Variable.congratulationsMessage}
        </Text>

        {/*  transform: [{ rotate: “45deg” }] */}

        <CircleImage
          size={Imp.Util.normalize(100)}
          symbolSize={Imp.Util.normalize(50)}
          iconType={'font-awesome-5'}
          name={'crown'}
          isCrown={true}
          iconStyle={{transform: [{rotate: '45deg'}]}}
          img={{
            uri:
              'https://i.pinimg.com/originals/12/e4/14/12e4144db4ba587c0c191d1b492bf262.jpg',
          }}
          style={[Imp.GlobalStyle.mv10]}
        />

        <Text
          style={[
            Imp.GlobalStyle.fontBigger,
            Imp.GlobalStyle.fontBold,
            Imp.GlobalStyle.textWhite,
            Imp.GlobalStyle.ml10,
            Imp.GlobalStyle.mb10,
            Imp.GlobalStyle.textCenter,
          ]}>
          {'Millie Doyle'}
        </Text>

        <Text
          style={[
            Imp.GlobalStyle.fontMedium,
            Imp.GlobalStyle.fontRegular,
            Imp.GlobalStyle.textGreen,
            Imp.GlobalStyle.ml10,
            Imp.GlobalStyle.mb10,
            Imp.GlobalStyle.textCenter,
          ]}>
          {Imp.Variable.totalDrinks}
          {': '}
          <Text
            style={[
              Imp.GlobalStyle.fontBig,
              Imp.GlobalStyle.fontBold,
              Imp.GlobalStyle.textYellow,
              Imp.GlobalStyle.textCenter,
            ]}>
            {'5' + ' ' + Imp.Variable.drinks.toLowerCase()}
          </Text>
        </Text>

        <Text
          style={[
            Imp.GlobalStyle.fontMedium,
            Imp.GlobalStyle.fontRegular,
            Imp.GlobalStyle.textGreen,
            Imp.GlobalStyle.ml10,
            Imp.GlobalStyle.mb10,
            Imp.GlobalStyle.textCenter,
          ]}>
          {Imp.Variable.drinkMoreMessage}
        </Text>

        <View style={[Imp.GlobalStyle.flexRow, Imp.GlobalStyle.justifyCenter]}>
          <ButtonCustom
            label={Imp.Variable.shareWithFriends}
            onPress={() => {
              alert('Shared');
            }}
            styleView={[
              {
                flex: 1,
                height: Imp.Util.normalize(40),
                borderRadius: Imp.Util.normalize(30),
                borderWidth: Imp.Util.normalize(3),
                borderColor: Imp.COLOR.APP_THEME,
                backgroundColor: Imp.COLOR.APP_THEME,
                margin: Imp.Util.normalize(10),
              },
            ]}
          />
        </View>
      </ScrollView>
    );
  }

  async function callVerification() {
    Keyboard.dismiss();
    if (otp && !(otp.length < 4)) {
      setLoader(true);
      var collection = {};
      collection.otp = otp;
      // Imp.Util.call_Post_by_URI(
      //   Imp.Constant.OTP_VERIFICATION,
      //   collection,
      //   verificationCallback,
      // );
    } else {
      otp
        ? Imp.Util.toastMessage(Imp.Variable.validOtp)
        : Imp.Util.toastMessage(Imp.Variable.otpMessage);
    }
  }

  async function verificationCallback(res) {
    setLoader(false);
    if (res?.success) {
    } else {
    }
    'message' in res && res?.message
      ? Imp.Util.toastMessage(res.message)
      : Imp.Util.toastMessage(Imp.Variable.gettingSomeError);
  }

  return (
    <>
      {loader && <LoaderIndicator />}
      <View style={Imp.GlobalStyle.viewStyle}>
        <StatusBar
          hidden={false}
          backgroundColor={Imp.COLOR.APP_THEME}
          barStyle="default"
        />
        <ImageBackground style={Style.container}>
          <ScrollView
            style={[Style.innerView]}
            showsVerticalScrollIndicator={false}>
            <View
              style={[
                Imp.GlobalStyle.fullWidth,
                Imp.GlobalStyle.alignItemsCenter,
              ]}>
              <Animatable.View animation="fadeInDownBig">
                <Image
                  resizeMode={'contain'}
                  style={[Style.logoStyle, {tintColor: Imp.COLOR.APP_THEME}]}
                  source={Imp.Image.logo}
                />
              </Animatable.View>
            </View>

            <View style={[{width: '85%', alignSelf: 'center'}]}>
              <InputText
                label={Imp.Variable.email}
                value={email}
                onChangeText={(text) => setEmail(text)}
                styleView={[Imp.GlobalStyle.mt15]}
                maxLength={50}
              />

              <ErrorText
                label={simpleValidator.current.message(
                  'email',
                  email,
                  'required|email',
                )}
              />

              <Animatable.View animation="fadeInUpBig">
                <ButtonCustom
                  label={Imp.Variable.submit}
                  onPress={() => {
                    onSubmit();
                    // setShowModal(true);
                  }}
                  styleView={[
                    {
                      width: '100%',
                      height: Imp.Util.normalize(45),
                      borderRadius: Imp.Util.normalize(30),
                    },
                  ]}
                />
              </Animatable.View>
            </View>

            <ShowBottomModal
              showModal={showModal}
              closeModal={() => {
                setShowModal(false);
              }}
              closeOnOutside={true}
              modal={verificationCode()}
            />
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
};

export default ForgotPassword;

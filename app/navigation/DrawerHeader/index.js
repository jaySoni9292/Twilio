import React from 'react';
import {Keyboard, TouchableOpacity, Text, Image, View} from 'react-native';
import {Icons} from '../../components/Icon/index';
import {useNavigation} from '@react-navigation/native';
import {Imp} from '../../screens/BasicImport';

export function HeaderLeft(props) {
  const navigation = useNavigation();
  const {color = Imp.COLOR.WHITE, menu = true} = props;
  return (
    <>
      {menu ? (
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            menu ? navigation.toggleDrawer() : navigation.goBack();
          }}>
          <Image
            source={Imp.Image.logo}
            style={[
              {
                marginLeft: Imp.Util.normalize(15),
                width: Imp.Util.normalize(25),
                height: Imp.Util.normalize(25),
                tintColor: color,
              },
            ]}
          />
        </TouchableOpacity>
      ) : (
        <Icons
          type={menu ? 'entypo' : 'ionicon'}
          color={color}
          name={menu ? 'menu' : 'chevron-back'}
          size={Imp.Util.normalize(20)}
          style={[{marginLeft: Imp.Util.normalize(10)}]}
          onPress={() => {
            Keyboard.dismiss();
            menu ? navigation.toggleDrawer() : navigation.goBack();
          }}
        />
      )}
    </>
  );
}

export function HeaderRight(props) {
  const {navigate} = useNavigation();
  const {onPress, showEdit = true, showAccount = true} = props;
  return (
    <View style={[Imp.GlobalStyle.flexRow, Imp.GlobalStyle.alignItemsCenter]}>
      {showEdit && (
        <TouchableOpacity activeOpacity={1} onPress={onPress}>
          <Image
            source={Imp.Image.logo}
            style={[
              {
                height: Imp.Util.normalize(15),
                width: Imp.Util.normalize(15),
                marginRight: Imp.Util.normalize(15),
              },
            ]}
          />
        </TouchableOpacity>
      )}
      {showAccount && (
        <Icons
          type={'material-community'}
          name={'account-circle'}
          color={Imp.COLOR.WHITE}
          size={Imp.Util.normalize(20)}
          style={[{marginRight: Imp.Util.normalize(15)}]}
          onPress={() => {
            Keyboard.dismiss();
            navigate('MyAccount');
          }}
        />
      )}
    </View>
  );
}

export function HeaderTitle(props) {
  const {title, color = Imp.COLOR.WHITE} = props;
  return (
    <>
      {title ? (
        <Text
          style={[
            Imp.GlobalStyle.fontBig,
            Imp.GlobalStyle.fontBold,
            Imp.GlobalStyle.textWhite,
            Imp.GlobalStyle.textUppercase,
            {color: color},
          ]}>
          {title}
        </Text>
      ) : (
        <Image
          style={[
            {height: Imp.Util.normalize(40), width: Imp.Util.normalize(100)},
          ]}
          source={Imp.Image.logo}
          resizeMode="contain"
        />
      )}
    </>
  );
}

export function setNavigation(
  navigation,
  onPress,
  title,
  menu = true,
  right = true,
  showEdit = true,
  showAccount = true,
  color = Imp.COLOR.WHITE,
  backgroundColor = Imp.COLOR.APP_THEME,
  headerTitleAlign = 'left',
) {
  navigation.setOptions({
    headerTitle: <HeaderTitle title={title} />,
    headerTitleAlign: headerTitleAlign,
    headerRight: () =>
      right && (
        <HeaderRightEdit
          onPress={onPress}
          showEdit={showEdit}
          showAccount={showAccount}
        />
      ),
    headerLeft: () => <HeaderLeft menu={menu} color={color} />,
    headerShown: true,
    animationEnabled: false,
    headerStyle: {
      backgroundColor: backgroundColor,
      height: Imp.Util.getHeight(8),
    },
  });
}

export function setNavigationCustom(
  navigation,
  title,
  bottomTitle,
  onPress,
  menu = false,
  right = true,
  color = Imp.COLOR.WHITE,
  backgroundColor = Imp.COLOR.APP_THEME,
) {
  navigation.setOptions({
    headerShown: true,
    animationEnabled: false,
    header: ({scene, previous, navigation}) => {
      const {options} = scene.descriptor;
      return (
        <View
          style={{
            backgroundColor: Imp.COLOR.WHITE,
            width: '100%',
            height: Imp.Util.getHeight(8),
          }}>
          <View
            style={{
              backgroundColor: backgroundColor,
              width: '100%',
              height: '100%',
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <HeaderLeft menu={menu} color={color} />
            <View
              style={[
                Imp.GlobalStyle.flex1,
                {paddingHorizontal: Imp.Util.normalize(15)},
              ]}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[
                  Imp.GlobalStyle.fontRegular,
                  Imp.GlobalStyle.fontSemiBold,
                  Imp.GlobalStyle.textWhite,
                  Imp.GlobalStyle.textUppercase,
                  Imp.GlobalStyle.mb5,
                  {color: color},
                ]}>
                {title}
              </Text>
              {bottomTitle && (
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={[
                    Imp.GlobalStyle.fontSmall,
                    Imp.GlobalStyle.fontRegular,
                    Imp.GlobalStyle.textWhite,
                    Imp.GlobalStyle.textCapitalize,
                    {color: color},
                  ]}>
                  {bottomTitle}
                </Text>
              )}
            </View>
            {right && <HeaderRightEdit onPress={onPress} />}
          </View>
        </View>
      );
    },
  });
}

import {StyleSheet} from 'react-native';
import Util from '../../utilities/util';
import {COLOR} from '../../assets/css/colors';
import {GlobalStyle} from '../../assets/css/globalStyle';

export const Style = StyleSheet.create({
  container: {
    width: '100%',
    height: Util.normalize(50),
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: COLOR.APP_THEME,
    margin: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    padding: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    // backgroundColor:"red"
  },
  inputHolder: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    height: Util.rfValue(7),
    borderWidth: 2,
    borderColor: COLOR.THEME_PINK,
    // marginBottom: Util.normalize(20),
    // paddingBottom: Util.normalize(5),
  },
  inputText: {
    color: COLOR.WHITE,
    marginHorizontal: Util.rfValue(1),
  },
  inputLabelStyle: {
    color: COLOR.GRAY,
    fontSize: Util.normalize(14),
    marginVertical: Util.normalize(10),
  },
});

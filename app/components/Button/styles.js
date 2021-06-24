import {StyleSheet} from 'react-native';
import Util from '../../utilities/util';
import {COLOR} from '../../assets/css/colors';

export const Style = StyleSheet.create({
  buttonText: {
    color: COLOR.WHITE,
    width: '100%',
    textAlign: 'center',
  },
  tbRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  font14: {
    fontSize: Util.normalize(1),
  },
  themeButton: {
    justifyContent: 'center',
    borderRadius: Util.normalize(20),
    backgroundColor: COLOR.APP_THEME,
    minWidth: Util.getWidth(20),
    height: Util.normalize(20),
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: Util.normalize(10),
  },
  button: {
    justifyContent: 'center',
    borderRadius: Util.normalize(10),
    backgroundColor: COLOR.APP_THEME,
    width: '100%',
    height: Util.normalize(50),
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: Util.normalize(10),
  },
  buttonText: {
    fontWeight: '700',
    color: COLOR.WHITE,
    textAlign: 'center',
    alignSelf: 'center',
  },
  iconLeft: {
    width: Util.normalize(15),
    height: Util.normalize(15),
    marginLeft: Util.normalize(15),
    marginRight: Util.normalize(5),
  },
  iconRight: {
    // width: Util.normalize(15),
    // height: Util.normalize(15),
    // marginRight: Util.normalize(15),
    // marginLeft: Util.normalize(5),
    marginHorizontal: 20,
    // backgroundColor:'red'
  },
  facebookButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fbButtonText: {
    color: COLOR.WHITE,
    fontSize: Util.normalize(14),
  },
  fbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Util.normalize(5),
    backgroundColor: COLOR.facebookTheme,
    overflow: 'hidden',
    borderRadius: Util.normalize(5),
    width: Util.normalize(200),
  },
  fb: {
    color: COLOR.WHITE,
    fontSize: Util.normalize(40),
    marginBottom: -Util.normalize(15),
    overflow: 'hidden',
    marginHorizontal: Util.normalize(12),
  },
});

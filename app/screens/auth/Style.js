import {Platform, StyleSheet} from 'react-native';
import {COLOR} from '../../assets/css/colors';
import {Imp} from '../BasicImport';

export const Style = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashLogo: {
    height: Imp.Util.getHeight(30),
    width: Imp.Util.getWidth(50),
  },
  container: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  logoStyle: {
    height: Imp.Util.getHeight(40),
    width: Imp.Util.getWidth(40),
  },
  congoImageStyle: {
    alignSelf: 'center',
  },
  curveImageStyle: {
    height: Imp.Util.getHeight(8),
    width: '100%',
  },
  innerView: {
    flex: 1,
    backgroundColor: COLOR.themeDark,
  },
  user: {
    borderRadius: Imp.Util.normalize(10),
    borderWidth: Imp.Util.normalize(3),
    shadowRadius: Imp.Util.normalize(5),
    alignSelf: 'center',
    shadowOffset: {width: 10, height: 10},
    shadowColor: Imp.COLOR.GRAY,
    shadowOpacity: 1,
    height: Imp.Util.normalize(110),
    width: Imp.Util.normalize(110),
  },
  iconCheck: {
    position: 'absolute',
    top: Imp.Util.normalize(-12),
    right: Imp.Util.normalize(-12),
    backgroundColor: Imp.COLOR.TRANSPARENT,
    overflow: 'hidden',
  },
  socialButton: {
    borderRadius: Imp.Util.normalize(45),
    width: Imp.Util.normalize(45),
    height: Imp.Util.normalize(45),
    justifyContent: 'center',
    alignItems: 'center',
    padding: Imp.Util.normalize(5),
    margin: Imp.Util.normalize(10),
    backgroundColor: Imp.COLOR.WHITE,
    shadowOffset: {
      width: Platform.OS === 'android' ? 0 : 5,
      height: Platform.OS === 'android' ? 2 : 5,
    },
    shadowOpacity: Platform.OS === 'android' ? 0.9 : 0.2,
    shadowRadius: 3,
    elevation: Platform.OS === 'android' ? 5 : 0,
  },
  socialButton: {
    borderRadius: Imp.Util.normalize(45),
    width: Imp.Util.normalize(45),
    height: Imp.Util.normalize(45),
    justifyContent: 'center',
    alignItems: 'center',
    padding: Imp.Util.normalize(5),
    margin: Imp.Util.normalize(10),
    backgroundColor: Imp.COLOR.WHITE,
    shadowOffset: {
      width: Platform.OS === 'android' ? 0 : 5,
      height: Platform.OS === 'android' ? 2 : 5,
    },
    shadowOpacity: Platform.OS === 'android' ? 0.9 : 0.4,
    shadowRadius: 3,
    shadowColor:'#000',
    elevation: Platform.OS === 'android' ? 5 : 0,
  },
});

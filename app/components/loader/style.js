import {StyleSheet} from 'react-native';
import {COLOR} from '../../assets/css/colors';
import Util from '../../utilities/util';

export default StyleSheet.create({
  activityIndicatorWrapper: {
    backgroundColor: 'transparent',
    height: 100,
    width: '100%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  centerLoader: {
    flex: 1,
    position: 'absolute',
    height: Util.getTotalHeight(),
    width: Util.getTotalWidth(),
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#00000080',
    zIndex: 1000,
  },
  colorText: {
    color: COLOR.APP_THEME,
  },
  maincontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    fontWeight: 'bold',
    color: COLOR.BLACK,
    textAlignVertical: 'center',
  },
});

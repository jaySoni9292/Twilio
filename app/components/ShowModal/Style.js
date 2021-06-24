import {StyleSheet} from 'react-native';
import {COLOR} from '../../assets/css/colors';
import Util from '../../utilities/util';

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: COLOR.TRANSPARENT_BLACK,
  },
  innerContainer: {
    alignSelf: 'center',
    width: '80%',
    backgroundColor: COLOR.WHITE,
    justifyContent: 'center',
    maxHeight: Util.normalize(400),
    zIndex: 1000,
    borderRadius: Util.normalize(10),
  },
  bottomContainer: {
    overflow: 'hidden',
    width: '100%',
    borderTopLeftRadius: Util.normalize(20),
    borderTopRightRadius: Util.normalize(20),
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderRadius: 0,
  },
});

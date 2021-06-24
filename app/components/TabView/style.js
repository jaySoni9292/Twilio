import {StyleSheet} from 'react-native';
import Util from '../../utilities/util';
import {COLOR} from '../../assets/css/colors';
import {GlobalStyle} from '../../assets/css/globalStyle';

export default StyleSheet.create({
  titleStyle: {
    width: '100%',
    height: '100%',
    textAlignVertical: 'center',
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
    borderWidth: 1,
    borderColor: COLOR.themeColor,
    borderRadius: Util.normalize(5),
  },
  selectedTitleStyles: {
    backgroundColor: COLOR.themeColor,
    color: COLOR.white,
  },
  tabViewStyles: {marginVertical: 5, marginHorizontal: 5},
  tabContainerStyle: {
    width: '100%',
    height: Util.normalize(5),
    alignItems: 'center',
    justifyContent: 'center',
    margin: Util.normalize(2),
  },
});

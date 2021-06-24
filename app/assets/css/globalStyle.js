import Util from '../../utilities/util';
import {COLOR} from './colors';

export const GlobalStyle = {
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  footerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  errorTextColor: {
    color: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  errorContainer: {},
  btnStyle: {
    // height: 55,
    height: Util.getHeight(6.5),
    width: Util.getWidth(80),
  },
  btnTextStyle: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: Util.normalize(14),
    lineHeight: 19,
  },
  searchInput: {
    width: Util.getWidth(80),
    borderColor: COLOR.APP_THEME,
    elevation: 0.5,
    shadowColor: COLOR.APP_THEME,
    alignSelf: 'center',
    fontSize: Util.normalize(28),
    borderWidth: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  fontBold: {
    fontFamily: 'Poppins-Bold',
    includeFontPadding: false,
    // fontWeight: 'bold',
  },
  fontItalic: {
    fontFamily: 'Poppins-Italic',
    includeFontPadding: false,
    color: COLOR.RED,
  },
  fontSemiBold: {
    fontFamily: 'Poppins-SemiBold',
    includeFontPadding: false,
  },
  fontExtraLight: {
    fontFamily: 'Poppins-Thin',
    includeFontPadding: false,
  },
  fontLight: {
    fontFamily: 'Poppins-Light',
    includeFontPadding: false,
  },
  fontRegular: {
    fontFamily: 'Poppins-Regular',
    includeFontPadding: false,
  },
  errorText: {
    color: 'red',
    textAlign: 'left',
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  font60: {
    fontSize: Util.normalize(12),
  },
  font55: {
    fontSize: Util.normalize(7),
  },
  font30: {
    fontSize: Util.normalize(4.6),
  },
  font28: {
    fontSize: Util.normalize(4.4),
  },
  font26: {
    fontSize: Util.normalize(3.2),
  },
  font24: {
    fontSize: Util.normalize(3),
  },
  font22: {
    fontSize: Util.normalize(2.8),
  },
  font20: {
    fontSize: Util.normalize(2.6),
  },
  font18: {
    fontSize: Util.normalize(2.4),
  },
  font17: {
    fontSize: Util.normalize(2.2),
  },
  font16: {
    fontSize: Util.normalize(2),
  },
  font14: {
    fontSize: Util.normalize(1.8),
  },
  font12: {
    fontSize: Util.normalize(1.6),
  },
  font10: {
    fontSize: Util.normalize(1.4),
  },
  textBold: {
    fontWeight: 'bold',
  },
  heading1: {
    fontSize: Util.normalize(4),
  },
  heading2: {
    fontSize: Util.normalize(2.4),
  },
  heading3: {
    fontSize: Util.normalize(2.2),
  },
  heading4: {
    fontSize: Util.normalize(2),
  },
  textTheme: {
    color: COLOR.APP_THEME,
  },
  textPink: {
    color: COLOR.THEME_PINK,
  },
  textWhite: {
    color: COLOR.WHITE,
  },
  textWarning: {
    color: COLOR.WHITE,
  },
  textGreen: {
    color: COLOR.THEME_GREEN,
  },
  textBlue: {
    color: COLOR.WHITE,
  },
  textYellow: {
    color: COLOR.WHITE,
  },
  textThemeGray: {
    color: COLOR.WHITE,
  },
  textRed: {
    color: COLOR.RED,
  },
  textMaroon: {
    color: COLOR.WHITE,
  },
  textGrey: {
    color: COLOR.GRAY,
  },
  textGrayDark: {
    color: COLOR.WHITE,
  },
  textOrange: {
    color: COLOR.WHITE,
  },
  textLightGray: {
    color: COLOR.WHITE,
  },
  textDarkGray: {
    color: COLOR.TEXT_DARK,
  },
  textBlack: {
    color: COLOR.BLACK,
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  textCapitalize: {
    textTransform: 'capitalize',
  },
  m1: {
    margin: Util.normalize(0.1),
  },
  m2: {
    margin: Util.normalize(0.5),
  },
  m3: {
    margin: Util.normalize(1),
  },
  m4: {
    margin: 4,
  },
  m5: {
    margin: 5,
  },
  m6: {
    margin: 6,
  },
  m7: {
    margin: 7,
  },
  m8: {
    margin: 8,
  },
  m9: {
    margin: 9,
  },
  m10: {
    margin: Util.normalize(10),
  },
  m11: {
    margin: Util.normalize(4),
  },
  mt0: {
    marginTop: 0,
  },
  mt1: {
    marginTop: Util.normalize(0.5),
  },
  mb0: {
    marginBottom: 0,
  },
  mb1: {
    marginBottom: Util.normalize(0.5),
  },
  ml1: {
    marginLeft: Util.normalize(0.5),
  },
  mr1: {
    marginRight: Util.normalize(0.5),
  },
  mt2: {
    marginTop: Util.normalize(2),
  },
  mb2: {
    marginBottom: 2,
  },
  ml2: {
    marginLeft: 2,
  },
  mr2: {
    marginRight: Util.normalize(2),
  },
  mt3: {
    marginTop: Util.normalize(3),
  },
  mb3: {
    marginBottom: Util.normalize(1),
  },
  mh3: {
    marginHorizontal: Util.normalize(3),
  },
  mh5: {
    marginHorizontal: Util.normalize(5),
  },
  mh10: {
    marginHorizontal: Util.normalize(10),
  },
  mh20: {
    marginHorizontal: Util.normalize(20),
  },
  ph20: {
    paddingHorizontal: Util.normalize(20),
  },
  ph10: {
    paddingHorizontal: Util.normalize(10),
  },
  pt20: {
    paddingTop: Util.normalize(20),
  },
  mh2: {
    marginHorizontal: Util.normalize(0.5),
  },
  mv0: {
    marginVertical: 0,
  },
  mv3: {
    marginVertical: Util.normalize(3),
  },
  mv5: {
    marginVertical: Util.normalize(5),
  },
  mv8: {
    marginVertical: Util.normalize(8),
  },
  mv10: {
    marginVertical: Util.normalize(10),
  },
  mv15: {
    marginVertical: Util.normalize(15),
  },
  mv20: {
    marginVertical: Util.normalize(20),
  },
  mv2: {
    marginVertical: 2,
  },
  pb2: {
    paddingBottom: 2,
  },
  ml3: {
    marginLeft: Util.normalize(1),
  },
  mr3: {
    marginRight: Util.normalize(3),
  },
  mt4: {
    marginTop: Util.normalize(4),
  },
  mb4: {
    marginBottom: Util.normalize(1.2),
  },
  ml4: {
    marginLeft: Util.normalize(1.2),
  },
  mr4: {
    marginRight: Util.normalize(1.2),
  },
  mt5: {
    marginTop: Util.normalize(5),
  },
  mb5: {
    marginBottom: Util.normalize(3),
  },
  ml5: {
    marginLeft: Util.normalize(5),
  },
  mr5: {
    marginRight: Util.normalize(5),
  },
  mt10: {
    marginTop: Util.normalize(10),
  },
  mb10: {
    marginBottom: Util.normalize(10),
  },
  ml10: {
    marginLeft: Util.normalize(10),
  },
  mr10: {
    marginRight: Util.normalize(10),
  },
  mt12: {
    marginTop: 12,
  },
  mb12: {
    marginBottom: 12,
  },
  ml12: {
    marginLeft: 12,
  },
  mr12: {
    marginRight: 12,
  },
  mt15: {
    marginTop: Util.normalize(15),
  },
  mt20: {
    marginTop: Util.normalize(20),
  },
  mb20: {
    marginBottom: Util.normalize(20),
  },
  mb15: {
    marginBottom: Util.normalize(15),
  },
  ml15: {
    marginLeft: Util.normalize(15),
  },
  ml16: {
    marginLeft: Util.normalize(16),
  },
  ml17: {
    marginLeft: Util.normalize(17),
  },
  mr15: {
    marginRight: Util.normalize(15),
  },
  mt50: {
    marginTop: 40,
  },
  mb50: {
    marginBottom: 40,
  },
  ml50: {
    marginLeft: 40,
  },
  mr50: {
    marginRight: 40,
  },
  p10: {
    padding: 10,
  },
  p20: {
    padding: Util.normalize(20),
  },
  p0: {
    padding: 0,
  },
  p1: {
    padding: 1,
  },
  pv10: {
    paddingVertical: 10,
  },
  pv20: {
    paddingVertical: 20,
  },
  pv3: {
    paddingVertical: 3,
  },
  pv5: {
    paddingVertical: Util.normalize(5),
  },
  pv0: {
    paddingVertical: 0,
  },
  ph5: {
    paddingHorizontal: 5,
  },
  p5: {
    padding: Util.normalize(5),
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  textCenter: {
    textAlign: 'center',
  },
  textAlignVerticalCenter: {textAlignVertical: 'center'},
  displayFlex: {
    display: 'flex',
  },
  displayNone: {
    display: 'none',
  },
  alignContentStart: {
    alignContent: 'flex-start',
  },
  alignContentEnd: {
    alignContent: 'flex-end',
  },
  alignContentStretch: {
    alignContent: 'stretch',
  },
  alignContentCenter: {
    alignContent: 'center',
  },
  alignContentBetween: {
    alignContent: 'space-between',
  },
  alignContentAround: {
    alignContent: 'space-around',
  },
  alignSelfAuto: {
    alignSelf: 'auto',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfStretch: {
    alignSelf: 'stretch',
  },
  alignSelfBase: {
    alignSelf: 'baseline',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexNowrap: {
    flexWrap: 'nowrap',
  },
  flexWrapReverse: {
    flexWrap: 'wrap-reverse',
  },
  posAbsolute: {
    position: 'absolute',
  },
  posAbsolute: {
    position: 'relative',
  },
  objectCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  boxContainer: {
    flex: 1,
    paddingHorizontal: 10,
    width: '100%',
  },
  lgCard: {
    marginTop: 10,
    width: Util.normalize(18),
    alignContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: COLOR.WHITE,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  innerBg: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  pageBackground: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  formGroup: {
    width: '100%',
    marginBottom: 5,
  },
  inputHolder: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    flex: 1,
    paddingVertical: 0,
  },
  inputImg: {
    width: 25,
    // resizeMode: "contain",
    // position: "absolute",
    // left: 5,
  },
  inputRight: {
    width: 25,
    margin: '5%',
  },
  labelBtn: {
    height: 30,
  },
  solidBtn: {
    height: 50,
    width: '90%',
  },
  roundBtn: {
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.WHITE,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  dashboardBlock: {
    padding: 10,
    borderRadius: 5,
  },
  dashPrl: {
    backgroundColor: '#6D80FF',
  },
  dashBlue: {
    backgroundColor: '#3ECAFF',
  },
  dashYellow: {
    backgroundColor: '#FFB74A',
  },
  dashGreen: {
    backgroundColor: '#00B850',
  },
  col6: {
    width: '50%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  manage: {
    marginLeft: -20,
    marginRight: -20,
  },
  listItem: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: COLOR.WHITE,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    marginBottom: 10,
  },
  mainCardContainer: {
    width: '100%',
    marginHorizontal: 10,
    backgroundColor: COLOR.WHITE,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    alignSelf: 'center',
  },
  mainChildContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  tbRow: {
    flexDirection: 'row',
  },
  notificationList: {
    flexDirection: 'row',
    borderColor: '#EFEFEF',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  userDetails: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#ddd',
    overflow: 'hidden',
  },
  tinyImg: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  InlineGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  themeBackground: {
    backgroundColor: COLOR.APP_THEME,
  },
  themePink: {
    backgroundColor: COLOR.THEME_PINK,
  },
  themeYellowBackground: {
    backgroundColor: COLOR.WHITE,
  },
  grayBackground: {
    backgroundColor: COLOR.WHITE,
  },
  lightGrayBackground: {
    backgroundColor: COLOR.WHITE,
  },
  whiteBackground: {
    backgroundColor: COLOR.WHITE,
  },
  noDataFound: {
    height: Util.normalize(40),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontSmallest: {
    fontSize: Util.normalize(10),
  },
  fontSmall: {
    fontSize: Util.normalize(12),
  },
  fontMedium: {
    fontSize: Util.normalize(14),
  },
  fontBig: {
    fontSize: Util.normalize(16),
  },
  fontBigger: {
    fontSize: Util.normalize(20),
  },
  fontBiggest: {
    fontSize: Util.normalize(28),
  },
  search: {
    backgroundColor: COLOR.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    borderRadius: 5,
    height: Util.normalize(8),
    width: '100%',
  },
  searchText: {
    borderBottomColor: COLOR.TRANSPARENT,
    borderBottomWidth: 0,
    paddingLeft: 0,
  },
  borderTop1ThemeColor: {
    borderTopWidth: 1,
    borderTopColor: COLOR.APP_THEME,
  },
  borderBottom1ThemeColor: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.APP_THEME,
  },
  borderTop1Black: {
    borderTopWidth: 1,
    borderTopColor: COLOR.BLACK,
  },
  borderBottom1Gray: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.WHITE,
  },
  themeBorder: {
    borderWidth: 1,
    borderColor: COLOR.APP_THEME,
    padding: 5,
    borderRadius: 5,
  },
  grayBorder: {
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    padding: 5,
    borderRadius: 5,
  },
  themeBorder: {
    borderWidth: 0.5,
    borderColor: COLOR.APP_THEME,
    padding: 10,
    borderRadius: 5,
  },
  buttonHeightN: {height: Util.normalize(5)},
  paddingLeft: {
    paddingLeft: 5,
  },
};

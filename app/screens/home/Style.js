import { StyleSheet } from "react-native";
import { COLOR } from "../../assets/css/colors";
import Util from "../../utilities/util";
import { Imp } from '../BasicImport';

export const Style = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: Imp.COLOR.WHITE,
    width: "100%",
  },
  profilePic: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    borderRadius: 120,
    marginTop: "-16%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  GreyBg: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Util.normalize(17),
    backgroundColor: '#EBEBEB',
    // padding: 10,
    paddingHorizontal: 35,
    paddingVertical: 10,
    marginTop: 10,
  },
  cameraIcon: {
    // backgroundColor: 'green',
    alignSelf: 'center',
    height: 55,
    width: 55,
    borderRadius: 55,
    marginTop: "-15%",
    marginLeft: "-7%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewLeft: {
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    height: Util.getHeight(25),
    width: Util.getWidth(25),
    // borderRadius: Util.getHeight(20),
    marginHorizontal: 20,
  },
  imageIcon: {
    // backgroundColor: 'blue'
    height: Util.getHeight(35),
    width: Util.getWidth(35),
    borderRadius: Util.getHeight(35),
    // backgroundColor: 'red',
    resizeMode: "contain",
    // alignSelf: 'flex-start'
  },
  profilePicIcon: {
    // backgroundColor: 'blue'
    height: Util.getHeight(30),
    width: Util.getWidth(30),
    borderRadius: Util.getHeight(30),
    // backgroundColor: 'red',
    resizeMode: "contain",
    // alignSelf: 'flex-start'
  },
  srNo: {
    color: COLOR.WHITE,
    fontSize: Util.normalize(15),
    marginBottom: 8,

    fontFamily: 'Poppins-Bold',
  },
  srNoBlack: {
    color: COLOR.BLACK,
    fontSize: Util.normalize(15),
    marginBottom: 8,

    fontFamily: 'Poppins-Bold',
  },
  textRow: {
    // width: '100%',
    // flex: 1,
    marginVertical: 5,
    flexDirection: "row",
    // justifyContent: 'space-between',
    alignItems: 'center'
    // backgroundColor: 'red'
  },
  textHeading: {
    color: COLOR.WHITE,
    fontFamily: 'Poppins-Regular',
    fontSize: Util.normalize(12)
  },

  textValid: {
    color: COLOR.WHITE,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    fontSize: Util.normalize(12)
  },
  value: {
    backgroundColor: COLOR.THEME_GREEN,
    // paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 15,
    borderRadius: 60
  },
  textValue: {
    color: COLOR.THEME_GREEN,
    fontFamily: 'Poppins-Regular',
    fontSize: Util.normalize(12)

  },
  rightView: {
    marginHorizontal: 10,
    flex: 1,
    marginVertical: Util.getHeight(5)
  },
  splashLogo: {
    height: Imp.Util.getHeight(30),
    width: Imp.Util.getWidth(50),
  },
  container: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
  innerView: {
    flex: 1,
    paddingHorizontal: Imp.Util.normalize(20),
    backgroundColor: Imp.COLOR.WHITE,
    width: "100%",
  },
  imageContainer: {
    backgroundColor: Imp.COLOR.APP_THEME,
    width: "100%",
    alignItems: "center",
    height: Imp.Util.normalize(100),
    marginBottom: Imp.Util.normalize(70),
    paddingTop: Imp.Util.normalize(35),
  },
  image: {
    height: Imp.Util.normalize(130),
    width: Imp.Util.normalize(130),
  },
  name: {
    fontSize: Imp.Util.normalize(16),
    marginBottom: Imp.Util.normalize(-30),
  },
  searchBoxHeader: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    marginTop: Imp.Util.normalize(25),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: Imp.Util.normalize(10),
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Imp.COLOR.WHITE,
    width: "80%",
    alignSelf: "center",
    borderRadius: Imp.Util.normalize(5),
    padding: Imp.Util.normalize(8),
    shadowColor: Imp.COLOR.GRAY,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    marginHorizontal: Imp.Util.normalize(10),
  },
  searchBoxText: {
    flex: 1,
    padding: 0,
    fontSize: Imp.Util.normalize(16),
    marginTop: Imp.Util.normalize(-3),
    marginLeft: Imp.Util.normalize(5),
  },
  searchBoxText: {
    flex: 1,
    padding: 0,
    fontSize: Imp.Util.normalize(16),
    marginTop: Imp.Util.normalize(-3),
    marginLeft: Imp.Util.normalize(5),
  },
  calloutImageView: {
    width: "23%",
    height: Imp.Util.normalize(70),
    borderWidth: Imp.Util.normalize(2),
    borderColor: "transparent",
    borderRadius: Imp.Util.normalize(50),
    overflow: "hidden",
    marginRight: Imp.Util.normalize(10),
  },
  calloutView: {
    backgroundColor: "white",
    width: Imp.Util.normalize(250),
    height: Imp.Util.normalize(250),
    borderRadius: Imp.Util.normalize(20),
  },
  ratingStyle: {
    paddingVertical: Imp.Util.normalize(5),
    width: "100%",
    height: Imp.Util.normalize(4),
    alignItems: "center",
    marginVertical: Imp.Util.normalize(1),
  },
  calloutFirstView: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    width: "100%",
    alignItems: "center",
    padding: Imp.Util.normalize(5),
    backgroundColor: Imp.COLOR.GRAY,
    justifyContent: "center",
    borderTopRightRadius: Imp.Util.normalize(20),
    borderTopLeftRadius: Imp.Util.normalize(20),
  },
  calloutSecondView: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    borderBottomWidth: Imp.Util.normalize(1),
    borderColor: Imp.COLOR.GRAY,
  },
  calloutsecondImageView: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    padding: Imp.Util.normalize(10),
  },
  calloutButtonView: {
    flex: 1,
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: Imp.Util.normalize(20),
    borderBottomRightRadius: Imp.Util.normalize(20),
  },
  
});

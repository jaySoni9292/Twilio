import { StyleSheet } from "react-native";
import Util from "../../utilities/util";
import {COLOR} from "../../assets/css/colors";

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000080",
  },
  innerContainer: {
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
    backgroundColor: COLOR.WHITE,
    padding: Util.normalize(2),
    justifyContent: "center",
    zIndex: 1000,
    borderRadius: Util.normalize(10),
  },
  profileModalButtonContainer: {
    justifyContent: "center",
    margin: Util.normalize(1),
    alignItems: "center",
    padding: Util.normalize(10),
  },
  profileModalButton: {
    width: Util.normalize(35),
    height: Util.normalize(5),
    backgroundColor: COLOR.APP_THEME,
    margin: Util.normalize(1),
    borderRadius: 5,
  },
  modalCancelButton: {
    borderColor: COLOR.APP_THEME,
    borderWidth: 1,
  },
});

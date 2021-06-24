import React from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import { COLOR } from "../../assets/css/colors";
import { Style } from "./Style";

export function ShowModal(props) {
  const {
    showModal,
    closeModal,
    modal,
    style,
    closeOnOutside = true,
    modalBackgroundColor = COLOR.TRANSPARENT_BLACK,
  } = props;

  return (
    <>
      <Modal
        animationType={"none"}
        visible={showModal}
        onRequestClose={() => {
          closeModal;
        }}
        transparent={true}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={closeOnOutside ? closeModal : null}
          style={[
            Style.modalBackground,
            { backgroundColor: modalBackgroundColor },
          ]}
        >
          <View
            onStartShouldSetResponder={() => true}
            style={[Style.innerContainer, style]}
          >
            {modal}
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

{
  /* <ShowModal
  showModal={showModal}
  closeModal={() => {
    setShowModal(false);
  }}
  modal={modalCode()}
/>; */
}

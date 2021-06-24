import React from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import { Style } from "./Style";

export function ShowBottomModal(props) {
  const { showModal, closeModal, modal, closeOnOutside = true } = props;

  return (
    <>
      <Modal
        animationType={"slide"}
        visible={showModal}
        onRequestClose={() => {
          closeModal;
        }}
        transparent={true}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={closeOnOutside ? closeModal : null}
          style={[Style.modalBackground, { justifyContent: "flex-end" }]}
        >
          <View
            onStartShouldSetResponder={() => true}
            style={[Style.innerContainer, Style.bottomContainer]}
          >
            {modal}
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

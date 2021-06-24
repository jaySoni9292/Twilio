import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {
  ButtonCustom,
  ThemeButton,
  ErrorText,
} from '../../components/Button/index';
import {Style} from './Style';
import {GlobalStyle} from '../../assets/css/globalStyle';
import ImagePicker from 'react-native-image-crop-picker';
import Util from '../../utilities/util';
import {variableStrings} from '../../values/strings';

export function CameraModal(props) {
  const {showCameraModal, closeModal, setImage} = props;

  function chooseFileFromGallery() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 0.4,
    })
      .then((images) => {
        images ? setPath(images) : closeModal;
      })
      .catch((err) => {
        closeModal;
      });
  }

  function chooseFileFromCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 0.4,
    })
      .then((images) => {
        images ? setPath(images) : closeModal;
      })
      .catch((err) => {
        closeModal;
      });
  }

  async function setPath(images) {
    let upload_body = '';
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (allowedExtensions.exec(images['path'])) {
      if (images !== undefined) {
        upload_body = {
          uri: images['path'],
          type: images['mime'],
          name:
            Platform.OS === 'ios'
              ? images['filename']
              : `my_profile_${Date.now()}.${
                  images['mime'] === 'image/jpeg' ? 'jpg' : 'png'
                }`,
        };
      }
    } else {
      closeModal;
      setTimeout(() => {
        Util.toastMessage(variableStrings.fileTypeMessage);
      }, 100);
    }
    setImage(upload_body);
    closeModal;
  }

  return (
    <>
      {/* <View style={Style.container}> */}
      <Modal
        transparent={true}
        animationType={'none'}
        visible={showCameraModal}
        onRequestClose={closeModal}>
        <TouchableOpacity onPress={closeModal} style={Style.modalBackground}>
          <View
            style={Style.innerContainer}
            onStartShouldSetResponder={() => true}>
            <Text
              style={[
                GlobalStyle.fontMedium,
                GlobalStyle.fontBold,
                GlobalStyle.textBlack,
                GlobalStyle.mv10,
              ]}>
              {variableStrings.selectPhoto}
            </Text>
            <View
              style={[
                GlobalStyle.flexColumn,
                GlobalStyle.fullWidth,
                Style.profileModalButtonContainer,
              ]}>
              <ButtonCustom
                label={variableStrings.chooseImage}
                onPress={() => {
                  chooseFileFromGallery();
                }}
                iconRight={'picture-o'}
                iconTypeRight={'font-awesome'}
                styleView={[{width: '90%'}]}
              />
              <ButtonCustom
                label={variableStrings.captureImage}
                onPress={() => {
                  chooseFileFromCamera();
                }}
                iconRight={'camera'}
                styleView={[{width: '90%'}]}
              />
              <ButtonCustom
                label={variableStrings.cancel}
                onPress={closeModal}
                styleView={[{width: '90%'}]}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      {/* </View> */}
    </>
  );
}

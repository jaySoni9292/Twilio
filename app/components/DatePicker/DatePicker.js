import React, { useState, useEffect } from "react";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export function DatePicker(props) {
  const {
    maximumDate,
    minimumDate = new Date(),
    isDarkModeEnabled = false,
    setDate,
    format = "DD-MM-YYYY",
    mode = "datetime",
    value = new Date(),
    isVisible,
    onCancel,
  } = props;

  async function onDateChange(date) {
    if (date != undefined) {
      setDate(moment(date, format).format(format));
    } else {
      onCancel;
    }
  }

  return (
    <>
      <DateTimePickerModal
        isVisible={isVisible}
        mode={mode}
        date={value}
        onConfirm={(date) => onDateChange(date)}
        onCancel={onCancel}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        isDarkModeEnabled={isDarkModeEnabled}
      />
    </>
  );
}

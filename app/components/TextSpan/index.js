import React from "react";
import { Text } from "react-native";
import { GlobalStyle } from "../../assets/css/globalStyle";

export function TextSpan(props) {
  const {
    name,
    value,
    style,
    nameStyle,
    valueStyle,
    numberOfLines,
    ellipsizeMode = "tail",
  } = props;

  return (
    <>
      <Text
        style={[style]}
        numberOfLines={numberOfLines}
        ellipsizeMode={ellipsizeMode}
      >
        <Text
          style={[
            GlobalStyle.fontBold,
            GlobalStyle.fontRegular,
            GlobalStyle.textBlack,
            GlobalStyle.flex1,
            nameStyle,
          ]}
        >
          {name}{" "}
        </Text>
        <Text
          style={[
            GlobalStyle.fontLight,
            GlobalStyle.fontRegular,
            GlobalStyle.textRed,
            valueStyle,
          ]}
        >
          {value}
        </Text>
      </Text>
    </>
  );
}

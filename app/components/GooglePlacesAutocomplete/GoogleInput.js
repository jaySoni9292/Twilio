import React from "react";
import {COLOR} from "../../assets/css/Colors";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export function GoggleInput(props) {

  const { editable, that, } = props;
  let key = "AIzaSyBsVj3C2VFgMQagjThPqEf_VA5BMdonxww"

  return (

    <GooglePlacesAutocomplete
      getDefaultValue={() => {
        return that.state.location;
      }}
      placeholder='Enter Location'
      minLength={2}
      autoFocus={false}
      returnKeyType={'default'}
      listViewDisplayed='auto'
      fetchDetails={true}
      onPress={
        (data, details = null) => {
          let lat;
          let long;
          let location;
          lat = details.geometry.location.lat;
          long = details.geometry.location.lng;
          location = data.description;
          that.setState({ location: location, storeLongitude: long, storeLatitude: lat })
        }
      }
      onSubmitEditing={() => { }}
      query={{
        key: key,
        language: 'en',
      }}
      styles={{
        textInputContainer: {
          borderRadius: 5,
          borderColor: COLOR.GRAY,
          borderTopColor:COLOR.GRAY,
          borderTopWidth: 1,
          borderWidth: 1,
          height: 40,
          alignItems: "center",
          width: "100%",
          backgroundColor: "transparent",
          paddingHorizontal: 10,
          elevation: 0,
          marginTop: 5,
          paddingTop: 0,
          paddingBottom: 0,
        },
        textInput: {
          borderBottomColor: "transparent",
          color: COLOR.BLACK,
          width: '100%',
          height: "100%",
          alignItems: "center",
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
      currentLocation={true}
      nearbyPlacesAPI='GooglePlacesSearch'
      underlineColorAndroid="transparent"
      numberOfLines={2}
      multiline={true}
      autoFocus={false}
      editable={editable}
    />

  );

}

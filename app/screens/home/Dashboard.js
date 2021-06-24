import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Imp} from '../BasicImport';
import {LoaderIndicator} from '../../components/loader';
import {CommonBackground} from '../../../CommonBackground';

const Dashboard = props => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      {loader && <LoaderIndicator />}
      <CommonBackground loader={loader} kbBehavior={null}>
        <View
          style={[
            Imp.GlobalStyle.alignItemsCenter,
            Imp.GlobalStyle.justifyBetween,
            Imp.GlobalStyle.flex1,
          ]}>
          <Text style={[Imp.GlobalStyle.textWhite]}>Dashboard</Text>
        </View>
      </CommonBackground>
    </>
  );
};

export default Dashboard;

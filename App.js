import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import { colors } from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';
import SignInScreen from './src/screens/authScreens/SignInScreen';
import SignInWellcomeScreen from './src/screens/authScreens/SignInWellcomeScreen';

export default function App(){
  return (
    <View style= {style.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor = {colors.statusbar}
      />
      {/* <SignInScreen /> */}
      {/* <SignInWellcomeScreen /> */}
      <RootNavigator/>
    </View>
  );
};



const style = StyleSheet.create({
  container:{
    flex: 1
  }
})

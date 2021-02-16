import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppBar from "../../components/AppBar";

export default (props) => {
  return (
    <View>
      <AppBar title="홈" />
      <Text>홈화면입니다</Text>
    </View>
  );
};

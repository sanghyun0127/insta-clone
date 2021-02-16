import React from "react";
import { Button, Text, View } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="등록" onPress={() => navigation.navigate("SignUp")} />
      <Button title="로그인" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

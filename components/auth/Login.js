import React, { Component } from "react";
import { View, Button, Text, TextInput } from "react-native";
import firebase from "firebase";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onSignUp = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="이메일"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="비밀번호"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button onPress={() => this.onSignUp()} title="로그인" />
      </View>
    );
  }
}

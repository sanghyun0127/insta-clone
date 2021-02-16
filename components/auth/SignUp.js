import React, { Component } from "react";
import { View, Button, Text, TextInput } from "react-native";
import firebase from "firebase";

export class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  onSignUp = () => {
    const { name, email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users") //firestore 에 가입정보 collect
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
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
          placeholder="이름"
          onChangeText={(name) => this.setState({ name })} // 왜 setState에 name을 {name} 이라고 해줘야하지?
        />
        <TextInput
          placeholder="이메일"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="비밀번호"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button onPress={() => this.onSignUp()} title="가입하기" />
      </View>
    );
  }
}

export default SignUp;

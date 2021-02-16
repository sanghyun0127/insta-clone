import React, { Component } from "react";
import { LandingStack, MainStack } from "./navigation/Stack";
import * as firebase from "firebase";
import "firebase/firestore";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

// 나중에 .env에 따로 저장하기
const firebaseConfig = {
  apiKey: "AIzaSyAhz5g0Ngkhn3R70PSXamd_KpV3slM-UwU",
  authDomain: "dcstest-53b7a.firebaseapp.com",
  projectId: "dcstest-53b7a",
  storageBucket: "dcstest-53b7a.appspot.com",
  messagingSenderId: "789693918687",
  appId: "1:789693918687:web:2c127c52544c92c670e86a",
  measurementId: "G-Z7XESGTXD3",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export class App extends Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }
  render() {
    const { loaded, loggedIn } = this.state;
    //loaded: false 이면
    if (!loaded) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }

    //loggedIn: false이면
    if (!loggedIn) {
      return <LandingStack />;
    }
    return (
      <Provider store={store}>
        <MainStack />
      </Provider>
    );
  }
}

export default App;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LandingScreen from "../components/auth/Landing";
import SignUpScreen from "../components/auth/SignUp";
import LoginScreen from "../components/auth/Login";
import MainScreen from "../components/Main";
import CameraScreen from "../components/Camera";
import SaveScreen from "../components/Save";

//import Tabs from "./Tabs";

const Stack = createStackNavigator();

export const LandingStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export const MainStack = (props) => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        navigation={props.navigation}
      />
      <Stack.Screen
        name="Save"
        component={SaveScreen}
        navigation={props.navigation}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

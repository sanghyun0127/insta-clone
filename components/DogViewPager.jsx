import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import ViewPager from "@react-native-community/viewpager";

export default () => {
  return (
    <View style={styles.container}>
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </ViewPager>
    </View>
  );
};

const { width: Width, height: Height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: Width,
    height: Height / 2.5,
    backgroundColor: "wheat",
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});

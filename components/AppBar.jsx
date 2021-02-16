import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform, StyleSheet } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

// react-native-paper AppBar 참고
export default ({ title }) => (
  <Appbar.Header style={styles.header}>
    <Appbar.Content title={title} style={styles.content} />
    {/* <Appbar.Action icon="magnify" onPress={() => {}} />
    <Appbar.Action icon={MORE_ICON} onPress={() => {}} /> */}
  </Appbar.Header>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    elevation: 0,
  },
  content: {
    justifyContent: "center",
  },
});

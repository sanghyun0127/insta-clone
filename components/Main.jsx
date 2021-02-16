import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Tabs from "../navigation/Tabs";
import { fetchUser, fetchUserPosts } from "../redux/actions/index";

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchUserPosts();
  }
  render() {
    return <Tabs />;
  }
}
// 이거 안해주면 currentUser 못받아와서 null로 뜸
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});
// bindAction : redux의 actions 랑 연결해주기
const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser, fetchUserPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);

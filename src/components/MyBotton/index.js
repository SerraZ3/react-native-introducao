import React, {Component} from "react";
import {Button, View, StyleSheet} from "react-native";

export const Buttons = props => (
  <View style={[styles.buttonView, {flex: props.flex ? 1 : 0}]}>
    <Button title={props.title} color={props.color} onPress={props.function} />
  </View>
);
const styles = StyleSheet.create({
  buttonView: {
    justifyContent: "space-around",
    marginHorizontal: 30,
  },
});

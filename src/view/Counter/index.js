import React, {Component} from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import {Buttons} from "../../components/MyBotton";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  add = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };
  sub = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
  };
  render() {
    return (
      <View style={styles.backgroundView}>
        <View style={{flex: 1, justifyContent: "center"}}>
          <Text style={[styles.fontWhite, styles.fontTitle]}>Meu contador</Text>
        </View>
        <View style={{flex: 3, justifyContent: "center"}}>
          <Text style={[styles.fontWhite, styles.fontTitle, {fontSize: 70}]}>
            {this.state.counter}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}>
          <Buttons title="+" color="#9265D2" function={this.add} flex={true} />
          <Buttons title="-" color="#9265D2" function={this.sub} flex={true} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: "#03839Ba0",
  },
  fontWhite: {
    color: "white",
    textAlign: "center",
  },
  fontTitle: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 10,
  },
});

import React, {Component} from "react";
import {Text, View, StyleSheet, Button} from "react-native";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: null,
    };
  }
  setDisplay = value => {
    if (this.state.display == null) {
      this.setState(prevState => ({
        display: prevState.display + value,
      }));
    } else {
      this.setState(prevState => ({
        display: prevState.display + `${value}`,
      }));
    }
  };
  clearDisplay = () => {
    this.setState({display: null});
  };
  clearOne = () => {
    this.setState(prevState => ({
      display: prevState.display.substr(0, prevState.display.length - 1),
    }));
  };
  handlerSubmit = () => {
    this.setState({display: eval(this.state.display)});
  };
  render() {
    return (
      <View style={styles.backgroundView}>
        <View style={{flex: 2}}>
          <Text style={[styles.fontWhite, styles.fontTitle]}>Calculadora</Text>
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: 15,
            borderColor: "black",
            borderWidth: 1,
            backgroundColor: "white",
          }}>
          <Text
            style={{
              flex: 1,
              textAlign: "right",
              textAlignVertical: "bottom",
              fontSize: 30,
              margin: 10,
            }}>
            {this.state.display}
          </Text>
        </View>

        <View
          style={{
            flex: 4,
            flexDirection: "row",
            marginHorizontal: 15,
          }}>
          <View style={styles.buttonView}>
            <View>
              <Text
                style={[styles.fontWhite, styles.buttonText]}
                onPress={() => this.setDisplay(7)}>
                7
              </Text>
            </View>
            <View>
              <Text
                style={[styles.fontWhite, styles.buttonText]}
                onPress={() => this.setDisplay(4)}>
                4
              </Text>
            </View>
            <View>
              <Text
                style={[styles.fontWhite, styles.buttonText]}
                onPress={() => this.setDisplay(1)}>
                1
              </Text>
            </View>
          </View>
          <View style={styles.buttonView}>
            <View>
              <Text
                style={[styles.fontWhite, styles.buttonText]}
                onPress={() => this.setDisplay(8)}>
                8
              </Text>
            </View>
            <View>
              <Text
                style={[styles.fontWhite, styles.buttonText]}
                onPress={() => this.setDisplay(5)}>
                5
              </Text>
            </View>
            <View>
              <Text
                style={[styles.fontWhite, styles.buttonText]}
                onPress={() => this.setDisplay(2)}>
                2
              </Text>
            </View>
          </View>
          <View style={styles.buttonView}>
            <View>
              <Text
                style={[styles.fontWhite, styles.buttonText]}
                onPress={() => this.setDisplay(9)}>
                9
              </Text>
            </View>
            <View>
              <Text
                style={[styles.fontWhite, styles.buttonText]}
                onPress={() => this.setDisplay(6)}>
                6
              </Text>
            </View>
            <View>
              <Text
                style={[styles.fontWhite, styles.buttonText]}
                onPress={() => this.setDisplay(3)}>
                3
              </Text>
            </View>
          </View>
          <View style={styles.buttonView}>
            <View>
              <Text
                style={[styles.fontWhite, styles.buttonText]}
                onPress={() => this.setDisplay("+")}>
                +
              </Text>
            </View>
            <View>
              <Text
                style={[styles.fontWhite, styles.buttonText]}
                onPress={() => this.setDisplay("-")}>
                -
              </Text>
            </View>
            <View>
              <Text
                style={[styles.fontWhite, styles.buttonText]}
                onPress={() => this.clearOne()}>
                {"<-"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: 15,
            flexDirection: "row",
          }}>
          <View style={{flex: 3}}>
            <Text
              style={[
                styles.fontWhite,
                styles.buttonText,
                {textAlignVertical: "center", flex: 1},
              ]}
              onPress={() => this.setDisplay(0)}>
              0
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.fontWhite,
                styles.buttonText,
                {textAlignVertical: "center", flex: 1},
              ]}
              onPress={() => this.clearOne()}>
              C
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: 15,
            backgroundColor: "purple",
          }}>
          <Text
            style={[
              styles.fontWhite,
              styles.buttonText,
              {textAlignVertical: "center", flex: 1},
            ]}
            onPress={() => this.handlerSubmit()}>
            =
          </Text>
        </View>
        <View style={{flex: 2}}></View>
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
  buttonView: {
    flex: 1,
    justifyContent: "space-around",
  },
  buttonText: {
    padding: 20,
  },
});

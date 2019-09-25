import React, {Component} from "react";
import {View, StyleSheet, Image, TextInput} from "react-native";
import {StackActions, NavigationActions} from "react-navigation";
import {Buttons} from "../../components/MyBotton";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      pass: null,
    };
  }
  handlerSubmit = () => {
    if (this.state.name == "124") {
      if (this.state.pass == "124") {
        const toFirstScreen = StackActions.reset({
          index: 0,
          key: null,
          actions: [NavigationActions.navigate({routeName: "Acesso"})],
        });
        this.props.navigation.dispatch(toFirstScreen);
      } else if (this.state.pass == null) {
        alert("Preencha a senha");
      } else {
        alert("Nome ou senha não coincidem");
      }
    } else if (this.state.name == null) {
      alert("Preencha o nome");
    } else {
      alert("Nome inválido");
    }
  };
  onChangeText = (name, value) => {
    switch (name) {
      case "nome":
        this.setState({name: value});
        break;
      case "pass":
        this.setState({pass: value});
        break;
      default:
        break;
    }
  };
  renderInput = (placeholder, type, value, secure) => {
    return (
      <View style={{marginHorizontal: 30, marginVertical: 10}}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            color: "white",
            paddingHorizontal: 10,
          }}
          onChangeText={text => this.onChangeText(type, text)}
          placeholder={placeholder}
          placeholderTextColor="#ffffffa0"
          value={this.state[value]}
          secureTextEntry={secure}
        />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.backgroundView}>
        <View style={{flex: 2, marginTop: 20}}>
          <Image
            style={{
              width: 150,
              resizeMode: "contain",
              bottom: 150,
              alignSelf: "center",
            }}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View style={{flex: 3}}>
          {this.renderInput("Nome", "nome", "name", false)}
          {this.renderInput("Senha", "pass", "pass", true)}
          <Buttons
            title="Confirmar"
            color="#9265D2"
            function={this.handlerSubmit}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: "#24292e",
  },
  buttonView: {
    justifyContent: "space-around",
    marginHorizontal: 30,
  },
});

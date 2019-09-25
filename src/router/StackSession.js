import Drawer from "./DrawerScreen";
import Login from "../view/Login";

import {createStackNavigator} from "react-navigation-stack";

import {createAppContainer} from "react-navigation";

const StackSession = createStackNavigator(
  {
    Acesso: {
      screen: Drawer,
    },
    Login: {
      screen: Login,
    },
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
    mode: "card",
  },
);

export default createAppContainer(StackSession);

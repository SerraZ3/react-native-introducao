import {Dimensions} from "react-native";
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import Calculator from "../view/Calculator";
import Counter from "../view/Counter";

const {width} = Dimensions.get("window");

//drawer navigator configs
const SideBarAdmin = createDrawerNavigator(
  {
    Calculator: {
      screen: Calculator,
      navigationOptions: {
        drawerLabel: "Calculator",
      },
    },
    Counter: {
      screen: Counter,
      navigationOptions: {
        drawerLabel: "Counter",
      },
    },
  },
  {
    initialRouteName: "Counter",
    drawerPosition: "left",
    drawerBackgroundColor: "#24292e",
    contentOptions: {
      activeTintColor: "#03839B",
      activeBackgroundColor: "#fafa58",
      inactiveTintColor: "#fafa5870",
      inactiveBackgroundColor: "transparent",
      itemsContainerStyle: {
        justifyContent: "center",
      },
    },
    drawerWidth: width - 50,
  },
);

//return the SideBar component
export default createAppContainer(SideBarAdmin);

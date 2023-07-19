import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Search from "./screens/Search";
import Categories from "./screens/Categories";

//material icons
// import { HomeIcon } from "@mui/icons-material";
// import SearchIcon from "@mui/icons-material/Search";
// import CategoryIcon from "@mui/icons-material/Category";
// import MaterialIcons from "material-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250,
          },
          headerStyle: {
            backgroundColor: "#f4522e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerActiveTintColor: "blue",
          drawerLabelStyle: {
            color: "#111",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerLabel: "Home",
            title: "Home",
            /* drawerIcon: () => {
              <HomeIcon />;
            }, */
          }}
        />
        <Drawer.Screen
          name="Search"
          component={Search}
          options={{
            drawerLabel: "Search",
            title: "Search",
          }}
        />
        <Drawer.Screen
          name="Categories"
          component={Categories}
          options={{
            drawerLabel: "Categories",
            title: "Categories",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Search from "./Search";
import axios from "axios";

import Proba from "./Proba";
const Drawer = createDrawerNavigator();

const Categories = () => {
  const [responseData, setResponseData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories",
        {
          headers: {
            accept: "application/json",
            "X-RapidAPI-Key":
              "5ce1171e8cmsh08bc54db6697345p1f708fjsn96ee0024ee1b",
            "X-RapidAPI-Host":
              "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
          },
        }
      );
      setResponseData(response.data);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Drawer.Navigator>
      {responseData.map((data, i) => (
        <Drawer.Screen
          key={i}
          name="Proba"
          initialParams={{ params: data }}
          component={Proba}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default Categories;

const styles = StyleSheet.create({});

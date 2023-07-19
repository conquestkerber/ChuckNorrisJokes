import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import axios from "axios";

const Home = () => {
  const [responseData, setResponseData] = useState("");

  const buttonHandler = async () => {
    try {
      const response = await axios.get(
        "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
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
      setResponseData(response.data.value);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    buttonHandler();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/chuck.gif")}
        style={{ width: 100, height: 100 }}
      />
      <Text style={styles.text}>{responseData}</Text>
      <View style={styles.buttonContainer}>
        {/*  <TouchableOpacity style={styles.button} onPress={() => buttonHandler()}>
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.button} onPress={() => buttonHandler()}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    margin: 20,
  },

  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "lightgrey",
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});

export default Home;

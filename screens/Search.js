import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import axios from "axios";

const MyPage = () => {
  const [searchData, setSearcData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentValue, setCurrentValue] = useState("");
  const [inputSearch, setInputSearch] = useState("");

  const fetchDataHandler = async () => {
    try {
      const response = await axios.get(
        `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=${inputSearch}`,
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
      setSearcData(response.data.result);
      setCurrentIndex(0);
      setCurrentValue(response.data.result[0].value);
    } catch (error) {
      alert(error.message);
    }
  };

  const nextHandler = () => {
    /* const nextIndex = (currentIndex + 1) % searchData.length;
    setCurrentIndex(nextIndex); */
    if (currentIndex < searchData.length) {
      const newValue = searchData[currentIndex].value;
      setCurrentIndex(currentIndex + 1);
      setCurrentValue(newValue);
    }
  };
  const prevHandler = () => {
    /* const nextIndex = (currentIndex + 1) % searchData.length;
    setCurrentIndex(nextIndex); */
    if (currentIndex > 0) {
      const newValue = searchData[currentIndex].value;
      setCurrentIndex(currentIndex - 1);
      setCurrentValue(newValue);
    }
  };

  /*  useEffect(() => {
    fetchDataHandler();
  }, []); */
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Enter term of search"
          onChangeText={(value) => setInputSearch(value)}
        />
        <Button
          title="Submit"
          style={{ height: 30 }}
          onPress={() => {
            fetchDataHandler();
          }}
        />
      </View>

      <Text style={styles.text}>
        {currentIndex} / {searchData.length}
      </Text>
      <Text style={styles.text}>{currentValue}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={prevHandler}>
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nextHandler}>
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
  row: {
    flexDirection: "row",
    width: "70%",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: "black",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default MyPage;

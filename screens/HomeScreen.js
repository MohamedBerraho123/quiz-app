import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [playerName, setPlayerName] = useState("");

  const handleStartQuiz = () => {
    if (playerName.trim()) {
      navigation.navigate("Quiz", { playerName });
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Quiz</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={playerName}
        onChangeText={setPlayerName}
      />
      <Button title="Start Quiz" onPress={handleStartQuiz} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    width: "80%",
    paddingHorizontal: 10,
  },
});

export default HomeScreen;

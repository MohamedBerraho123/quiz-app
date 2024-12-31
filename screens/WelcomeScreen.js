import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const [name, setName] = useState('');

  const handleStartQuiz = () => {
    if (name.trim()) {
      navigation.navigate('Quiz', { playerName: name });
    } else {
      alert('Please enter your name to start the quiz!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Quiz!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Start Quiz" onPress={handleStartQuiz} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    borderRadius: 5,
  },
});

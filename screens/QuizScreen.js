import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const questions = [
  { id: 1, question: 'What is the capital of France?' },
  { id: 2, question: 'What is 2 + 2?' },
  { id: 3, question: 'What is the largest planet in our solar system?' },
  { id: 4, question: 'Who wrote "To Kill a Mockingbird"?' },
  { id: 5, question: 'What is the speed of light?' },
  { id: 6, question: 'Who painted the Mona Lisa?' },
];

export default function QuizScreen({ route, navigation }) {
  const { playerName } = route.params;
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    // Randomly select 4 questions
    const shuffled = questions.sort(() => 0.5 - Math.random());
    setSelectedQuestions(shuffled.slice(0, 4));
  }, []);

  const handleAnswerChange = (id, text) => {
    setAnswers((prev) => ({ ...prev, [id]: text }));
  };

  const handleSubmit = () => {
    console.log('Answers:', answers);
    alert('Quiz submitted! Thank you for participating, ' + playerName);
    navigation.goBack(); // Return to the Welcome Screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, {playerName}!</Text>
      <Text style={styles.subtitle}>Answer the following questions:</Text>
      {selectedQuestions.map((q) => (
        <View key={q.id} style={styles.questionContainer}>
          <Text style={styles.question}>{q.question}</Text>
          <TextInput
            style={styles.input}
            placeholder="Your answer"
            onChangeText={(text) => handleAnswerChange(q.id, text)}
          />
        </View>
      ))}
      <Button title="Submit Quiz" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});

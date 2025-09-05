import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>

      {/* GIF animado do React Native */}
      <Image
        source={{ uri: 'https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif' }}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite algo (ex.: seu apelido)"
        onChangeText={setTexto}
        value={texto}
      />

      <View style={styles.buttonContainer}>
        <Button title="Mostrar" onPress={() => setResultado(texto)} color="black" />
        <Button title="Esconder" onPress={() => setResultado('')} color="black" />
      </View>

      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    width: '80%',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
});

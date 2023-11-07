import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Enderecos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Endereço principal</Text>
      <Text style={{ marginHorizontal:20 }}>Rodovia Br 280, SN, Icarai</Text>
      <Text style={styles.endereco}>Km 27 Araquari/SC</Text>
      <Text style={styles.endereco}>CEP 89245-000</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 23,
    marginHorizontal: 20,
    marginVertical:15,
    fontWeight: 'bold',
  },
  endereco: {
    marginTop: 5,
    marginHorizontal: 20,
  }
});
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Notificacoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nenhuma notificação no momento</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 25,
    fontWeight: 'normal',
    color: '#999',
  },
});
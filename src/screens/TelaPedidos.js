import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function pedidos() {
  return (
    <View style={styles.container}>
      <Text style={styles.aviso}>Você ainda não fez nenhum pedido</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aviso: {
    marginTop: 25,
    fontSize: 18,
    color: '#333',
  },
});
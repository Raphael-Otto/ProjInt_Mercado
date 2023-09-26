import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Itens() {
  return (
    <TouchableOpacity style={styles.container}>
        <Image
          source={require('../../imgs/ItemLaranja.jpg')}
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            width: 110,
            height: 100,
          }}
        />
      <Text style={styles.preco}>R$ 10,00</Text>
      <Text style={styles.nome}>Laranja</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 170,
    marginLeft: '5%',
    borderRadius: 10,
    backgroundColor: '#EFEFEF',
  },
  preco: {
    marginLeft: 5,
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  nome: {
    marginLeft: 5,
    fontSize: 14,
    color: '#444',
  },
});
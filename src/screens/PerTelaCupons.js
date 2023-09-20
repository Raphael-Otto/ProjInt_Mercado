import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CupomDesconto from '../components/Home/CupomDesconto';

export default function Cupons() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> Cupons Ativos </Text>
      <CupomDesconto style={{marginHorizontal: 20}} />

      <Text style={styles.title2}> Seus Cupons</Text>
      <Text style={styles.aviso}>Você ja utilizou todos os seus cupons</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    color: '#333',
    fontSize: 23,
    fontWeight: 'bold',
    margin: 10,
  },
  title2: {
    color: '#333',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 30,
    margin: 10,
  },
  aviso: {
    marginTop: 25,
    fontSize: 16,
    color: '#333',
    marginLeft: '14%',
  },
  cupons: {
    marginHorizontal: 20,
  }
});
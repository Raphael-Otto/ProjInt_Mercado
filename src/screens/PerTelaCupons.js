import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CupomDesconto from '../components/Home/CupomDesconto';

export default function Cupons() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> Cupons Ativos </Text>
      <CupomDesconto style={styles.cupons} />

      <Text style={styles.title2}> Seus Cupons</Text>
      <CupomDesconto style={styles.cupons} />
      <CupomDesconto style={styles.cupons} />
      <CupomDesconto style={styles.cupons} />
      <CupomDesconto style={styles.cupons} />
      <CupomDesconto style={styles.cupons} />
      <CupomDesconto style={styles.cupons} />
      <CupomDesconto style={styles.cupons} />
      <CupomDesconto style={styles.cupons} />
      <CupomDesconto style={styles.cupons} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
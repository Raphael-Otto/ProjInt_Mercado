import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CupomDesconto from '../../components/Home/CupomDesconto';

export default function Cupons() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cupons Ativos</Text>
      <CupomDesconto style={styles.cupons} />
      <Text style={styles.titulo}>Seus cupons</Text>
      <Text style={styles.subtitulo}>Os seus cupons disponiveis estarão aqui</Text>
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
  subtitulo: {
    marginHorizontal: 20,
    color: '#999',
  }
});
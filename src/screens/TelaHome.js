import React from 'react';

import { ScrollView, StyleSheet, Text } from 'react-native';
import Sugestoes from '../components/Home/Sugestoes';
import Categorias from '../components/Home/Categorias';
import CupomDesconto from '../components/Home/CupomDesconto';

export default function Home() {
  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
      <Text style={styles.titulo}>Cupom ativo</Text>
      <CupomDesconto />
      <Sugestoes />
      <Categorias />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 20,
  },
});
import React from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import Input from '../components/Input';
import CupomDesconto from '../components/Home/CupomDesconto';
import Sugestoes from '../components/Home/Sugestoes';
import Categorias from '../components/Home/Categorias';

export default function Home() {
  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
      <Input placeholder="Busque por item ou loja" />
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
});
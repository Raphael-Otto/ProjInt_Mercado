import React from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import Sugestoes from '../components/Home/Sugestoes';
import Categorias from '../components/Home/Categorias';

export default function Home() {
  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
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
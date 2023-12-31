import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Input from '../components/Input';

export default function TelaBuscaApp() {
  return (
    <View style={styles.container}>      
      <Input placeholder="Busque por seus itens..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
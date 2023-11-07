import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Pagamento from '../../components/Home/Pagamento';
import Pagamento2 from '../../components/Home/Pagamento2';

export default function Pagamentos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seus últimos pagamentos</Text>
      <Pagamento />
      <Pagamento2 />
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
});
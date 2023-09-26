import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CupomDesconto from '../components/Home/CupomDesconto';

export default function Cupons() {
  return (
    <View style={styles.container}>
      <CupomDesconto style={styles.cupons} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
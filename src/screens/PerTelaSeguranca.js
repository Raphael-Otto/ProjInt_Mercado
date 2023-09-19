import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Seguranca() {
  return (
    <View style={styles.container}>
      <Text>Segurança</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
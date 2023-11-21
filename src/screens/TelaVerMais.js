import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaVerMais({ navigation }) {
  return (
    <View style={styles.container}>      
      <Text>Cavapo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
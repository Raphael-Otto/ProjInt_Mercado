import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, View, StyleSheet } from 'react-native';

export default function Input(props) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={25} color={'white'} style={styles.lupinha} />

      <TextInput style={styles.textInput} placeholder={props.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    paddingLeft: 7.5,
    borderColor: '#E5E4E2',
    borderWidth: 1,
    borderRadius: 35,
  },
  textInput: {
    paddingVertical: 15,
    paddingLeft: 10,
    width: '80%'
  },
  lupinha: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 30,
  }
});
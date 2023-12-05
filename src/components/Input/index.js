import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, View, StyleSheet, Text } from 'react-native';

const BASE_URL = 'https://projint-mercado-backend-dev-hbqd.4.us-1.fl0.io';

const SearchResults = ({ results }) => {
  return (
    <View style={styles.resultsContainer}>
      {results.map((result, index) => (
        <Text key={index} style={styles.resultItem}>
          {result.nome} 
        </Text>
      ))}
    </View>
  );
};

export default function Input(props) {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      if (searchText.trim() !== '') {
        const response = await fetch(`${BASE_URL}/search?q=${searchText}`);
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data.results);
        } else {
          console.error('Erro ao consultar o backend:', response.status);
        }
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Erro ao conectar ao backend:', error);
    }
  };

  const handleChangeText = (text) => {
    setSearchText(text);
    handleSearch();
  };
  return (
    <View>
      <View style={styles.container}>
        <MaterialIcons name="search" size={25} color={'white'} style={styles.lupinha} />
        <TextInput
          style={styles.textInput}
          placeholder={props.placeholder}
          onChangeText={handleChangeText}
          value={searchText}
        />
      </View>
      <SearchResults results={searchResults} />
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
  },
  resultsContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  resultItem: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E4E2',
  },
});
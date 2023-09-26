import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Pagamento() {
  return (
    <View style={styles.cupom}>
      <View style={styles.divisor}>
        <View style={styles.conteudo}>
          <Image
            source={require('../../imgs/Dinheiro.png')}
            style={styles.logo}
          />
          <View style={styles.info}>
            <Text style={styles.titulo}>Sua última compra, de (produto) foi dia (data), (dia)</Text>
            <Text style={styles.validade}>Com o valor de (preço com reais)</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cupom: {
    borderColor: 'rgba(0,0,0,.1)',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    width: '90%',
  },
  divisor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  conteudo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  info: {
    marginLeft: 10,
  },
  titulo: {
    fontWeight: 'bold',
    width: '80%',
  },
  validade: {
    marginTop: 5,
    color: '#333',
  },
});
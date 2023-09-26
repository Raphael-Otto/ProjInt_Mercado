import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Pagamento2() {
  return (
    <View style={styles.cupom}>
      <View style={styles.divisor}>
        <View style={styles.conteudo}>
          <MaterialIcons
            name='attach-money'
            color={'#999'}
            size={40}
          />
          <View style={styles.info}>
            <Text style={styles.titulo}>Você comprou (produto) no dia (data), (dia)</Text>
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
    marginTop: 20,
    width: '80%',
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
    color: '#999',
  },
  validade: {
    marginTop: 5,
    color: '#999',
  },
});
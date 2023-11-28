import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Sugestoes({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.titulo}>Sugestões</Text>
          <Text style={styles.subTitulo}>Baseada nas suas últimas pesquisas.</Text>
        </View>
        <TouchableOpacity>
          <Text 
          onPress={() => navigation.navigate('TelaVerMais')}
          style={styles.vejaMais}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 0,
    marginRight: 10,
    marginBottom: 15,
    marginLeft: 20,
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  subTitulo: {
    color: '#999',
  },
  vejaMais: {
    color: 'green',
  },
  lista: {
    paddingLeft: 20,
  },
  item: {
    width: 200,
    marginRight: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rbga(0,0,0, 0.06)',
    borderRadius: 4,
  },
  imagem: {
    height: 120,
    width: 200,
    backgroundColor: '#000',
  },
  info: {
    marginTop: 'auto',
    padding: 10,
  },
  itemPreco: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  preco: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
  },
  precoAntigo: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#999',
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
});

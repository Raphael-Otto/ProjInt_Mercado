import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image, } from 'react-native';

export default function CardProduto({ navigation }) {

  const Stack = createNativeStackNavigator();

  return (
    <ImageBackground
      style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 50,
            height: 30,
            resizeMode: 'stretch',
            marginTop: 100,
            marginBottom: 15,
            alignItems: 'center',
          }}
        />
      </View>
      <View>
        <Text style={styles.title}>Mercado Arco-Íris</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 55,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TelaCadastro')}
          style={{
            backgroundColor: 'green',
            marginTop: 300,
            marginBottom: 10,
            paddingVertical: 15,
            paddingHorizontal: 30,
            width: '100%',
            borderRadius: 30,
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 15,
              color: 'white',
              textAlign: 'center',
            }}>
            Começar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('TelaLogin')}
          style={{
            paddingVertical: 25,
            paddingHorizontal: 30,
            width: '65%',
            borderRadius: 30,
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 15,
              color: 'white',
              textAlign: 'center',
            }}>
            Entrar na minha conta
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    width: null,
    height: null,
    margin: 0,
  },
  title: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '700',
  },
});

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default function TelaCadastro({ navigation }) {

  const Stack = createNativeStackNavigator();

  return (
    <ImageBackground
      source={require('../imgs/FundoSimples.png')}
      style={styles.container}>
      <Image
          source={require('../imgs/RainbowBlack.png')}
          style={{
            width: 50,
            height: 30,
            resizeMode: 'stretch',
            alignItems: 'center',
            marginVertical: 95,
          }}
        />
      <TextInput style={styles.inputShadow}
        placeholder="Nome Completo:"
      />
      <TextInput style={styles.inputShadow}
        keyboardType='phone-pad'
        placeholder="CPF:"
      />
      <TextInput style={styles.inputShadow}
        keyboardType='phone-pad'
        placeholder="RG:"
      />
      <TextInput style={styles.inputShadow}
        keyboardType='phone-pad'
        placeholder="Celular (opcional):"
      />
      <TextInput style={styles.inputShadowBottom}
        secureTextEntry={true}
        placeholder="Senha:"
      />
      <TouchableOpacity
          onPress={() => navigation.navigate('TelaLogin')}
          style={{
            backgroundColor: 'green',
            paddingVertical: 15,
            paddingHorizontal: 30,
            width: '80%',
            borderRadius: 30,
            marginVertical: 95,

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 6,
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 15,
              color: 'white',
              textAlign: 'center',
            }}>
            Cadastrar
          </Text>
        </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },

  inputShadow: {
    height: 40, 
    width: '80%', 
    paddingHorizontal: 10,
    borderRadius: 10, 
    backgroundColor: 'white',
    marginBottom: 15, 

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 6,
  },

  inputShadowBottom: {
    height: 40, 
    width: '80%', 
    paddingHorizontal: 10,
    borderRadius: 10, 
    backgroundColor: 'white',
    marginBottom: 0,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 6,
  }
});
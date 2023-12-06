import React, { useState } from "react";
import { Text, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [isLoginVisible, setLoginVisible] = useState(false);
  const toggleLogin = () => {
    setLoginVisible(!isLoginVisible);
  };
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
        keyboardType='phone-pad'
        placeholder="CPF:"
      />
      <TextInput style={styles.inputShadowBottom}
        secureTextEntry={true}
        placeholder="Senha:"
      />
      <TouchableOpacity
          onPress={() => navigation.navigate('Routes', { screen: 'TelaHomeApp' })}
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
            Logar
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
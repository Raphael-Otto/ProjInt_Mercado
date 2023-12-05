import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

function CardCarnes(props) {
  return (
    <View style={styles.card}>
      <View style={{ height: "100%", width: "100%" }}>
        <Image style={styles.carnes} source={{ uri: props.carne.capa.url }} />
        <Text style={styles.nomes}> {props.carne.nome} </Text>
        <Text style={styles.precos}> R${props.carne.preco},00</Text>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 210,
    borderRadius: 10,
    flexDirection: "row",
    marginLeft: 20,
    marginBottom: 10,
    color: 'white',
    backgroundColor: 'white',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  carnes: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nomes: {
    fontSize: 20,
    fontWeight: "bold",
  },
  precos: {
    fontSize: 15,
    marginLeft: 1.5,
  }
});

export default CardCarnes;
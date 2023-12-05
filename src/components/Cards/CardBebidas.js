import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

function CardBebidas(props) {
  return (
    <View style={styles.card}>
      <View style={{ height: "100%", width: "100%" }}>
        <Image style={styles.bebidas} source={{ uri: props.bebida.capa.url }} />
        <Text style={styles.nomes}> {props.bebida.nome} </Text>
        <Text style={styles.precos}> R${props.bebida.preco},00</Text>
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
  bebidas: {
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

export default CardBebidas;
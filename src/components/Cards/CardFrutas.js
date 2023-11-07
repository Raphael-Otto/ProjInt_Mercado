import React from "react";
import { View, Image, StyleSheet } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <View style={{ height: "100%", width: "100%" }}>
        <Image style={styles.frutas} source={{ uri: props.fruta.capa.url }} />
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    flexDirection: "row",
    margin: 20,
    color: "white",
  },
  frutas: {
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default Card;
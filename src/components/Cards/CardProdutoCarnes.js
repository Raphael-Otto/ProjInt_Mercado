import { useEffect, useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import carneService from "../../seeders/services/carnes";

const CardProduto = ({ route }) => {
  const carnesId = route.params.carne;

  const [carne, setCarne] = useState({});
  const fecthCarne = async () => {
    const data = await carneService.getCarnesById(carnesId);
    setCarne(data);
  };

  useEffect(() => {
    fecthCarne();
  }, [carnesId]);

  return (
    <ScrollView style={styles.container}>
      {fruta.id && (
        <>
          <View style={styles.top}>
            <TouchableOpacity>
              <Icon name="arrow-left" size={20} color="white" />
            </TouchableOpacity>

            <Text style={{ color: "white", fontSize: 20 }}>
              Detalhe do Produto
            </Text>

            <TouchableOpacity>
              <Icon name="heart" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.card_img}>
            <Image style={styles.Image} source={{ uri: fruta.capa.url }} />
          </View>

          <View style={styles.descriçao}>
            <View>
              <Text style={styles.TextDetail}>{fruta.nome}</Text>
            </View>
            <View style={styles.car_des}>
              <View>
                <Text style={{ fontSize: 30 }}>R${fruta.preco}</Text>
              </View>
              <View style={styles.compras}>
                <Text style={styles.comprar}>Comprar</Text>
              </View>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    height: "100%",
    marginTop: 28,
  },
  comprar: {
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    color: "orange",
  },
  compras: {
    backgroundColor: "#ffcc50",
    borderRadius: 10,
    width: "25%",
  },
  car_des: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  descriçao: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  top: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  Image: {
    height: 350,
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  CardDetails: {
    height: "auto",
    width: "90%",
    margin: 5,
    backgroundColor: "#A1B575",
    borderRadius: 10,
    padding: 10,
  },
  TextDetail: {
    fontSize: 25,
    padding: 20,
  },
  TextTitle: {
    fontSize: 20,
    margin: 10,
  },
});

export default CardProduto;
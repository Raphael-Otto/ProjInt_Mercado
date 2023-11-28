import { useEffect, useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import frutaService from "../../seeders/services/frutas";

const CardProduto = ({ route }) => {
  const frutasId = route.params.fruta;

  const [fruta, setFruta] = useState({});
  const fecthFruta = async () => {
    const data = await frutaService.getFrutasById(frutasId);
    setFruta(data);
  };

  useEffect(() => {
    fecthFruta();
  }, [frutasId]);

  return (
    <View style={styles.container}>
      {fruta.id && (
        <>
          <View style={styles.imagem}>
            <Image style={styles.Image} source={{ uri: fruta.capa.url }} />
          </View>

          <View style={styles.info}>
            <Text style={styles.TextDetail}>{fruta.nome}</Text>
            <Text style={styles.PrecoDetail}>R${fruta.preco}</Text>
          </View>

          <View style={styles.align}>
            <TouchableOpacity style={styles.compras}>
              <Text style={styles.comprar}>Comprar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    color: 'white',
    backgroundColor: 'white',
  },
  imagem: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  align: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: 'white',
    paddingBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  Image: {
    height: "100%",
    width: "80%",
    backgroundColor: 'white',
  },
  TextDetail: {
    paddingLeft: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  PrecoDetail: {
    paddingRight: 20,
    fontSize: 20,
  },
  comprar: {
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    color: "white",
  },
  compras: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: '80%',
    borderRadius: 30,
    marginBottom: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default CardProduto;
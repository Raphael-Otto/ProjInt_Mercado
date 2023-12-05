import { useEffect, useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import bebidaService from "../../seeders/services/bebidas";
import Icon from "react-native-vector-icons/FontAwesome";

const CardProduto = ({ route }) => {
  const bebidasId = route.params.bebida;

  const [bebida, setBebida] = useState({});
  const fecthBebida = async () => {
    const data = await bebidaService.getBebidasById(bebidasId);
    setBebida(data);
  };

  useEffect(() => {
    fecthBebida();
  }, [bebidasId]);

  return (
    <View style={styles.container}>
      {bebida.id && (
        <>
          <View style={styles.imagem}>
            <Image style={styles.Image} source={{ uri: bebida.capa.url }} />
          </View>

          <View style={styles.info}>
            <Text style={styles.TextDetail}>{bebida.nome}</Text>
            <Text style={styles.PrecoDetail}>R${bebida.preco},00</Text>
          </View>

          <View>
            <Text style={styles.Desc}>{bebida.descricao}</Text>
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
  Desc: {
    marginTop: 10,
    paddingLeft: 20,
    color: 'gray',
    fontSize: 18,
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
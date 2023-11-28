import React, { useState, useEffect } from "react";

import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Sugestoes from '../components/Home/Sugestoes';
import Categorias from '../components/Home/Categorias';

import frutaService from '../seeders/services/frutas';
import bebidaService from "../seeders/services/bebidas";
import carneService from "../seeders/services/carnes";

import CardFrutas from "../components/Cards/CardFrutas";
import CardBebidas from "../components/Cards/CardBebidas";
import CardCarnes from "../components/Cards/CardCarnes";

export default function Home({ navigation }) {
  const [Frutas, setFrutas] = useState([]);

  async function BuscarFrutas() {
    const data = await frutaService.getAllFrutas();
    setFrutas(data);
  }

  useEffect(() => {
    BuscarFrutas();
  }, []);

  /* */
  const [Bebidas, setBebidas] = useState([]);

  async function BuscarBebidas() {
    const data = await bebidaService.getAllBebidas();
    setBebidas(data);
  }

  useEffect(() => {
    BuscarBebidas();
  }, []);

  /* */
  const [Carnes, setCarnes] = useState([]);

  async function BuscarCarnes() {
    const data = await carneService.getAllCarnes();
    setCarnes(data);
  }

  useEffect(() => {
    BuscarCarnes();
  }, []);

  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>

      <Sugestoes />
        <ScrollView horizontal={true} style={styles.img_sugestoes}>
          <View style={{ flexDirection: 'row' }}>
            {Frutas.map((Fruta) => (
              <TouchableOpacity
                key={Fruta.id}
                onPress={() => navigation.navigate('TelaCardProduto', { fruta: Fruta.id })}>
                <CardFrutas key={Fruta.id} fruta={Fruta}></CardFrutas>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        
      <Categorias />

      <Text style={styles.categoria}>Frutas</Text>
        <ScrollView horizontal={true} style={styles.img_sugestoes}>
          <View style={{ flexDirection: 'row' }}>
            {Frutas.map((Fruta) => (
              <TouchableOpacity
                key={Fruta.id}
                onPress={() => navigation.navigate('TelaCardProduto', { fruta: Fruta.id })}>
                <CardFrutas key={Fruta.id} fruta={Fruta}></CardFrutas>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

      <Text style={styles.categoria}>Bebidas</Text>
        <ScrollView horizontal={true} style={styles.img_sugestoes}>
          <View style={{ flexDirection: 'row' }}>
            {Bebidas.map((Bebida) => (
              <TouchableOpacity
                key={Bebida.id}
                onPress={() => navigation.navigate('TelaCardProduto', { bebida: Bebida.id })}>
                <CardBebidas key={Bebida.id} bebida={Bebida}></CardBebidas>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

      <Text style={styles.categoria}>Carnes</Text>
        <ScrollView horizontal={true} style={styles.img_sugestoes}>
          {Carnes.map((Carne) => (
            <CardCarnes
            key={Carne.id} carne={Carne} />
            ))} 
        </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  img_sugestoes: {
    width: '100%',
    flex: 1,
    flexDirection: "row",
  },
  categoria: {
    fontSize: 23,
    fontWeight: 'bold',

    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
  }
});
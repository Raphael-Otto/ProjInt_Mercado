import React, { useState, useEffect } from "react";

import { ScrollView, StyleSheet, View } from 'react-native';
import Sugestoes from '../components/Home/Sugestoes';
import Categorias from '../components/Home/Categorias';

import frutaService from '../seeders/services/frutas';
import bebidaService from "../seeders/services/bebidas";

import CardFrutas from "../components/Cards/CardFrutas";
import CardBebidas from "../components/Cards/CardBebidas";

export default function Home() {
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

  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
      <Sugestoes />
        <ScrollView horizontal={true} style={styles.img_sugestoes}>
          {Frutas.map((Fruta) => (
            <CardFrutas
            key={Fruta.id} fruta={Fruta} />
            ))} 
        </ScrollView>
        
        <ScrollView horizontal={true} style={styles.img_sugestoes}>
          {Bebidas.map((Bebida) => (
            <CardBebidas
            key={Bebida.id} bebida={Bebida} />
            ))} 
        </ScrollView>
      <Categorias />
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
  }
});
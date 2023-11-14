import React, { useState, useEffect } from "react";

import { ScrollView, StyleSheet, View } from 'react-native';
import Sugestoes from '../components/Home/Sugestoes';
import Categorias from '../components/Home/Categorias';
import frutaService from '../seeders/services/frutas';
import Card from "../components/Cards/CardFrutas";

export default function Home() {
  const [Frutas, setFrutas] = useState([]);

  async function BuscarDados() {
    const data = await frutaService.getAllFrutas();
    setFrutas(data);
  }

  useEffect(() => {
    BuscarDados();
  }, []);

  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
      <Sugestoes />
        <ScrollView horizontal={true} style={styles.img_sugestoes}>
          {Frutas.map((Fruta) => (
            <Card
            key={Fruta.id} fruta={Fruta} />
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
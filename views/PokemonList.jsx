import React, { useState, useEffect } from 'react';

import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import obtenerPokemon from '../Library/ConsumirAPI';
import pokeimg from '../images/pokeimg.png';
import { styles } from '../styles/misEstilos';

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await obtenerPokemon('');
      setPokemonList(pokemonData.results);
    };

    fetchData();
  }, []);

  const handleDeletePress = (pokemonName) => {
    const filteredList = pokemonList.filter((pokemon) => pokemon.name !== pokemonName);
    setPokemonList(filteredList);
  };

  const renderPokemonItem = ({ item }) => {
    const pokemonId = item.url.split('/')[6];
    const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

    return (
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: pokemonImageUrl }} />
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeletePress(item.name)}
        >
          <Text style={styles.deleteButtonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <Image style={styles.pokeimg} source={pokeimg} />
      <FlatList
        data={pokemonList}
        renderItem={renderPokemonItem}
        keyExtractor={(item) => item.url}
        numColumns={2}
        columnWrapperStyle={styles.listContainer}
      />
    </>
  );
}

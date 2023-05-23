import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import obtenerPokemon from '../Library/ConsumirAPI';
import pokeimg from '../images/pokeimg.png';
import { styles } from '../styles/misEstilos';
import pokemonGo from '../images/pokemonGo.jpg'
import { ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchText, setSearchText] = useState('');

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
    const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

    return (
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: pokemonImageUrl }} />
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeletePress(item.name)}
        >
          <Text style={styles.deleteButtonText}><AntDesign name="delete" size={18} color="black" />Eliminar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const buscarPokemons = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <ImageBackground source={pokemonGo} resizeMode="cover" style={styles.pokeFondo}>
        <Image style={styles.pokeimg} source={pokeimg} />
        
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar Pokémon"
          placeholderTextColor="#ffcc01" 
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />

        <FlatList
          data={buscarPokemons}
          renderItem={renderPokemonItem}
          keyExtractor={(item) => item.url}
          numColumns={2}
          columnWrapperStyle={styles.listContainer}
        />
      </ImageBackground>
    </>
  );
}

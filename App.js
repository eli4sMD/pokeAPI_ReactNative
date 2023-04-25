import React, { useState } from 'react';
import { Button, FlatList, Text, View, Image, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import obtenerPokemon from './Library/ConsumirAPI';
import pokeimg from './images/pokeimg.png'

const { width } = Dimensions.get('window');

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [showPokemonList, setShowPokemonList] = useState(false);
  const [title, setTitle] = useState('Mostrar lista de Pokemons');

  const handleButtonPress = async () => {
    const pokemonData = await obtenerPokemon(''); // Dejar vacío para obtener todos los pokemons
    setPokemonList(pokemonData.results);
    setShowPokemonList(!showPokemonList); // cambia el estado de visibilidad
    setTitle(title !== 'Ocultar lista' ? 'Ocultar lista' : 'Mostrar lista de Pokemons');
  };

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
    <View style={styles.container}>
      <Image style={styles.pokeimg} source={pokeimg} />
      <Button color={'#ffcc01'} title={title} onPress={handleButtonPress} />
      {showPokemonList && (
        <FlatList
          data={pokemonList}
          renderItem={renderPokemonItem}
          keyExtractor={(item) => item.url}
          numColumns={2}
          columnWrapperStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  listContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: (width - 40) / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },

  pokeimg: {
    marginBottom: 20,
    marginTop: 30,
    width: 300,
    height: 110,
  },
  pokefondo: {
    flex: 1,
    justifyContent: 'center',
  }
});

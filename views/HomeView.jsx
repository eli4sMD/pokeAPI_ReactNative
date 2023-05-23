import { FlatList, View, Image } from 'react-native'
import React from 'react'
import ButtonTitle from '../components/ButtonTitle'
import pokeimg from '../images/pokeimg.png'
import pokemonGo from '../images/pokemonGo.jpg'
import { styles } from '../styles/misEstilos';
import {ImageBackground} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const HomeView = ({ navigation }) => {
  const views = [
    { id: '1', title: [<AntDesign name="bars" size={13.5} color="white" />, 'Lista de Pokemones'], path: 'pokemones' }
  ];

  const renderItem = ({ item }) => (
    <ButtonTitle key={item.id} title={item.title} action={() => navigation.navigate(item.path)} />
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={pokemonGo} resizeMode="cover" style={styles.pokeFondo}>
        <Image style={styles.pokeimgCenter} source={pokeimg} />
        <FlatList data={views} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </ImageBackground>
    </View>
  );
};

export default HomeView;

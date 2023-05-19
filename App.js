import React from 'react';
import PokemonList from './views/PokemonList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeView from './views/HomeView';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        {/* Nuestro controlador/context de navegacion */}
        <Stack.Navigator initialRouteName="Home">
          {/* Las vistas/paginas que tendra nuestra app */}
          {/* Esto se asemeja al funcionamiento de react router dom con las Routes */}
          <Stack.Screen name="home" component={HomeView} />
          <Stack.Screen name="pokemones" component={PokemonList} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

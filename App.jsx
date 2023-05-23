import React from 'react';
import { Text } from 'react-native';
import PokemonList from './views/PokemonList';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeView from './views/HomeView';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Pokemon"
            component={HomeView}
            options={{
              headerTitle: () => (
                <Text style={{ color: '#ffcc01' }}>
                  <Ionicons name="home-outline" size={24} color="#ffcc01" />
                    Pokemon
                </Text>
              ),
              headerStyle: {
                backgroundColor: '#0a1825',
              },
            }}
          />
          <Stack.Screen
            name="pokemones"
            component={PokemonList}
            options={{
              headerTitle: () => (
                <Text style={{ color: '#ffcc01' }}>
                    Pokemon
                </Text>
              ),
              color: '#ffcc01',
              headerStyle: {
                backgroundColor: '#0a1825',
              },
              headerTintColor: '#ffcc01'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

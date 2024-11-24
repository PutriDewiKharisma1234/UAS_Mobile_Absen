import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { SplashScreen } from 'expo-router';
import Login from './screens/Login';
import Home from './screens/Home';
import Riwayat from './screens/Riwayat';
import Lupa from './screens/Lupa';
import Daftar from './screens/Daftar'

// Buat Stack dan Tab Navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Menjaga splash screen tetap tampil selama aplikasi dimuat
SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    async function prepare() {
      // Simulasi proses loading, bisa diganti dengan kode lain untuk memuat data, dll
      await new Promise(resolve => setTimeout(resolve, 3000)); // Tampilkan splash screen selama 3 detik
      SplashScreen.hideAsync(); // Menyembunyikan splash screen setelah proses selesai
    }

    prepare();
  }, []);

  return (
    <NavigationContainer independent={true}>
      {/* Pastikan hanya ada satu NavigationContainer di sini */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} // Contoh opsi untuk menyembunyikan header
        />
        <Stack.Screen name="Lupa" component={Lupa} />
        <Stack.Screen name="Daftar" component={Daftar} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Riwayat" component={Riwayat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2D8D8', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

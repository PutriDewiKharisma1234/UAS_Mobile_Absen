import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      {/* Gambar Logo */}
      <Image 
        source={require('../foto/splashscreen.png')}  // Jalur relatif menuju folder assets
        style={styles.logo}
      />

      <Text style={styles.title}>Selamat Datang di CheckInOut</Text>
      
      {/* Input Username */}
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      
      {/* Input Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      
      {/* Tombol Masuk */}
      <Button
        title="Masuk"
        onPress={() => navigation.navigate('Home')}  // Navigasi ke Home saat tombol Masuk ditekan
      />
      
      {/* Spasi antara tombol */}
      <View style={{ height: 10 }} />

      {/* Tombol Daftar */}
      <Button
        title="Daftar"
        color="#555" // Warna abu-abu untuk membedakan tombol Daftar
        onPress={() => navigation.replace('Login')}  // Hanya reload layar sebagai simulasi untuk pendaftaran
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#E2D8D8',
  },
   logo: {
    width: 400,
    height: 250,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

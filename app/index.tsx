import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SplashScreen } from 'expo-router';


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
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Aplikasi CHECKINOUT!</Text>
      {/* Di sini Anda bisa menambahkan lebih banyak komponen, seperti tombol atau daftar */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2D8D8', // Warna latar belakang sesuai dengan app.json
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

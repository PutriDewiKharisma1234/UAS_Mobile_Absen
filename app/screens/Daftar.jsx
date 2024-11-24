import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Judul Halaman */}
      <Text style={styles.title}>Daftar Akun Baru</Text>

      {/* Input Nama Lengkap */}
      <TextInput style={styles.input} placeholder="Nama Lengkap" />

      {/* Input Email */}
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />

      {/* Input Username */}
      <TextInput style={styles.input} placeholder="Username" />

      {/* Input Password */}
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      {/* Input Konfirmasi Password */}
      <TextInput style={styles.input} placeholder="Konfirmasi Password" secureTextEntry />

      {/* Tombol Daftar */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => {
          alert('Pendaftaran berhasil!');
          navigation.navigate('Login'); // Kembali ke LoginScreen setelah daftar
        }}
      >
        <Text style={styles.registerButtonText}>Daftar</Text>
      </TouchableOpacity>

      {/* Tombol Kembali ke Login */}
      <View style={styles.loginRedirect}>
        <Text style={styles.loginText}>Sudah punya akun? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Masuk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2D8D8',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#CBCBCB',
  },
  registerButton: {
    width: '50%',
    padding: 15,
    backgroundColor: '#CBCBCB',
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginRedirect: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    fontSize: 14,
    color: '#998F8F',
    fontWeight: 'bold',
  },
});

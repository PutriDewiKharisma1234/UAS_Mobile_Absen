import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Gambar Logo */}
      <Image
        source={require('../foto/splashscreen.png')} // Jalur relatif menuju folder assets
        style={styles.logo}
      />

      {/* Judul */}
      <Text style={styles.title}>Silahkan masukkan Username & Password Anda</Text>

      {/* Input Username */}
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.input} placeholder="Username" />

      {/* Input Password */}
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      {/* Tombol Lupa Password */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Lupa')}
        style={styles.forgotPassword}
      >
        <Text style={styles.forgotPasswordText}>Lupa Password?</Text>
      </TouchableOpacity>

      {/* Tombol Masuk */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.loginButtonText}>Masuk</Text>
      </TouchableOpacity>

      {/* Teks Daftar */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Belum punya akun? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Daftar')}>
          <Text style={styles.registerLink}>Daftar</Text>
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
  logo: {
    width: 350,
    height: 200,
    marginBottom: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    width: '50%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 100,
    backgroundColor: '#CBCBCB',
    marginBottom: 15,
    textAlign: 'center',
    color : '#5E5858',
  },
  forgotPassword: {
    marginBottom: 30,
  },
  forgotPasswordText: {
    fontSize: 12,
    color: '#998F8F',
    fontWeight: 'bold',
  },
  loginButton: {
    width: '50%',
    padding: 15,
    backgroundColor: '#CBCBCB',
    borderRadius: 100,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#5E5858',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#5E5858',
  },
  registerLink: {
    fontSize: 14,
    color: '#5E5858',
    fontWeight: 'bold',
  },
});

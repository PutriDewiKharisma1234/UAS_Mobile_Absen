import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function Lupa({ navigation }) {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    if (email.trim() === '') {
      Alert.alert('Kesalahan', 'Mohon masukkan alamat email Anda.');
    } else {
      // Simulasikan permintaan reset password
      Alert.alert(
        'Berhasil',
        `Tautan pemulihan kata sandi telah dikirim ke ${email}.`,
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Judul */}
      <Text style={styles.title}>Reset Password</Text>

      {/* Penjelasan */}
      <Text style={styles.description}>
        Masukkan email Anda untuk menerima tautan reset kata sandi.
      </Text>

      {/* Input Email */}
      <TextInput
        style={styles.input}
        placeholder="Masukkan email Anda"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Tombol Kirim */}
      <TouchableOpacity style={styles.resetButton} onPress={handlePasswordReset}>
        <Text style={styles.resetButtonText}>Kirim</Text>
      </TouchableOpacity>

      {/* Tombol Kembali */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.backButtonText}>Kembali ke Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E2D8D8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  input: {
    width: '50%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 100,
    backgroundColor: '#CBCBCB',
    fontSize: 16,
    textAlign: 'center',
    color: '#5E5858',
  },
  resetButton: {
    backgroundColor: '#ccc',
    paddingVertical: 15,
    borderRadius: 100,
    marginTop: 20,
    width: '50%',
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#5E5858',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: '#998F8F',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

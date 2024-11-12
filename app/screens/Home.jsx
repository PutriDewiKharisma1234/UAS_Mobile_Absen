import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Selamat Datang</Text>
      <Text style={styles.subText}>&</Text>
      <Text style={styles.subText}>Selamat Bekerja</Text>

      {/* Card Profil */}
      <View style={styles.profileCard}>
        <Image
          source={require('../foto/pngtree-school-kids-going-to-waving-hands-cartoon-png-image_11931541.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.position}>Software Engineer</Text>
        </View>
      </View>

      {/* Tombol Absen */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert("Absen Masuk")}>
          <MaterialIcons name="login" size={24} color="#fff" />
          <Text style={styles.buttonText}>Absen Masuk</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.buttonOut]} onPress={() => alert("Absen Keluar")}>
          <MaterialIcons name="logout" size={24} color="#fff" />
          <Text style={styles.buttonText}>Absen Keluar</Text>
        </TouchableOpacity>
      </View>

      {/* Tombol Riwayat */}
      <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Riwayat')}>
        <MaterialIcons name="history" size={24} color="#4CAF50" />
        <Text style={styles.historyButtonText}>Lihat Riwayat Absen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F1F3F6',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  subText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  position: {
    fontSize: 16,
    color: '#777',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  buttonOut: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  historyButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyButtonText: {
    fontSize: 16,
    color: '#4CAF50',
    marginLeft: 10,
  },

});

import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [weekDates, setWeekDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(() => {
    const generateWeekDates = () => {
      const today = new Date();
      const week = [];
      const startOfWeek = today.getDate() - today.getDay(); // Awal minggu (Minggu)
      for (let i = 0; i < 7; i++) {
        const current = new Date(today.getFullYear(), today.getMonth(), startOfWeek + i);
        week.push({
          date: current.toISOString().split('T')[0],
          fullDate: `${current.toLocaleDateString('id-ID', { weekday: 'short' }).toUpperCase()} ${current.getDate()}`,
          isToday: i === today.getDay(),
        });
      }
      setWeekDates(week);

      // Set bulan saat ini
      const monthName = today.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
      setCurrentMonth(monthName.charAt(0).toUpperCase() + monthName.slice(1)); // Huruf kapital awal
    };

    generateWeekDates();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Teks Selamat Datang */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Selamat Datang</Text>
        <Text style={styles.subText}>di Aplikasi Kehadiran</Text>
      </View>

      {/* Card Profil */}
      <View style={styles.profileCard}>
        <Image
          source={require('../foto/pngtree-school-kids-going-to-waving-hands-cartoon-png-image_11931541.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Putri Dewi</Text>
          <Text style={styles.position}>Admin</Text>
        </View>
      </View>

      {/* Menampilkan Nama Bulan dan Tahun */}
      <Text style={styles.monthYearText}>{currentMonth}</Text>

      {/* Kalender Mingguan */}
      <View style={styles.weekContainer}>
        {weekDates.map((item) => (
          <TouchableOpacity
            key={item.date}
            style={[
              styles.dateBox,
              item.date === selectedDate ? styles.selectedDateBox : null,
              item.isToday ? styles.todayBox : null,
            ]}
            onPress={() => setSelectedDate(item.date)}
          >
            <Text style={[styles.dateText, item.isToday ? styles.todayText : null]}>
              {item.fullDate}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tombol Absen */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonIn]} onPress={() => alert('Absen Masuk Berhasil!')}>
          <MaterialIcons name="login" size={24} color="#fff" />
          <Text style={styles.buttonText}>Absen Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonOut]} onPress={() => alert('Absen Keluar Berhasil!')}>
          <MaterialIcons name="logout" size={24} color="#fff" />
          <Text style={styles.buttonText}>Absen Keluar</Text>
        </TouchableOpacity>
      </View>

      {/* Tombol Riwayat */}
      <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Riwayat')}>
        <MaterialIcons name="history" size={24} color="#fff" />
        <Text style={styles.historyButtonText}>Lihat Riwayat Absen</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2D8D8',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 5,
  },
  subText: {
    fontSize: 18,
    color: '#666',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 30,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  profileInfo: {
    marginLeft: 20,
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
  monthYearText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#998F8F',
    textAlign: 'center',
    marginBottom: 20,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    width: 100,
    marginHorizontal: 3,
  },
  selectedDateBox: {
    backgroundColor: '#4CAF50',
  },
  todayBox: {
    borderColor: '#f44336',
  },
  dateText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  todayText: {
    fontWeight: 'bold',
    color: '#f44336',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  buttonIn: {
    backgroundColor: '#4CAF50',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#2196F3',
    borderRadius: 10,
    elevation: 3,
  },
  historyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

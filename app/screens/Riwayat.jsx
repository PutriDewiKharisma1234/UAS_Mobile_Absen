// screens/AttendanceHistoryScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Riwayat() {
  const attendanceHistory = [
    { id: '1', date: '2023-11-10', status: 'Masuk', time: '08:00' },
    { id: '2', date: '2023-11-10', status: 'Keluar', time: '17:00' },
    { id: '3', date: '2023-11-09', status: 'Masuk', time: '08:05' },
    { id: '4', date: '2023-11-09', status: 'Keluar', time: '16:55' },
    // Tambahkan data lain sesuai kebutuhan
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riwayat Absen</Text>
      <FlatList
        data={attendanceHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyText}>
              {item.date} - {item.status} - {item.time}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E2D8D8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  historyItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  historyText: {
    fontSize: 16,
    color: '#333',
  },
});

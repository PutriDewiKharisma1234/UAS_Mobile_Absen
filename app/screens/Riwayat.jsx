import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Riwayat() {
  // Data riwayat absen
  const attendanceHistory = [
    { id: '1', date: '2023-11-10', status: 'Masuk', time: '08:00' },
    { id: '2', date: '2023-11-10', status: 'Keluar', time: '17:00' },
    { id: '3', date: '2023-11-09', status: 'Masuk', time: '08:05' },
    { id: '4', date: '2023-11-09', status: 'Keluar', time: '16:55' },
    // Tambahkan data lain sesuai kebutuhan
  ];

  // Menggabungkan data berdasarkan tanggal
  const groupedHistory = attendanceHistory.reduce((acc, record) => {
    const { date, status, time } = record;
    if (!acc[date]) {
      acc[date] = { date, Masuk: '', Keluar: '' };
    }
    acc[date][status] = time;
    return acc;
  }, {});

  const historyData = Object.values(groupedHistory); // Ubah objek menjadi array

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riwayat Absen</Text>
      <FlatList
        data={historyData}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <View style={styles.historyCard}>
            <Text style={styles.dateText}>{item.date}</Text>
            <View style={styles.timeRow}>
              <Text style={styles.label}>Masuk:</Text>
              <Text style={styles.time}>{item.Masuk || '-'}</Text>
            </View>
            <View style={styles.timeRow}>
              <Text style={styles.label}>Keluar:</Text>
              <Text style={styles.time}>{item.Keluar || '-'}</Text>
            </View>
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
  historyCard: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

type AttendanceStatus = 'Present' | 'Absent' | 'Late';

interface Attendance {
  id: string;
  date: string;
  subject: string;
  status: AttendanceStatus;
}


const attendanceData: Attendance[] = [
  { id: '1', date: '16 Dec 2025', subject: 'Maths', status: 'Present' },
  { id: '2', date: '15 Dec 2025', subject: 'Physics', status: 'Absent' },
  { id: '3', date: '14 Dec 2025', subject: 'Chemistry', status: 'Late' },
  { id: '4', date: '13 Dec 2025', subject: 'English', status: 'Present' },
];

export default function StudentAttendance() {
  const total = attendanceData.length;
  const present = attendanceData.filter(a => a.status === 'Present').length;
  const percentage = ((present / total) * 100).toFixed(1);

  const getStatusStyle = (status: AttendanceStatus) => {
    switch (status) {
      case 'Present':
        return styles.present;
      case 'Absent':
        return styles.absent;
      case 'Late':
        return styles.late;
    }
  };

  return (
    

    
    <SafeAreaView style={styles.container}>
        <Header title='Attendence'/>
      <View style={styles.summaryCard}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>{present}</Text>
          <Text style={styles.summaryLabel}>Present</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>{total - present}</Text>
          <Text style={styles.summaryLabel}>Absent</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>{percentage}%</Text>
          <Text style={styles.summaryLabel}>Attendance</Text>
        </View>
      </View>

      {/* Attendance List */}
      <FlatList
        data={attendanceData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.subject}>{item.subject}</Text>
            </View>
            <Text style={[styles.status, getStatusStyle(item.status)]}>
              {item.status}
            </Text>
          </View>
        )}
      />
      <Footer/>
    </SafeAreaView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  summaryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#777',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  date: {
    fontSize: 14,
    fontWeight: '600',
  },
  subject: {
    fontSize: 12,
    color: '#555',
  },
  status: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: 'hidden',
  },
  present: {
    backgroundColor: '#D4F4DD',
    color: '#1B8A3D',
  },
  absent: {
    backgroundColor: '#FFD6D6',
    color: '#C62828',
  },
  late: {
    backgroundColor: '#FFF3CD',
    color: '#9C6B00',
  },
});

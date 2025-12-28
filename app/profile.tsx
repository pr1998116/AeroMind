import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface StudentProfile {
  name: string;
  class: string;
  rollNo: string;
  email: string;
  phone: string;
  avatar: string;
}

const student: StudentProfile = {
  name: 'Aman Sharma',
  class: '10 - A',
  rollNo: '23',
  email: 'aman.sharma@student.edu',
  phone: '+91 98765 43210',
  avatar: 'https://i.pravatar.cc/300',
};

export default function StudentProfileScreen() {
  return (<SafeAreaProvider>
    <SafeAreaView>
        <Header title='Profile'/>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: student.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.classText}>Class {student.class}</Text>
      </View>

      {/* Info Card */}
      <View style={styles.card}>
        <ProfileRow label="Roll No" value={student.rollNo} />
        <ProfileRow label="Email" value={student.email} />
        <ProfileRow label="Phone" value={student.phone} />
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <ActionButton title="Edit Profile" />
        <ActionButton title="View Attendance" />
        <ActionButton title="View Performance" />
      </View>
    </ScrollView>
    

    </SafeAreaView>
    <Footer/>
  </SafeAreaProvider>
    
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

function ActionButton({ title }: { title: string }) {
  return (
    <TouchableOpacity style={styles.actionButton}>
      <Text style={styles.actionText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  header: {
    backgroundColor: '#2563EB',
    alignItems: 'center',
    paddingVertical: 40,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  classText: {
    fontSize: 14,
    color: '#E0E7FF',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  label: {
    color: '#64748B',
    fontSize: 14,
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
  },
  actions: {
    paddingHorizontal: 16,
  },
  actionButton: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2563EB',
    textAlign: 'center',
  },
});